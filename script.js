const minhaModal = document.querySelector('#minha-modal')
const buttonClose = document.querySelector("dialog button")

setTimeout(function() {
    minhaModal.showModal();
}, 10000);

buttonClose.onclick = function () {
   minhaModal.close()
}
