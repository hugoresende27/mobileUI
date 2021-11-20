const conteudo = document.querySelectorAll('.main')
const menu = document.querySelectorAll('button')

menu.forEach((item,idx) => {
    item.addEventListener('click', () => {
        escondeFoto()
        escondeMenu()
        item.classList.add('ativo')
        conteudo[idx].classList.add('show')
    })
})

////////////////////////////////////////
function escondeFoto() {
    conteudo.forEach( x => x.classList.remove('show') )
}

function escondeMenu() {
    menu.forEach( x => x.classList.remove('ativo') )
}