#!/bin/bash

# HyperFPS.xyz Deployment Script
# This script builds and deploys the game to production

set -e  # Exit on error

echo "🚀 Starting HyperFPS deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Not in the Game directory${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Pulling latest changes from Git...${NC}"
git pull origin main

echo -e "${YELLOW}Step 2: Installing/updating dependencies...${NC}"
npm install

echo -e "${YELLOW}Step 3: Building production version...${NC}"
npm run build

echo -e "${YELLOW}Step 4: Deploying to web directory...${NC}"
sudo rm -rf /var/www/fps-game/*
sudo cp -r dist/* /var/www/fps-game/
sudo chown -R www-data:www-data /var/www/fps-game/

echo -e "${YELLOW}Step 5: Installing/updating server dependencies...${NC}"
cd server
npm install
cd ..

echo -e "${YELLOW}Step 6: Restarting multiplayer server...${NC}"
# Check if the service exists
if systemctl list-units --full -all | grep -Fq "hyperfps-server.service"; then
    sudo systemctl restart hyperfps-server
    echo -e "${GREEN}✓ Server restarted${NC}"
else
    echo -e "${YELLOW}Warning: hyperfps-server service not found. Starting server manually...${NC}"
    # Kill any existing server
    pkill -f "node.*simple-server" || true
    sleep 1
    # Start server in background
    cd server
    nohup node simple-server.js > /var/log/hyperfps-server.log 2>&1 &
    cd ..
    echo -e "${GREEN}✓ Server started manually${NC}"
fi

echo -e "${YELLOW}Step 7: Testing deployment...${NC}"
# Wait a moment for server to start
sleep 2

# Test if server is responding
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health | grep -q "200"; then
    echo -e "${GREEN}✓ Server health check passed${NC}"
else
    echo -e "${RED}⚠ Warning: Server health check failed${NC}"
fi

# Test if website is accessible
if curl -s -o /dev/null -w "%{http_code}" https://hyperfps.xyz | grep -q "200"; then
    echo -e "${GREEN}✓ Website is accessible${NC}"
else
    echo -e "${RED}⚠ Warning: Website check failed${NC}"
fi

echo ""
echo -e "${GREEN}🎮 Deployment complete!${NC}"
echo -e "${GREEN}Game is live at: https://hyperfps.xyz${NC}"
echo ""
echo "To check server logs, run: sudo journalctl -u hyperfps-server -f"
echo "Or if running manually: tail -f /var/log/hyperfps-server.log"