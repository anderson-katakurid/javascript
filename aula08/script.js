function verificar() {
var data = new Date()
var ano = data.getFullYear()
var dano = window.document.getElementById('idata')
var res = window.document.querySelector('div#res')
if (dano.value.length == 0 || dano.value > ano) {
window.alert('[ERRO] verifique os dados e tente novamente')
} else {
    var sex = window.document.getElementsByName('sexo')
    var idade = ano - Number(dano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (sex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'imagens/bebe-homem.png')
        } else if (idade >= 10 && idade < 21) {
            img.setAttribute('src', 'imagens/jovem-homem.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/adulto-homem.png')
        } else {
            img.setAttribute('src', 'imagens/idoso-homem.png')
        }
    } else if (sex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
             //criança
             img.setAttribute('src', 'imagens/bebe-mulher.png')
        } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'imagens/jovem-mulher.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'imagens/adulto-mulher.png')
        } else {
           //idoso
           img.setAttribute('src', 'imagens/idosa-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}