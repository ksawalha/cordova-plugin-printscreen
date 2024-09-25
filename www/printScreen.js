var exec = require('cordova/exec');

var BluetoothPrinter = {
    checkBluetooth: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BluetoothPrinter', 'checkBluetooth', []);
    },
    
    captureAndPrintScreenshot: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BluetoothPrinter', 'captureAndPrintScreenshot', []);
    }
};

module.exports = BluetoothPrinter;
