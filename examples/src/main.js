import App from './App.vue';
import vUtilsPkg from '../../lib/main';


Vue.use(vUtilsPkg, {
  expand: {
    custom: 'customValue',
  }, 
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
