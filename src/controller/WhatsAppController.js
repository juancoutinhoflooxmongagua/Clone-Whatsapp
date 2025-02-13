class WhatsAppController{
    constructor(){
        console.log('Whatsapp Controller')
        this.LoadElements()
    }


    LoadElements(){
        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase('id')] = element
        })
    }
}
