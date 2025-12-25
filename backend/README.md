*pm2 command*
pm2 start /home/thatsayon/sottosamachar/backend/venv/bin/uvicorn \
  --name frontend-backend \
  --interpreter none \
  -- core.asgi:application --host 0.0.0.0 --port 8001


*setting module export command*
export DJANGO_SETTINGS_MODULE=core.settings.dev
