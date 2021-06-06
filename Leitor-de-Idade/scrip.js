function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg1 = window.document.getElementById('msg1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `

    if(hora >= 0 && hora < 12){
         img.src = 'manhã.png'
         document.body.style.background = "#89B3E9"    
          msg1.innerHTML = `Bom Dia!!` 

    }else if(hora >= 12 && hora <= 18){
         img.src = 'tarde.png'
         document.body.style.background = "#6E83A0"
          msg1.innerHTML = "Boa Tarde!!" 
        
    }else{
         img.src = 'noite.png'
         document.body.style.background = "#24547E"
         msg1.innerHTML = "Boa Noite!! "
        
    }
}


