// year of the moment - year input = years;
// month of the moment - month input = months;
// day of the moment - day input = days;
let sendButton = document.querySelector('#send');
sendButton.addEventListener("click", function (e) {
    e.preventDefault();

});




//criei um objeto data
const currentDate = new Date();

//peguei cada um dos dados que quero da data atual / dia mes ano
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

//formato mostrando a data de hoje
const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear; 
console.log(dateString);

function calculateDate() {
// valores dos inputs
    let day = document.forms["Form"]["dayInput"].value;
    let month = document.forms["Form"]["monthInput"].value;
    let year = document.forms["Form"]["yearInput"].value;

    // divs a serem modificadas
    let yearDiv = document.querySelector("#yearDiv");
    let monthDiv = document.querySelector("#monthDiv");
    let dayDiv = document.querySelector("#dayDiv");

if (day != "" && month != "" && year != ""){
    
    let yearCalculated = currentYear - year;
    yearDiv.innerHTML = yearCalculated;
        console.log(yearCalculated);
    
        let monthCalculated = currentMonth - month;
        monthDiv.innerHTML = monthCalculated;
        console.log(monthCalculated);

}    
    // let yearCalculated = currentYear - year;
    // yearDiv.innerHTML = yearCalculated;
    // console.log(yearCalculated);




}


function validate() {
    let day = document.forms["Form"]["dayInput"].value;
    let month = document.forms["Form"]["monthInput"].value;
    let year = document.forms["Form"]["yearInput"].value;
    let errMsg1 = document.querySelector(".err-msg1");
    let errMsg11 = document.querySelector(".err-msg11");
    let errMsg2 = document.querySelector(".err-msg2");
    let errMsg22 = document.querySelector(".err-msg22");
    let errMsg3 = document.querySelector(".err-msg3");
    let errMsg33 = document.querySelector(".err-msg33");
let label1 = document.querySelector('#label-red')
let label2 = document.querySelector('#label-red2')
let label3 = document.querySelector('#label-red3')
  
   
 
  
  
    // se nome for vazio adiciona a classe vermelha para a borda do elemento  e remove o atributo hide da mensagem de erro
    if (day == "" || day > 31) {
      errMsg1.classList.remove("hide");
      document.forms["Form"]["dayInput"].classList.add("border-red");  
      label1.classList.add('color-red');
    } else {
        errMsg1.classList.add("hide");
        document.forms["Form"]["dayInput"].classList.remove("border-red");
        label1.classList.remove('color-red');
    }
    if (month == "" || month > 12) {
      errMsg2.classList.remove("hide");
      document.forms["Form"]["monthInput"].classList.add("border-red");  
      label2.classList.add('color-red');
    } else {
      errMsg2.classList.add("hide");
      document.forms["Form"]["monthInput"].classList.remove("border-red");
      label2.classList.remove('color-red');
    }
    if (year == "" || year >= currentYear) {
      errMsg3.classList.remove("hide");
      document.forms["Form"]["yearInput"].classList.add("border-red"); 
      label3.classList.add('color-red'); 
    } else {
      errMsg3.classList.add("hide");
      document.forms["Form"]["yearInput"].classList.remove("border-red");
      label3.classList.remove('color-red');
    }

    calculateDate();
}