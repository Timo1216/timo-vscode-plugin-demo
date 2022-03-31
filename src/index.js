const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {vscode.ExtensionContext} context
 */
function activate(ctx) {
	console.log('恭喜, your extension "timo-vscode-plugin-demo" is 已被激活!');
  // 注册 commands 命令
  // say Hello 
  require('./sayHello')(ctx);
  // 获取文件夹path
  require('./getCurrentFilePath')(ctx);
}

// 插件被释放时触发
function deactivate() {
	console.log('您的扩展“timo-vscode-plugin-demo”已被释放！')
}

module.exports = {
	activate,
	deactivate
}