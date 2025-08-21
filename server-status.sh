#!/bin/bash

# HyperFPS Server Status Check Script

echo "======================================"
echo "   HyperFPS Server Status Check"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if systemd service is running
echo "1. Systemd Service Status:"
if systemctl is-active --quiet hyperfps-server; then
    echo -e "   ${GREEN}✓ Service is running${NC}"
    systemctl status hyperfps-server --no-pager | grep "Active:"
else
    echo -e "   ${RED}✗ Service is not running${NC}"
fi
echo ""

# Check if Node process is running
echo "2. Node.js Process:"
if pgrep -f "node.*simple-server" > /dev/null; then
    echo -e "   ${GREEN}✓ Server process found${NC}"
    ps aux | grep "simple-server" | grep -v grep | awk '{print "   PID:", $2, "CPU:", $3"%", "MEM:", $4"%"}'
else
    echo -e "   ${RED}✗ No server process found${NC}"
fi
echo ""

# Check server health endpoint
echo "3. Health Check:"
HEALTH=$(curl -s http://localhost:3000/health 2>/dev/null)
if [ $? -eq 0 ]; then
    echo -e "   ${GREEN}✓ Server responding${NC}"
    echo "   $HEALTH" | python3 -m json.tool 2>/dev/null | head -n 10 || echo "   $HEALTH"
else
    echo -e "   ${RED}✗ Server not responding on port 3000${NC}"
fi
echo ""

# Check website accessibility
echo "4. Website Status:"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://hyperfps.xyz)
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "   ${GREEN}✓ Website accessible (HTTP $HTTP_CODE)${NC}"
else
    echo -e "   ${RED}✗ Website issues (HTTP $HTTP_CODE)${NC}"
fi
echo ""

# Check nginx status
echo "5. Nginx Status:"
if systemctl is-active --quiet nginx; then
    echo -e "   ${GREEN}✓ Nginx is running${NC}"
else
    echo -e "   ${RED}✗ Nginx is not running${NC}"
fi
echo ""

# Check recent logs
echo "6. Recent Server Logs (last 5 lines):"
if [ -f /var/log/hyperfps-server.log ]; then
    tail -n 5 /var/log/hyperfps-server.log 2>/dev/null | sed 's/^/   /'
else
    journalctl -u hyperfps-server -n 5 --no-pager 2>/dev/null | sed 's/^/   /'
fi
echo ""

# Port check
echo "7. Port 3000 Status:"
if netstat -tuln | grep -q ":3000 "; then
    echo -e "   ${GREEN}✓ Port 3000 is listening${NC}"
    netstat -tuln | grep ":3000 " | sed 's/^/   /'
else
    echo -e "   ${RED}✗ Port 3000 is not listening${NC}"
fi
echo ""

echo "======================================"
echo "To view full logs: journalctl -u hyperfps-server -f"
echo "To restart server: sudo systemctl restart hyperfps-server"