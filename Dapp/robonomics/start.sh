# stop script on error
set -e

if ! [ -x "$(command -v npm)" ]; then
  echo 'Error: npm is not installed.' >&2
  exit 1
fi

if npm ls ipfs | grep "empty"; then
  printf "
Installing ...
"
  npm install
fi

printf "
Running pub/sub sample application...
"
node index.js