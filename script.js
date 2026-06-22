function verificar(){
    
    let link = document.getElementById("urlInput").value.toLowerCase()
    let resultado = document.getElementById("resultado")
    let lista = document.getElementById("suspeito")
    let lista2 = document.getElementById("liberados")

    if (link.includes("login")||
        link.includes("senha")||
        link.includes("verify")||
        link.includes("updadate")
    ){
        resultado.innerHTML="⚠️Link Suspeito⚠️"
        resultado.style.color = "red"

        let novoItem = document.createElement("li")

        novoItem.textContent = link

        lista.appendChild(novoItem)
        document.getElementById("urlInput").value= ""

    }else if(link.trim()===""){
        resultado.innerHTML="Cole um link para verificação"
        resultado.style.color= "orange"
    }else{
        resultado.innerHTML="Link não suspeito ✅"
        resultado.style.color = "green"
        
        let novoItem = document.createElement("li")

        novoItem.textContent = link

        lista2.appendChild(novoItem)
        document.getElementById("urlInput").value= ""
    }
}