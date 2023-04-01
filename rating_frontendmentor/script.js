const buttons = document.querySelectorAll('.option')
const submitButton = document.querySelector('.submitButton')
const ratingResult = document.querySelector('.ratingResult')
const rating = document.querySelector('.rating')
const thankYou = document.querySelector('.thankYou')


buttons.forEach(e =>
    e.onclick = (e2 => {
        resetSelected()
        toggleSelect(e2)
        ratingResult.innerText = `You selected ${e.innerText} out of 5`
    })
)

submitButton.onclick = (() => {
    toggleHide()
})



function toggleSelect(elemento){
    const div = elemento.target
    if(div.classList.contains('selected')){
        div.classList.remove('selected')
        return
    }
    div.classList.add('selected')
}

function toggleHide(){
    rating.classList.add('hide')
    thankYou.classList.remove('hide')
}

function resetSelected(){
    buttons.forEach(e =>{
        if(e.classList.contains('selected')){
            e.classList.remove('selected')
        }
    })
}