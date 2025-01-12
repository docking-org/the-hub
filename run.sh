#!/bin/bash

# set -m

# gunicorn  -b 0.0.0.0:8000 -w 5 --log-level=DEBUG --access-logfile - --error-logfile - application  --timeout 300 --reload &

# fg %1

tmux new-session -d -s react_app "npm start"

# Keep the container running
tail -f /dev/null
