import { ClassEvent } from "../util/ClassEvent";
export class MicrophoneController extends ClassEvent {
    constructor() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this._stream = stream;

                const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                const source = audioContext.createMediaStreamSource(stream);

                source.connect(audioContext.destination);

                console.log('Microphone is active and audio is being played');
            })
            .catch(err => {
                console.error('Error accessing microphone: ', err);
            });
    }


    stop(){
        this._stream.getTracks().forEach(track =>{
            track.stop()
        })
    }
}
