export class CameraController {
    constructor(videoEl) {
        this._videoEl = videoEl;

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            this._stream = stream; 
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

    TakePicture(mimeType = 'image/png') {
        if (!this._videoEl || !this._videoEl.videoHeight || !this._videoEl.videoWidth) {
            console.error('Erro: O elemento de vídeo não está corretamente configurado.');
            return;
        }
    
        let canvas = document.createElement('canvas');
        
        canvas.setAttribute('height', this._videoEl.videoHeight);
        canvas.setAttribute('width', this._videoEl.videoWidth);
    
        let context = canvas.getContext('2d');
        if (!context) {
            console.error('Erro: Não foi possível obter o contexto 2D.');
            return;
        }
    
        context.drawImage(this._videoEl, 0, 0, canvas.width, canvas.height);
    
        return canvas.toDataURL(mimeType);
    }
    
}
