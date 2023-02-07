const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const {convertObjToXml} = require('@glassball/xml');
const {getTallyCommandMap, getCurrentCompany, tallyApiInit} = require('@glassball/tally');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow = null;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  // In dev mode open react-app else open index.html
  if (isDev) {
    const clientPort = 3000;
    mainWindow.loadURL(`http://localhost:${clientPort}`)
        .then(response => {

        })
        .catch(error => {
          if (error.code === 'ERR_CONNECTION_REFUSED') {
            mainWindow.loadFile(path.join(__dirname, 'error.html'));
            return;
          }

          throw error;
        });
  } else {
    const uiPackage = `@glassball/tallymate-ui`;
    const packagePath = require.resolve(`${uiPackage}/build/index.html`)
    console.log('packagePath:', packagePath);
    mainWindow.loadFile(packagePath);
  }

  const sampleObj = {
    "name": "Alice",
    "age": 30
  }
  console.log('Sample Object:', convertObjToXml(sampleObj));
  console.log(`convertObjToXml=${convertObjToXml}`);
  console.log('Tally Command Map:', getTallyCommandMap());

  const tallyServer = {host: '192.168.64.3', port: 9000};
  tallyApiInit(tallyServer);
  getCurrentCompany({})
      .then(resp => {
        console.log('Tally Current Company:', resp.response.value);
      })
      .catch(err => {
        console.error(`Error! ${JSON.stringify(err, null, 2)}`);
      });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  mainWindow = null;
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
