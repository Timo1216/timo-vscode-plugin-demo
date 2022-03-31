const vscode = require('vscode');
const { VSCODE_EXTENSION_NAME } = require('./constants');

module.exports = function(ctx) {
  const disposable = vscode.commands.registerCommand(`${VSCODE_EXTENSION_NAME}.sayHello`, (arg) => {
    console.log('arg --->',arg);
    vscode.window.showInformationMessage('Hello Timo!');
  });
  ctx.subscriptions.push(disposable);
}