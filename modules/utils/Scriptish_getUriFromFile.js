var EXPORTED_SYMBOLS = ["Scriptish_getUriFromFile"];
Components.utils.import("resource://gre/modules/Services.jsm");
const Scriptish_getUriFromFile = function (aFile) Services.io.newFileURI(aFile);
