// year of the moment - year input = years;
// month of the moment - month input = months;
// day of the moment - day input = days;
let sendButton = document.querySelector("#send");
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
const dateString =
  currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
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
// his birthday
    let datePast = `${year}-${month}-${day}`;

    let yearss = new Date(dateString).getFullYear() - new Date(datePast).getFullYear();
    let monthss = new Date(dateString).getMonth() - new Date(datePast).getMonth();
    let dayss = new Date(dateString).getDate() - Number(day);

    if (monthss < 0) {
      yearss = yearss - 1;
      monthss = monthss + 12;
    }
  
    if (dayss < 0) {
      dayss += getNoOfDays(year, month - 1);
    }
    // Display Values
    if (day != "" && month != "" && year != "") {
    dayDiv.innerHTML = dayss;
    monthDiv.innerHTML = monthss;
    yearDiv.innerHTML = yearss;
    }
  };
  // Get Number of Days in a particular months
  function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }

  function calculateDiffDate() {
    let day = document.forms["Form"]["dayInput"].value;
    let month = document.forms["Form"]["monthInput"].value;
    let year = document.forms["Form"]["yearInput"].value;

    let yearDiv = document.querySelector("#yearDiv");
    let monthDiv = document.querySelector("#monthDiv");
    let dayDiv = document.querySelector("#dayDiv");

    let datePast = `${year}-${month}-${day}`;
    const diffInMs = new Date(dateString) - new Date(datePast);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const diffInMonth = diffInDays / 30;
    

    if (day != "" && month != "" && year != "") {
    let yearCalculated = currentYear - year;
    yearDiv.innerHTML = yearCalculated;
// calculando q quantidade de meses
    // monthDiv.innerHTML = diffInMonth.toFixed(0).slice(0, -2);
    monthDiv.innerHTML = diffInMonth.toFixed(0) ;
// e a de dias
    // dayDiv.innerHTML = diffInDays.toFixed(0);
    dayDiv.innerHTML = diffInDays.toFixed(0);
  }

  let yearCalculated = currentYear - year;
  yearDiv.innerHTML = yearCalculated;
  console.log(yearCalculated);
}



//validade do botão 1 (tempo total)
function validate() {
  let day = document.forms["Form"]["dayInput"].value;
  let month = document.forms["Form"]["monthInput"].value;
  let year = document.forms["Form"]["yearInput"].value;
  

  let errMsg1 = document.querySelector(".err-msg1");
  let errMsg2 = document.querySelector(".err-msg2");
  let errMsg3 = document.querySelector(".err-msg3");

  let label1 = document.querySelector("#label-red");
  let label2 = document.querySelector("#label-red2");
  let label3 = document.querySelector("#label-red3");

  // se nome for vazio adiciona a classe vermelha para a borda do elemento  e remove o atributo hide da mensagem de erro
  if (day == "" || day > 31) {
    errMsg1.classList.remove("hide");
    document.forms["Form"]["dayInput"].classList.add("border-red");
    label1.classList.add("color-red");
  } else {
    errMsg1.classList.add("hide");
    document.forms["Form"]["dayInput"].classList.remove("border-red");
    label1.classList.remove("color-red");
  }
  if (month == "" || month > 12) {
    errMsg2.classList.remove("hide");
    document.forms["Form"]["monthInput"].classList.add("border-red");
    label2.classList.add("color-red");
  } else {
    errMsg2.classList.add("hide");
    document.forms["Form"]["monthInput"].classList.remove("border-red");
    label2.classList.remove("color-red");
  }
  if (year == "" || year > currentYear) {
    errMsg3.classList.remove("hide");
    document.forms["Form"]["yearInput"].classList.add("border-red");
    label3.classList.add("color-red");
  } else {
    errMsg3.classList.add("hide");
    document.forms["Form"]["yearInput"].classList.remove("border-red");
    label3.classList.remove("color-red");
  }

  calculateDate();

}

//validade do botão 2 ( tempo corrido)
function validate1() {
  let day = document.forms["Form"]["dayInput"].value;
  let month = document.forms["Form"]["monthInput"].value;
  let year = document.forms["Form"]["yearInput"].value;
  

  let errMsg1 = document.querySelector(".err-msg1");
  let errMsg2 = document.querySelector(".err-msg2");
  let errMsg3 = document.querySelector(".err-msg3");

  let label1 = document.querySelector("#label-red");
  let label2 = document.querySelector("#label-red2");
  let label3 = document.querySelector("#label-red3");

  // se nome for vazio adiciona a classe vermelha para a borda do elemento  e remove o atributo hide da mensagem de erro
  if (day == "" || day > 31) {
    errMsg1.classList.remove("hide");
    document.forms["Form"]["dayInput"].classList.add("border-red");
    label1.classList.add("color-red");
  } else {
    errMsg1.classList.add("hide");
    document.forms["Form"]["dayInput"].classList.remove("border-red");
    label1.classList.remove("color-red");
  }
  if (month == "" || month > 12) {
    errMsg2.classList.remove("hide");
    document.forms["Form"]["monthInput"].classList.add("border-red");
    label2.classList.add("color-red");
  } else {
    errMsg2.classList.add("hide");
    document.forms["Form"]["monthInput"].classList.remove("border-red");
    label2.classList.remove("color-red");
  }
  if (year == "" || year > currentYear) {
    errMsg3.classList.remove("hide");
    document.forms["Form"]["yearInput"].classList.add("border-red");
    label3.classList.add("color-red");
  } else {
    errMsg3.classList.add("hide");
    document.forms["Form"]["yearInput"].classList.remove("border-red");
    label3.classList.remove("color-red");
  }

  calculateDiffDate();



}
