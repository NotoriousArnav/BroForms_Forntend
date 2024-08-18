import AxiosPlugin from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import VueTyped from 'vue3-typed-js';
import { createVCodeBlock } from '@wdns/vue-code-block';

const VCodeBlock = createVCodeBlock({
    // options
}); 

createApp(App)
  .use(store)
  .use(router)
  .use(
    AxiosPlugin, 
    {}
  )
  .use(VueTyped)
  .use(VCodeBlock)
  .mount('#app')
