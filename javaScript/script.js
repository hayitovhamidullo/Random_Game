'use strict';
let HighscoreNam = 0;
let ScoreNam = 20;
let lenguch = `eng`;
let x = Math.floor(Math.random() * 20 ) + 1;
document.querySelector(`.uz`).addEventListener(`click`, function(){
    lenguch = "uzb";
    document.querySelector(`.agin`).textContent = "Qaytar";
    document.querySelector(`.nam`).textContent = "1 va 20 oraliq";
    document.querySelector(`.Check`).textContent = "Tekshirish";
    document.querySelector(`.start`).textContent = "🤔 Taxminni boshlash...";
    document.querySelector(`.scoreNma`).innerHTML = `<span class="scoreNma">20</span>`;
    document.querySelector(`.HighscoreNam`).innerHTML = `<span class="HighscoreNam">0</span>`;
    document.querySelector(`.Highscore`).textContent = `🥇 Toplangan ball`;
    document.querySelector(`.score`).textContent = `❤️ Urunishlar`;
    document.querySelector(`h1`).textContent = "Men o'ylagan son";
});
document.querySelector(`.eng`).addEventListener(`click`, function(){
    lenguch="eng"
    document.querySelector(`.agin`).textContent = "Agin";
    document.querySelector(`.nam`).textContent = "(Between 1 and 20)";
    document.querySelector(`h1`).textContent = "Guess My Number!";
    document.querySelector(`.Check`).textContent = "Check";
    document.querySelector(`.start`).textContent = "Start guessing...";
    document.querySelector(`.score`).textContent = "💯 Score: 20";
    document.querySelector(`.Highscore`).textContent = "🥇 Highscore: 0";
});


let engTOUZB = {
    "🤷‍♀️ No number!":"🤷‍♀️ Raqam kiritilmadi",
    "📈 Too High!":"📈 Kichik raqam",
    "📉 Too Low!":"📉 Katta raqam",
    "🎯Correct Number":"🎯 Siz topdinggiz",
    "😒 You lost the game":"😒 Siz yutqazdinggiz",
    "🤔 Start guessing...":"🤔 O'yin boshlandi",
};
function showMessage(message){
    if( lenguch == `uzb`){
        document.querySelector(`.start`).textContent = engTOUZB[message];
    }else{
        document.querySelector(`.start`).textContent = message;
    }
};
function tekshir(){
    let namberNam = Number(document.querySelector(`.input`).value);
    if (ScoreNam>0) {
        if (!namberNam) {
            document.querySelector(`.start`).textContent = (lenguch=="eng") ? "🤷‍♀️ No number!" : engTOUZB["🤷‍♀️ No number!"];
        }
        else if(namberNam > x){
            document.querySelector(`.start`).textContent =  (lenguch=="eng") ? "📈 Too High!" : engTOUZB["📈 Too High!"];
            ScoreNam--;
            document.querySelector(`.scoreNma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNam`).textContent = HighscoreNam; 
        }
        else if(namberNam<x){
            document.querySelector(`.start`).textContent = (lenguch=="eng") ? "📉 Too Low!" : engTOUZB["📉 Too Low!"];
            ScoreNam--;
            document.querySelector(`.scoreNma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNam`).textContent = HighscoreNam; 
        }
        else if(namberNam == x){
            HighscoreNam++;
            document.querySelector(`.start`).textContent = (lenguch=="eng") ? "🎯Correct Number" : engTOUZB["🎯Correct Number"];
            document.querySelector(`body`).style.backgroundColor = `#60b347`;
            document.querySelector(`main`).style.backgroundColor = `#60b347`;
            document.querySelector(`.input`).style.backgroundColor = `#60b347`;
            document.querySelector(".number").textContent= x;
            document.querySelector(`.number`).style.width = `110px`;
            document.querySelector(".number").style.padding = `10px`;
        }
    }
    else{
        document.querySelector(`.start`).textContent = (lenguch=="eng") ? "😒 You lost the game" : engTOUZB["😒 You lost the game"];
        document.querySelector(`.scoreNma`).textContent = 0;
    }
}
document.querySelector(`.Check`).addEventListener(`click`, tekshir);
document.querySelector(`.agin`).addEventListener(`click`, function(){
    x = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector("main").style.backgroundColor="#222";
    document.querySelector(`.input`).style.backgroundColor = `#222`;
    document.querySelector(".number").textContent= "?";
    document.querySelector(".number").style.padding = `10px`;
    HighscoreNam++;
    ScoreNam = 20;
});

// Animatsiya

document.querySelector(`.Check`).addEventListener(`click`, tekshir);

document.addEventListener(`keydown`, (e)=>{/* console.log(e); */
    if(e.key === `Enter`) tekshir();
})