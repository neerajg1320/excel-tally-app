# Clone repo
git clone ...

# Development mode
lerna bootstrap
npm start

# Production mode
mkdir packages/apps/electron-tally/node_modules
lerna bootstrap
npm run build

$ cd packages/apps/electron-tally/dist
$ open mac-universal/TallyMate.app