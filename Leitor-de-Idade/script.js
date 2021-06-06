function verificar(){
    var img = window.document.getElementById('foto')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
      if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     }else{
      var fsex = document.getElementsByName('radsex')
      var idade= ano - Number(fano.value) 
      var gênero = ''
      
      if(fsex[0].checked){
        gênero = 'Homem'
          if(idade >= 0 && idade < 10){
             img.src = "imagens/foto-criança-m.jpg"
            //criança
          }else if(idade < 21){
            img.src = "imagens/foto-jovem-m.jpeg"
            //jovem
          }else if(idade <50){
            img.src = "imagens/foto-adulto-m.jpeg"
            //Adulto
          } else{
            img.src = "imagens/foto-idoso-m.jpeg"
            //idoso
          }
      } else if(fsex[1].checked){
         gênero = 'Mulher'
          if(idade >= 0 && idade < 10){
            img.src = "imagens/foto-criança-f.jpeg"
            //criança           
          }else if(idade < 21){
            img.src = "imagens/foto-jovem-f.jpeg"
            //jovem
          }else if(idade < 50){
            img.src = "imagens/foto-adulto-f.jpeg"
            //adulto
          }else {
            img.src = "imagens/foto-idoso-f.jpeg"
            //idoso
         }
        }        
       res.innerHTML = `${idade} anos.`
    }
}