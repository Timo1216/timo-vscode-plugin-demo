const vscode = require('vscode');
const { VSCODE_EXTENSION_NAME } = require('./constants');

module.exports = function(ctx) {
  const disposable = vscode.commands.registerCommand(`${VSCODE_EXTENSION_NAME}.getCurrentFilePath`, (uri) => {
    console.log('uri --->',uri);
    vscode.window.showInformationMessage(`当前文件的路径是 ${uri ? uri.path : '空'}`);
  });
  ctx.subscriptions.push(disposable);
}