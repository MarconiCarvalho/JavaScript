var agora = new Date()
var hora = agora.getHours()
if(agora <= 12){
    console.log('Bom Diaa!')
}else if(agora <= 18){
    console.log('Boa Tardee!')
}else{
    console.log('Boa Noitee!')
}