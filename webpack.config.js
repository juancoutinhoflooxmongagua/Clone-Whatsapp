const path = require('path'); // Importação necessária

module.exports = {
    entry: './src/app.js',

    output: { // Corrigido "outrop" para "output"
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // Remova a barra antes de 'dist'
    }
};
