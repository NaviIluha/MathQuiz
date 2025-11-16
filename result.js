// зчитуємо куки
// кількість правильних відповідей
// загальна кількість запитань

// розбиваємо куки на масив елементів
// перебираємо елементи
// розбиваємо елемент на ключ і значення
// якщо ключ - score, записуємо значення в змінну score
// якщо ключ - total, записуємо значення в змінну total

let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
let answers = []
let stats = document.querySelector(".stats")
for (let i = 0; i<cookie.length; i++){
    let[name, value] = cookie [i].split('=')
    if(name.trim() == 'score'){
        score.innerHTML = value
    }
    if(name.trim() == 'total'){
        total.innerHTML = value
    }
    if (name.trim() == 'answers'){
        answers = value.split("/")
    }
}

anime({
    targets: ".res",
    translateX: ["-100%","-20%"],
    scale: [1,2],
    duration:1000,
    easing:"easeInCubic"
}).finished.then(function(){
    anime({
    targets: ".res1",
    translateX: ["100%","0%"],
    translateY: ["0%", "70%"],
    duration:1000,
    easing:"easeInCubic"
})
})

import { questions } from "./data.js"
for (let i = 0; i<questions.length; i++){
    let cols=[]
    for (let g = 0; g<4; g++){
        if(questions[i].ans[g] == questions[i].correct){
            cols.push("rgba(45, 219, 15, 0.81)")
        }
        else{
            cols.push("rgba(255, 255, 255, 1)")
        }
        if(answers[i] == questions[i].ans[g] && answers[i] != questions[i].correct){
            cols[g] = "rgba(255, 5, 5, 0.84)"
        }
    }
    stats.innerHTML+=`<div class="card-qw">
      <div class="qw">${questions[i].qw}</div>
      <div class="ans" style="background:${cols[0]};">${questions[i].ans[0]}</div>
      <div class="ans" style="background:${cols[1]};">${questions[i].ans[1]}</div>
      <div class="ans" style="background:${cols[2]};">${questions[i].ans[2]}</div>
      <div class="ans" style="background:${cols[3]};">${questions[i].ans[3]}</div>
    </div>`
}

let restart = document.querySelector(".restart")
restart.addEventListener("click")
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
            document.location.replace("index.html")
        },1100)
// підключаємось до події завантаження сторінки для анімації результату
window.onload = function(){
    // відображаємо результат у відповідні елементи
    

    // анімація результату


    // анімація кількості запитань

            // анімація кількості правильних відповідей по завершенню анімації total

}