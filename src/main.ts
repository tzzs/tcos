import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import { Upload, Icon } from 'ant-design-vue'

Vue.component(Upload.name, Upload);
Vue.component(Icon.name, Icon);


Vue.use(Upload);
Vue.use(Icon);
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
