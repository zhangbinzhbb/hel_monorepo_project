const helDevUtils = require('hel-dev-utils')
const pkg = require('./package.json')

// deploy to unpkg
const appInfo = helDevUtils.createVueSubApp(pkg, {
  npmCdnType: 'unpkg',
  externals: {
    // vue: 'Vue',
    // 'element-ui': 'ELEMENT'
  }
})

// deploy to self deployed unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://my-unpkg:8888' });

// deploy to git
// const subApp = helDevUtils.createVue2SubApp(pkg, { homePage: 'https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1' });
console.log('appInfo===>', appInfo.externals)
module.exports = appInfo
