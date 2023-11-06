let paragraphs = document.querySelectorAll('.question p')
let pics = document.querySelectorAll('.question img')
let boxs = document.querySelectorAll('.box')
for (let par of paragraphs){
    par.addEventListener('click',(e)=>{
        let arrow = par.nextElementSibling
        for (let par of paragraphs){
            par.classList.remove('bold')
        }
        for (let pic of pics){
            pic.classList.remove('rotate')
        }
        par.classList.toggle('bold')
        arrow.classList.toggle('rotate')
        for (let box of boxs ){
            box.style.gridTemplateRows='1fr 0fr'
        }
        let box = e.target.parentElement.parentElement
        box.style.gridTemplateRows='1fr 1fr'
        box.classList.toggle('active')
    })
}
