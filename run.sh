gunicorn  -b 0.0.0.0:8000 -w 5 --log-level=DEBUG --access-logfile - --error-logfile - application  --timeout 300 --reload

fg %1
