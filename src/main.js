// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
// import router from './router'
import VueResourse from 'vue-resource'
import ElementUI from 'element-ui'; //引入饿了么框架
import 'element-ui/lib/theme-default/index.css'
//开启DEBUG模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResourse);
Vue.use(ElementUI);
Vue.config.productionTip = true;

//定义组件
// const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
// import secondecomponent from 'components/secondcomponent.vue'
//
// //创建一个路由器实例
// //配置路由规则
// const router = new VueRouter ({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/first',
//       component: First
//     },
//     {
//       path: '/second',
//       component: secondecomponent
//     }
//   ]
// });
//
//创建应用，创建路由器实例，挂载到#app的实例上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
