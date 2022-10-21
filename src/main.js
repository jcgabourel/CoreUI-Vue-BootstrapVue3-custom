import { createApp } from 'vue' 
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import {RouterLink,createRouter,createWebHashHistory} from 'vue-router'

import index from './components/index.vue' ;
const routes = [
  
    {
      path: "/",
      name: "index",
      component: index
    }];

    const router = createRouter({
        // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
        history: createWebHashHistory(),
        routes, // short for `routes: routes`
      })

createApp(App).use(CoreuiVue).use(router).mount('#app')
