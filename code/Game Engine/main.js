/**
 * @name RMMV_Plugin_Maker
 * @copyright 2017 (c) blah blah
 * @license OpenSource (?)
*/

/*
  TODO:
    1) Saving / loading files, maybe encrypting them?
    2) Erase this comment.
  ----
*/

const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
var ipcMain = require('electron').ipcMain;
const PATH = app.getAppPath();
const VERSION = "0.1";
const NAME = "Plugin Maker";
console.log(NAME + " Initialized.\n" + NAME + " Version: " + VERSION);

global.iData = {path:PATH}; 
/* Empty object for later use but copy path for
a function */

let win

function createWindow () {
  win = new BrowserWindow({width: 826, height: 654})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools();


  // Emitted when the window is closed.
  win.on('closed', () => {
    console.log("Thank you for choosing Express Mail! have a nice day.");
    //Meme message
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

/*
  Do your magical menu shit here :P
*/

