console.log("connected");

const anagram = document.getElementsByClassName("anagram");
const question = document.getElementsByTagName("input");
const btn = document.getElementsByClassName("btn");

let play = false;
let readyWord = "";
let shuffledWord = "";
let wordArr = ['higienis', 'ekonomis', 'analisis', 'detergen', 'hierarki', 'ideologi', 'kacamata', 'varietas'];

function newWord() {
    let randomIndex = Math.floor(Math.random() * wordArr.length);
    let wordArrNew = wordArr[randomIndex];
    return wordArrNew;
}

function shuffleWord(arr) {
    for(let i = arr.length -1 ; i >= 0; i-- ){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i+1))
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn[0].addEventListener("click", function(){
    if(!play){
        play = true;
        btn[0].innerHTML = "Enter";
        question[0].classList.toggle("hidden");
        readyWord = newWord();
        shuffledWord = shuffleWord(readyWord.split("")).join("");
        anagram[0].innerHTML = `Kata apakah ini: ${shuffledWord}`;
    }
    else {
        let temp = question[0].value;
        if(temp === readyWord){
            play = false;
            anagram[0].innerHTML = `OK kamu benar! Itu adalah ${readyWord}`;
            question[0].classList.toggle("hidden");
            btn[0].innerHTML = "Main Lagi";
            question[0].value = "";
        }
        else {
            anagram[0].innerHTML = `Salah! Ayo coba lagi. Perhatikan hurufnya: ${shuffledWord}`;
        }

    }
});