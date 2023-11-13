import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyD62V92J2nNJzfHEn7um4EhKfyzqpYv060",
  authDomain: "stayvista-7ee51.firebaseapp.com",
  projectId: "stayvista-7ee51",
  storageBucket: "stayvista-7ee51.appspot.com",
  messagingSenderId: "890429551754",
  appId: "1:890429551754:web:2a3fb0e76205b93d686973"
}

export const app = initializeApp(firebaseConfig)
