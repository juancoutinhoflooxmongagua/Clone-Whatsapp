import { ClassEvent } from "../util/ClassEvent"

export class Model extends ClassEvent{
    
    constructor(){
        super()

        this._data = {}
    }

    fromJSON(json){
        this._data = json
    }

    toJSON(){
        return this._data
    }
}