export class CameraController {
    constructor(videoEl) {
        this._videoEl = videoEl;

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            this._stream = stream; // Armazena o stream como uma propriedade de instância
            this._videoEl.srcObject = stream;
            this._videoEl.play();
        }).catch(err => {
            console.error('Erro ao acessar a câmera: ', err);
        });
    }

    stop() {
        if (this._stream) {
            this._stream.getTracks().forEach(track => {
                track.stop();
            });
        } else {
            console.error('Nenhum stream de vídeo foi iniciado.');
        }
    }
}
