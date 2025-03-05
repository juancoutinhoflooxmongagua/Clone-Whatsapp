const firebase = require('Firebase')
require('firebase/firestore')
export class Firebase {

    constructor(){
        this._config = {
          apiKey: "AIzaSyCLODBGpr_LFC-OfLgMwvVulXg-ipnvHO0",
          authDomain: "wasabi-5d6f7.firebaseapp.com",
          projectId: "wasabi-5d6f7",
          storageBucket: "wasabi-5d6f7.firebasestorage.app",
          messagingSenderId: "22057437819",
          appId: "1:22057437819:web:7d0026bc8f2abc9105f0de"
        }

        this.init()
    }

    init(){

        if (!this._initialized) {
            firebase.initializeApp(this._config)
            this.initialized = true
        }
    }

    static db(){
        return firebase.firestore()
    }

    static hd(){ 
        return firebase.storage()
    }

    initAuth(){
        return new Promise((s, f) => {
            firebase.auth.signInWithPopup()
        })
    }
}