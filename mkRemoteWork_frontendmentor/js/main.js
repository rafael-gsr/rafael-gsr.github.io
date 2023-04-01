const botaoSanduiche = document.querySelector('.sandwich')
const divNav = document.querySelector('.divNav')
const submenu = document.querySelector('.submenu')
const menuItem = document.querySelectorAll('.menuItem')

botaoSanduiche.onclick = (e) => {
    var sandwichDiv = e.target.nextSibling.parentElement
    sandwichDiv.classList.toggle('rotate')
    botaoSanduiche.classList.toggle('sandwichActive')
    divNav.classList.toggle('divActive')
}

menuItem.forEach((item) => 

    item.onclick = () => {
        
        var submenuLocal = item.lastElementChild
        var arrow = item.children[1]

        arrow.classList.toggle('arrowActive')
        submenuLocal.classList.toggle('submenuActive')
    }
)
