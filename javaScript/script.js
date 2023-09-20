'use strict';
let HighscoreNmaNum = 0;
let ScoreNam = 20;
let lenguch = `english`;
let x = Math.floor(Math.random() * 20 ) + 1;
document.querySelector(`.uz`).addEventListener(`click`, function(){
    lenguch = "uzblenguch";
    document.querySelector(`.agin`).textContent = "Qaytar";
    document.querySelector(`.nam`).textContent = "1 va 20 oraliq";
    document.querySelector(`.Check`).textContent = "Tekshirish";
    document.querySelector(`.start`).textContent = "🤔 Taxminni boshlash...";
    document.querySelector(`.score`).textContent = "❤️ Urunishlar: ";
    document.querySelector(`.Highscore`).textContent = "📝 Toplagan ball: ";
    document.querySelector(`h1`).textContent = "Men o'ylagan son";
});
document.querySelector(`.eng`).addEventListener(`click`, function(){
    document.querySelector(`.agin`).textContent = "Agin";
    document.querySelector(`.nam`).textContent = "(Between 1 and 20)";
    document.querySelector(`h1`).textContent = "Guess My Number!";
    document.querySelector(`.Check`).textContent = "Check";
    document.querySelector(`.start`).textContent = "Start guessing...";
    document.querySelector(`.score`).textContent = "💯 Score: 20";
    document.querySelector(`.Highscore`).textContent = "🥇 Highscore: 0";
});
// document.querySelector(`.rus`).addEventListener(`click`, function(){
//     document.querySelector(`.agin`).textContent = "Cнова";
//     document.querySelector(`.nam`).textContent = "(Между 1 и 20)";
//     document.querySelector(`h1`).textContent = "Угадай мой номер!";
//     document.querySelector(`.Check`).textContent = "Проверять";
//     document.querySelector(`.start`).textContent = "Начни гадать...";
//     document.querySelector(`.score`).textContent = "💯 Оценка: 20";
//     document.querySelector(`.Highscore`).textContent = "🥇 Рекорд: 0";
// });
document.querySelector(`.Check`).addEventListener(`click`, function(){
    let namberNam = Number(document.querySelector(`.input`).value);
    if (ScoreNam>0) {
        if (!namberNam) {
            document.querySelector(`.start`).textContent = "🤷‍♀️ No number!";
        }
        else if(namberNam > x){
            document.querySelector(`.start`).textContent = "📈 Too High!";
            ScoreNam--;
            document.querySelector(`.scoreNma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNam`).textContent = HighscoreNmaNum; 
        }
        else if(namberNam<x){
            document.querySelector(`.start`).textContent = "📉 Too Low!";
            ScoreNam--;
            document.querySelector(`.scoreNma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNam`).textContent = HighscoreNmaNum; 
        }
        else if(namberNam == x){
            HighscoreNmaNum++;
            document.querySelector(`.start`).textContent = "🎯Correct Number";
            // document.querySelector(`.HighscoreNam`).textContent = HighscoreNmaNum; 
            document.querySelector(`body`).style.backgroundColor = `#60b347`;
            document.querySelector(`main`).style.backgroundColor = `#60b347`;
            document.querySelector(`.input`).style.backgroundColor = `#60b347`;
            document.querySelector(".number").textContent= x;
            document.querySelector(`.number`).style.width = `110px`;
            document.querySelector(".number").style.padding = `10px`;
        }
    }
    else{
        document.querySelector(`.start`).textContent = "😒 You lost the game";
        document.querySelector(`.scoreNma`).textContent = 0;
    }
});
document.querySelector(`.agin`).addEventListener(`click`, function(){
    x = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector("main").style.backgroundColor="#222";
    document.querySelector(`.input`).style.backgroundColor = `#222`;
    document.querySelector(".number").textContent= "?";
    document.querySelector(".number").style.padding = `10px`;
    HighscoreNmaNum++;
    ScoreNam = 20;
});

// Animatsiya

var $input = $('.input')

$input.on('keydown', function(e){
  e.preventDefault()
  if(e.keyCode == 8) {
    $('.input span').last().remove()
  } else {
  var letter = String.fromCharCode(e.keyCode)
  $input.append('<span class="animate">'+letter+'</span>')
  setTimeout(function(){$('.animate').removeClass('animate').addClass('animate-done')}, 0)
  }
  
  placeCaretAtEnd(document.getElementById('editable'))
})

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

let uzblenguch = {
    "🤷‍♀️ No number!":"🤷‍♀️ Raqam kiritilmadi",
    "📈 Too High!":"📈 Kichik raqam",
    "📉 Too Low!":"📉 Katta raqam",
    "🎯Correct Number":"🎯 Siz topdinggiz",
    "😒 You lost the game":"😒 Siz yutqazdinggiz",
    "🤔 Start guessing...":"🤔 O'yin boshlandi",
};

function salom(massench){
    if( lenguch == `uz`){
        document.querySelector(`.messench`).textContent = uzblenguch[massench];
    }else{
        document.querySelector(`.massench`).textContent = massench;
    }
};
salom();
