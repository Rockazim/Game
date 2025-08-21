#!/bin/bash

# HyperFPS Server Log Viewer

echo "HyperFPS Server Logs"
echo "===================="
echo ""
echo "Press Ctrl+C to exit"
echo ""

# Check if using systemd or manual logging
if systemctl list-units --full -all | grep -Fq "hyperfps-server.service"; then
    echo "Viewing systemd logs..."
    echo "------------------------"
    sudo journalctl -u hyperfps-server -f
elif [ -f /var/log/hyperfps-server.log ]; then
    echo "Viewing manual log file..."
    echo "------------------------"
    tail -f /var/log/hyperfps-server.log
else
    echo "No logs found. Starting server may be required."
    echo ""
    echo "To start server:"
    echo "  sudo systemctl start hyperfps-server"
    echo "  OR"
    echo "  cd server && node simple-server.js"
fi