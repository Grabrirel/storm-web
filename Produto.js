window.onload = function(){
    console.warn("Oláaaaa Mundoooo")

    let meuForm = $("#formProduto")

    console.log(meuForm)

    meuForm.on("submit", function(event) {
        event.preventDefault()
        console.log("clicou")
        prepararBotao()

    })

    function prepararBotao(){
        let botao = $("#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }
    function clicou(){
        prepararBotao()
    }
}