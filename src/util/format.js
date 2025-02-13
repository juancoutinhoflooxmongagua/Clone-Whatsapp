class Format {
    static getCamelCase(text) { // Corrigido para getCamelCase com "C" maiúsculo
        let div = document.createElement('div');
        div.innerHTML = `<div data-${text}="id"></div>`;
        return Object.keys(div.firstChild.dataset)[0];
    }
}