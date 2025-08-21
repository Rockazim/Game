#!/bin/bash

# HyperFPS Server Restart Script

echo "Restarting HyperFPS Server..."
echo ""

# Try systemd first
if systemctl list-units --full -all | grep -Fq "hyperfps-server.service"; then
    echo "Using systemd to restart..."
    sudo systemctl restart hyperfps-server
    sleep 2
    
    # Check if restart was successful
    if systemctl is-active --quiet hyperfps-server; then
        echo "✅ Server restarted successfully!"
        systemctl status hyperfps-server --no-pager | grep "Active:"
    else
        echo "❌ Failed to restart server"
        echo "Check logs: journalctl -u hyperfps-server -n 50"
    fi
else
    echo "Systemd service not found. Restarting manually..."
    
    # Kill existing process
    pkill -f "node.*simple-server" && echo "Stopped existing server"
    sleep 1
    
    # Start new process
    cd /root/Game/server
    nohup node simple-server.js > /var/log/hyperfps-server.log 2>&1 &
    
    echo "✅ Server restarted manually"
    echo "Check logs: tail -f /var/log/hyperfps-server.log"
fi

echo ""
echo "Testing server health..."
sleep 2

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health | grep -q "200"; then
    echo "✅ Server is responding correctly"
else
    echo "⚠️  Server may still be starting up..."
fi