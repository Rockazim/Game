#!/bin/bash

# Install systemd service for HyperFPS server

set -e

echo "Installing HyperFPS server as systemd service..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root (use sudo)"
    exit 1
fi

# Copy service file
cp hyperfps-server.service /etc/systemd/system/

# Reload systemd
systemctl daemon-reload

# Enable service to start on boot
systemctl enable hyperfps-server

# Start the service
systemctl start hyperfps-server

# Check status
systemctl status hyperfps-server --no-pager

echo ""
echo "✅ HyperFPS server service installed and started!"
echo ""
echo "Useful commands:"
echo "  systemctl status hyperfps-server   # Check status"
echo "  systemctl restart hyperfps-server  # Restart server"
echo "  systemctl stop hyperfps-server     # Stop server"
echo "  journalctl -u hyperfps-server -f   # View logs"