export class MicrophoneController {
    constructor() {
        // Try to get access to the microphone
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this._stream = stream;

                // Create a new AudioContext to manage the audio stream
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                // Create a MediaStreamAudioSourceNode to use the microphone stream
                const source = audioContext.createMediaStreamSource(stream);

                // Optionally, connect the source to an audio destination (like speakers)
                source.connect(audioContext.destination);

                // Now the microphone stream is playing through the speakers
                console.log('Microphone is active and audio is being played');
            })
            .catch(err => {
                console.error('Error accessing microphone: ', err);
            });
    }
}
