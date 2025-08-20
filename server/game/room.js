export class Room {
  constructor(id, name, maxPlayers = 10) {
    this.id = id;
    this.name = name;
    this.maxPlayers = maxPlayers;
    this.players = new Map();
    this.playerCount = 0;
    
    // Game state
    this.gameMode = 'deathmatch';
    this.gameState = 'waiting'; // waiting, playing, ended
    this.roundNumber = 0;
    this.roundTime = 0;
    this.maxRoundTime = 5 * 60 * 1000; // 5 minutes
    this.scoreLimit = 30;
    
    // Teams (for team modes)
    this.teams = {
      ct: new Set(),
      t: new Set()
    };
    
    // Map data
    this.mapName = 'dust2';
    this.spawnPoints = {
      ct: [
        { x: 10, y: 0, z: 10 },
        { x: 15, y: 0, z: 10 },
        { x: 10, y: 0, z: 15 }
      ],
      t: [
        { x: -10, y: 0, z: -10 },
        { x: -15, y: 0, z: -10 },
        { x: -10, y: 0, z: -15 }
      ],
      dm: [ // Deathmatch spawn points
        { x: 0, y: 0, z: 0 },
        { x: 20, y: 0, z: 20 },
        { x: -20, y: 0, z: -20 },
        { x: 20, y: 0, z: -20 },
        { x: -20, y: 0, z: 20 }
      ]
    };
    
    // Timestamps
    this.createdAt = Date.now();
    this.lastUpdate = Date.now();
    this.roundStartTime = null;
    
    // Statistics
    this.totalKills = 0;
    this.totalShots = 0;
  }

  addPlayer(player) {
    if (this.isFull()) {
      throw new Error('Room is full');
    }

    this.players.set(player.id, player);
    this.playerCount++;
    
    // Assign team for team modes
    if (this.gameMode === 'team') {
      this.assignTeam(player);
    }

    // Give spawn position
    const spawnPoint = this.getSpawnPoint(player.team);
    player.position = spawnPoint;
    player.respawn(spawnPoint);

    // Start game if enough players
    if (this.playerCount >= 2 && this.gameState === 'waiting') {
      this.startGame();
    }

    return true;
  }

  removePlayer(playerId) {
    const player = this.players.get(playerId);
    if (!player) return false;

    // Remove from team
    if (player.team) {
      this.teams[player.team].delete(playerId);
    }

    this.players.delete(playerId);
    this.playerCount--;

    // End game if not enough players
    if (this.playerCount < 2 && this.gameState === 'playing') {
      this.endGame();
    }

    return true;
  }

  assignTeam(player) {
    // Balance teams
    if (this.teams.ct.size <= this.teams.t.size) {
      player.team = 'ct';
      this.teams.ct.add(player.id);
    } else {
      player.team = 't';
      this.teams.t.add(player.id);
    }
  }

  getSpawnPoint(team) {
    let spawnPoints;
    
    if (this.gameMode === 'deathmatch') {
      spawnPoints = this.spawnPoints.dm;
    } else if (team === 'ct') {
      spawnPoints = this.spawnPoints.ct;
    } else if (team === 't') {
      spawnPoints = this.spawnPoints.t;
    } else {
      spawnPoints = this.spawnPoints.dm;
    }

    // Return random spawn point
    const index = Math.floor(Math.random() * spawnPoints.length);
    return { ...spawnPoints[index] }; // Return copy
  }

  getRandomSpawnPoint() {
    const allSpawnPoints = [
      ...this.spawnPoints.ct,
      ...this.spawnPoints.t,
      ...this.spawnPoints.dm
    ];
    
    const index = Math.floor(Math.random() * allSpawnPoints.length);
    return { ...allSpawnPoints[index] };
  }

  startGame() {
    this.gameState = 'playing';
    this.roundNumber = 1;
    this.roundStartTime = Date.now();
    this.roundTime = 0;

    // Reset player stats for new round
    for (const player of this.players.values()) {
      player.stats.kills = 0;
      player.stats.deaths = 0;
      player.stats.score = 0;
      
      // Respawn players
      const spawnPoint = this.getSpawnPoint(player.team);
      player.respawn(spawnPoint);
    }

    this.broadcast('gameStarted', {
      gameMode: this.gameMode,
      mapName: this.mapName,
      roundNumber: this.roundNumber,
      scoreLimit: this.scoreLimit
    });
  }

  endGame() {
    this.gameState = 'ended';
    
    // Calculate winner
    const winner = this.calculateWinner();
    
    this.broadcast('gameEnded', {
      winner,
      scores: this.getScores(),
      stats: this.getGameStats()
    });

    // Reset for next game
    setTimeout(() => {
      if (this.playerCount >= 2) {
        this.startGame();
      } else {
        this.gameState = 'waiting';
      }
    }, 10000); // 10 second delay before next game
  }

  calculateWinner() {
    if (this.gameMode === 'deathmatch') {
      let topPlayer = null;
      let topScore = 0;
      
      for (const player of this.players.values()) {
        if (player.stats.score > topScore) {
          topScore = player.stats.score;
          topPlayer = player;
        }
      }
      
      return topPlayer ? { type: 'player', id: topPlayer.id, name: topPlayer.name } : null;
    } else if (this.gameMode === 'team') {
      const ctScore = this.getTeamScore('ct');
      const tScore = this.getTeamScore('t');
      
      if (ctScore > tScore) {
        return { type: 'team', team: 'ct', score: ctScore };
      } else if (tScore > ctScore) {
        return { type: 'team', team: 't', score: tScore };
      } else {
        return { type: 'draw' };
      }
    }
    
    return null;
  }

  getTeamScore(team) {
    let score = 0;
    for (const playerId of this.teams[team]) {
      const player = this.players.get(playerId);
      if (player) {
        score += player.stats.score;
      }
    }
    return score;
  }

  getScores() {
    const scores = [];
    for (const player of this.players.values()) {
      scores.push({
        playerId: player.id,
        playerName: player.name,
        kills: player.stats.kills,
        deaths: player.stats.deaths,
        score: player.stats.score
      });
    }
    
    // Sort by score
    scores.sort((a, b) => b.score - a.score);
    return scores;
  }

  getGameStats() {
    return {
      totalKills: this.totalKills,
      totalShots: this.totalShots,
      gameDuration: Date.now() - this.roundStartTime,
      playerCount: this.playerCount
    };
  }

  update(now) {
    if (this.gameState !== 'playing') return;

    // Update round time
    this.roundTime = now - this.roundStartTime;

    // Check for round end conditions
    if (this.roundTime > this.maxRoundTime) {
      this.endGame();
      return;
    }

    // Check score limit
    for (const player of this.players.values()) {
      if (player.stats.score >= this.scoreLimit) {
        this.endGame();
        return;
      }
    }

    this.lastUpdate = now;
  }

  getState() {
    const players = [];
    for (const player of this.players.values()) {
      players.push({
        id: player.id,
        name: player.name,
        position: player.position,
        rotation: player.rotation,
        health: player.health,
        currentWeapon: player.currentWeapon,
        isAlive: player.isAlive,
        team: player.team
      });
    }

    return {
      roomId: this.id,
      gameState: this.gameState,
      gameMode: this.gameMode,
      roundTime: this.roundTime,
      players,
      scores: this.getScores()
    };
  }

  broadcast(event, data) {
    for (const player of this.players.values()) {
      player.socket.emit(event, data);
    }
  }

  broadcastToOthers(senderId, event, data) {
    for (const player of this.players.values()) {
      if (player.id !== senderId) {
        player.socket.emit(event, data);
      }
    }
  }

  isFull() {
    return this.playerCount >= this.maxPlayers;
  }

  isEmpty() {
    return this.playerCount === 0;
  }

  getPlayerList() {
    const list = [];
    for (const player of this.players.values()) {
      list.push({
        id: player.id,
        name: player.name,
        team: player.team
      });
    }
    return list;
  }
}