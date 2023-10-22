let paragraphs = document.querySelectorAll('.question p')
let boxs = document.querySelectorAll('.box')
for (let par of paragraphs){
    par.addEventListener('click',(e)=>{
        let arrow = par.nextElementSibling
        par.classList.toggle('bold')
        arrow.classList.toggle('rotate')

        for (let box of boxs ){
            box.style.gridTemplateRows='1fr 0fr'
            console.log(1)
        }
        let box = e.target.parentElement.parentElement
        box.style.gridTemplateRows='1fr 1fr'
        box.classList.toggle('active')
    })
}



