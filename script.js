var msgCookies = document.getElementById('ck')

function continuar(){
    localStorage.lgpd = "true"
    msgCookies.classList.remove('show')
}

if(localStorage.lgpd == 'true'){
    msgCookies.classList.remove('show')
}else{
    msgCookies.classList.add('show')
}