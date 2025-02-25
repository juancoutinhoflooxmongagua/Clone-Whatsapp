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

    TakePicture(mimeType = 'image/png') {
        // Verificar se o elemento de vídeo está configurado corretamente
        if (!this._videoEl || !this._videoEl.videoHeight || !this._videoEl.videoWidth) {
            console.error('Erro: O elemento de vídeo não está corretamente configurado.');
            return;
        }
    
        // Criar o elemento canvas
        let canvas = document.createElement('canvas');
        
        // Definir as dimensões do canvas com base no vídeo
        canvas.setAttribute('height', this._videoEl.videoHeight);
        canvas.setAttribute('width', this._videoEl.videoWidth);
    
        // Obter o contexto 2D do canvas
        let context = canvas.getContext('2d');
        if (!context) {
            console.error('Erro: Não foi possível obter o contexto 2D.');
            return;
        }
    
        // Desenhar o quadro do vídeo no canvas
        context.drawImage(this._videoEl, 0, 0, canvas.width, canvas.height);
    
        // Retornar a URL de dados da imagem gerada
        return canvas.toDataURL(mimeType);
    }
    
}
