const { SyncHook, AsyncSeriesHook } = require('tapable');
const Plugin = require('./plugin');
class Webpack {
  constructor() {
    // 生命周期
    this.hooks = {
      emit: new AsyncSeriesHook(),
      done: new SyncHook()
    }
  }
  run() {
    setTimeout(() => {
      this.hooks.emit.promise();
    }, 1000);
    setTimeout(() => {
      this.hooks.done.call();
    }, 2000);
  }
}
let options = {
  plugins: [new Plugin()]
}
let complier = new Webpack();
for (let p of options.plugins) {
  // 插件
  p.apply(complier);
  // apply (complier) { complier.hooks.emit.tapXXXX }
}
complier.run();