
// твій код
//знайти кнопку старту

let btn_start = document.querySelector(".btn-start")
btn_start.addEventListener("click", function(){
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
    for(let i = 0; i<25; i++){
        document.querySelector(".numbers").innerHTML+=`<span class = "num" 
        style = "transform: rotate(${Math.random()*100}deg); left:
        ${Math.random()*100}%"> ${Math.round(Math.random()*100)}</span>`
    }
    anime ({
        targets: btn_start,
        opacity: [1, 0],
        duration: 500,
        easing: "easeInCubic"

    })
let nums = document.querySelectorAll(".num")
for(let i = 0; i<25; i++){
    anime({
        targets: nums[i],
        translateX: `${Math.random()*1000}px`,
        translateY: `${Math.random()*1000}px`,
        duration: 1000,
        easing: "easeInCubic"
    })
}
        setTimeout(function(){
            document.location.replace("test.html")
        },1100)
})
//


