#!/bin/bash

# Secure Multiplayer FPS Game Launcher
# This script starts both the server and client for local development

echo "🎮 Starting Secure Multiplayer FPS Game..."
echo "==========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${YELLOW}⚠️  Node.js version is less than 18. Please upgrade for best compatibility.${NC}"
fi

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down services...${NC}"
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    exit 0
}

# Set up trap for cleanup
trap cleanup INT TERM

# Install server dependencies if needed
echo -e "${GREEN}📦 Checking server dependencies...${NC}"
cd server
if [ ! -d "node_modules" ]; then
    echo "Installing server dependencies..."
    npm install
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}Creating .env file from template...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit server/.env with your configuration${NC}"
fi

# Start the server
echo -e "${GREEN}🚀 Starting game server on port 3000...${NC}"
npm start &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Check if server is running
if ! kill -0 $SERVER_PID 2>/dev/null; then
    echo -e "${RED}❌ Failed to start server. Check logs above.${NC}"
    exit 1
fi

# Go back to root directory
cd ..

# Install client dependencies if needed
echo -e "${GREEN}📦 Checking client dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo "Installing client dependencies..."
    npm install
fi

# Start the client
echo -e "${GREEN}🎮 Starting game client on port 5173...${NC}"
npm run dev &
CLIENT_PID=$!

# Wait a moment for client to start
sleep 3

# Display success message
echo -e "\n${GREEN}✅ Multiplayer FPS Game is running!${NC}"
echo "==========================================="
echo -e "🎮 Game Client: ${GREEN}http://localhost:5173${NC}"
echo -e "🖥️  Game Server: ${GREEN}http://localhost:3000${NC}"
echo -e "📊 Health Check: ${GREEN}http://localhost:3000/health${NC}"
echo "==========================================="
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}\n"

# Default test accounts (for development only)
echo -e "${YELLOW}📝 Test Accounts (Development Only):${NC}"
echo "  Register new accounts or use:"
echo "  Username: player1 / Password: Player1@123"
echo "  Username: player2 / Password: Player2@123"
echo ""
echo -e "${GREEN}🎯 Game Controls:${NC}"
echo "  WASD - Move"
echo "  Mouse - Look"
echo "  Click - Shoot"
echo "  R - Reload"
echo "  Shift - Sprint"
echo "  C - Crouch"
echo "  Space - Jump"
echo "  1/2/3 - Switch Weapons"
echo ""

# Keep script running
wait $SERVER_PID $CLIENT_PID