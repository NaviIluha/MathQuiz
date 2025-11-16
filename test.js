// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import {questions} from "./data.js"

//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans =  document.querySelectorAll(".ans")  // кнопки відповідей
let qw_text =  document.querySelector(".qw")// текст запитання
let div_img = document.querySelector(".img")
let img = div_img.querySelector("img")
let qw = ""
let answers = []
let can_clcik = true
// функція відображення запитання

function showQuestion(){
    // отримуємо поточне запитання
    qw = questions[q_index]
    // відображаємо текст запитання
    qw_text.innerHTML = qw.qw
    // тасуємо відповіді
    let ans = shuffle(qw.ans)
    // тасуємо копію масиву відповідей
    ans = shuffle(ans)
   // відображаємо відповіді на кнопках відповідей
    for (let i = 0; i<btn_ans.length; i++){
        btn_ans[i].innerHTML = ans[i]
    }
    
}
//відображаємо перше запитання
showQuestion()

// обробники кліків по кнопках відповідей
let name_img = ""
for (let i = 0; i<btn_ans.length; i++){
        btn_ans[i].addEventListener("click", function(){
            if (can_clcik){
                can_clcik = false
            let ans = btn_ans[i].innerHTML
            answers.push(ans)
            if(ans == qw.correct){
                console.log("okey")
                score ++
                name_img = "angryJohnstone-removebg-preview.png"
            }
            else{
                console.log("ne okey")
                name_img = "niceJohnstone-removebg-preview.png"
            }
            img.src = name_img
            anime({
                targets: ".img",
                opacity: [0.5, 1],
                translateY: ["100%", "0%", "0%"],
                rotate: 360,
                easing: "easeInCubic",
                duration: 1500
            }).finished.then(function(){
                q_index++
            if(q_index == questions.length){
                answers = answers.join("/")
                document.cookie = `answers=${answers}; max-age=${60*60*60}`
                document.cookie = `score=${score}; max-age=${60*60*60}`
                document.cookie = `total=${questions.length}; max-age=${60*60*60}`
                window.location.replace("result.html")
            }
            else{
                showQuestion()
                img.style.transform = "rotate (0 deg)"
                anime({
                targets: ".img",
                translateY: ["0%", "100%"],
                easing: "easeInCubic",
                duration: 300
            })
                .finished.then(function(){can_clcik = true})
            }
            })
            
 } })
    }
//1. отримуємо всі кнопки відповідей у циклі
//2. додаємо обробник кліку на кожну кнопку
//3. у обробнику перевіряємо чи правильна відповідь
//4. змінюємо змінну-колір  (зелений - правильна, червоний - неправильна) та рахунок
//5. запускаємо анімацію зміни кольору кнопки
//6. після завершення анімації збільшуємо індекс запитання
//7. якщо запитання закінчилися - переходимо на сторінку результатів та 
//   зберігаємо у cookie кількість правильних відповідей та загальну кількість запитань,
//  інакше показуємо наступне запитання
