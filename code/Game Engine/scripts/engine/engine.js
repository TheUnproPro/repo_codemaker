var remote = require('electron').remote;     
var ipcRenderer = require('electron').ipcRenderer;     

//Get remote data access ^

//Quick function to access remote data
function accData() {
    return remote.getGlobal('iData');
}

/* Qucik method of require, gets the path from
remote */
function include(p) {
    return require(accData().path + p);
}

//Set up variables.
include("/scripts/engine/varSetup.js");