class Firebase {
    init(){
        if (!this._initializeApp(this._config))
        firebase.firestore().settings({
            timestampsInSnapshots: true
        })

        this.initialized = true
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