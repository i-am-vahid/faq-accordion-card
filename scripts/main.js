let paragraphs = document.querySelectorAll('.question p')
let pics = document.querySelectorAll('.question img')
let boxs = document.querySelectorAll('.box')



boxs.forEach(box=>{
    box.addEventListener('click',()=>{
        show(box)
    })
})




function show(box) {
    let p = box.querySelector('.question p')
    let pic = box.querySelector('.question img')
    if (p.classList.contains('bold')){
        p.classList.remove('bold')
        pic.classList.remove('rotate')
        box.style.gridTemplateRows='1fr 0fr'
        console.log(1)
    }
    for (let par of paragraphs){
        par.classList.remove('bold')
    }
    for (let pic of pics){
        pic.classList.remove('rotate')
    }
    for (let box of boxs ){
        box.style.gridTemplateRows='1fr 0fr'
    }
    p.classList.toggle('bold')
    pic.classList.toggle('rotate')
    box.style.gridTemplateRows='1fr 1fr'
}