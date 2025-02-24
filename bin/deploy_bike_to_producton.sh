#!/usr/bin/env bash

cd "$(dirname "$0")/../frontend"
pnpm generate
rsync -rva --delete ./.output/public/* user@alcocounter.ru:/home/user/www/bikecontent.ru/www/frontend
cd ../backend
# rsync -rva --delete --exclude="__pycache__" --exclude=".venv" * user@alcocounter.ru:/home/user/www/bikecontent.ru/www/backend
