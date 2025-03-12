import { Model } from "./Model"

export class Chat extends Model{
    constructor(){
        super()

    }

    get users(){this._data.users}
    set users(value){this._data.users = value}

    get timeStamp(){this._data.timeStamp}
    set timeStamp(value){this._data.timeStamp = value}

    static getRef(){
        return Firebase.db().collection('/chats')
    }
}