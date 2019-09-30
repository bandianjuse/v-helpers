import App from './App.vue';
import vHelpers from '../../lib/main';


Vue.use(vHelpers, {
  expand: {
    custom: 'customValue',
  }, 
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
