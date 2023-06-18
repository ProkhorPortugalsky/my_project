import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import db from './db'
import BuyAdModal from './views/Shared/BuyAdModal'

loadFonts()


createApp(App)
  .use(router)
  .use(store)
  .use(db)
  .use(vuetify)
  .component("buy-ad-modal", BuyAdModal)
  .mount('#app')

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLax0_I3tKH9dTMCREsoJvkn03e1G8fMY",
//   authDomain: "myproject-dd9bc.firebaseapp.com",
//   projectId: "myproject-dd9bc",
//   storageBucket: "myproject-dd9bc.appspot.com",
//   messagingSenderId: "526321699418",
//   appId: "1:526321699418:web:da7487d4ab357dd3de6663"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);