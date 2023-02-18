let questions1 = [
  {
    Question:
      "A pump can fill a tank with water in 2 hours. Because of a leak, it took 213 hours to fill the tank.The leak can drain all the water of the tank in:",
    options: ["7 hrs", "8 hrs", "12 hrs", "14 hrs"],
    Indexans: 4,
  },
  {
    Question:
      "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
    options: ["3hr 15min", "3hr 45min", "4hr 15min", "4hr 1min"],
    Indexans: 2,
  },
  {
    Question:
      "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is",
    options: ["60 gallons", "120 gallons", "90 gallons", "20 gallons"],
    Indexans: 2,
  },
  {
    Question:
      "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
    options: ["60 hrs", "20 hrs", "90 hrs", "30 hrs"],
    Indexans: 2,
  },
  {
    Question:
      "Three taps A,B and C can fill a tank in 12,15 and 20 hours respectively. If A is open all the time and B ,C are open for one hour each alternatively, the tank will be full in:",
    options: ["6 hrs", "2 hrs", "9 hrs", "7 hrs"],
    Indexans: 4,
  },
];

let questions2 = [
  {
    Question:
      "The speed of a car increases by 2 kms after every one hour. If the distance travelling in the first one hour was 35 kms. what was the total distance travelled in 12 hours?",
    options: ["552 km", "324 km", "125 km", "142 km"],
    Indexans: 1,
  },
  {
    Question:
      "A person crosses a 600 m long street in 5 minutes, What is his speed in km per hour?",
    options: ["3.5", "7.2", "5.7", "10"],
    Indexans: 2,
  },
  {
    Question:
      "How long will a boy take to run round a square field of side 35 meters, If he runs at the rate of 9 km/hr?",
    options: ["60 sec", "120 sec", "56 sec", "20 sec"],
    Indexans: 3,
  },
  {
    Question:
      "Two horses start trotting towards each other, one from A to B and another from B to A. They cross each other after one hour and the first horse reaches B, 5/6 hour before the second horse reaches A. If the distance between A and B is 50 km. what is the speed of the slower horse?",
    options: ["60 km/hrs", "20 km/hrs", "90 km/hrs", "30 km/hrs"],
    Indexans: 2,
  },
  {
    Question:
      "A man takes 6 hours 15 minutes in walking a distance and riding back to the starting place. He could walk both ways in 7 hours 45 minutes. The time taken by him to ride both ways, is ",
    options: ["6 hrs", "2 hrs", "4 hrs 45min", "7 hrs"],
    Indexans: 3,
  },
];

let questions3 = [
  {
    Question:
      "A bag contains 50 P, 25 P and 10 P coins in the ratio 5: 9: 4, amounting to Rs. 206. Find the number of coins of each type respectively.",
    options: [
      "360, 160, 200",
      "160, 360, 200",
      "200, 360, 160",
      "200, 160, 300",
    ],
    Indexans: 3,
  },
  {
    Question:
      "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is",
    options: ["3:5", "7:2", "5:7", "4:5"],
    Indexans: 4,
  },
  {
    Question:
      "A mixture contains alcohol and water in the ratio 4 : 3. If 5 liters of water is added to the mixture, the ratio becomes 4: 5. Find the quantity of alcohol in the given mixture.",
    options: ["10", "12", "5", "13"],
    Indexans: 1,
  },
  {
    Question:
      "A sum of Rs.312 was divided among 100 boys and girls in such a way that the boy gets Rs.3.60 and each girl Rs. 2.40 the number of girls is",
    options: ["60", "20", "40", "30"],
    Indexans: 3,
  },
  {
    Question:
      "A sum of Rs. 427 is to be divided among A, B and C such that 3 times A’s share, 4 tunes B’s share and 7 times C’s share are all equal. The share of C is :",
    options: ["64", "84", "46", "73"],
    Indexans: 2,
  },
];

let questions4 = [
  {
    Question:
      "If selling price is doubled, the profit triples. Find the profit percent ?",
    options: ["300", "200", "100", "300"],
    Indexans: 3,
  },
  {
    Question:
      "A shopkeeper cheats to the extent of 10% while buying and selling, by using false weights. His total gain is.",
    options: ["35%", "72%", "57%", "21%"],
    Indexans: 4,
  },
  {
    Question:
      "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction ?",
    options: ["10", "12", "18", "13"],
    Indexans: 3,
  },
  {
    Question:
      "A milkman purchases the milk at Rs. x per litre and sells it at Rs. 2x per litre still he mixes 2 litres water with every 6 litres of pure milk. What is the profit percentage?",
    options: ["166.6%", "120%", "140%", "130%"],
    Indexans: 1,
  },
  {
    Question:
      "If books bought at prices ranging from Rs. 200 to Rs. 350 are sold at prices ranging from Rs. 300 to Rs. 425, what is the greatest possible profit that might be made in selling eight books ?",
    options: ["6454", "1800", "1246", "1373"],
    Indexans: 2,
  },
];

let timeoutContent;
let i = 220;
let interval;
var x = 0;
let s = "";
let currentQuestionIndex = 0;
let category = document.getElementById("category");
let buttonHandler = document.getElementsByClassName("buttonHandler")[0];
let pipes = document.getElementById("button1");
let times = document.getElementById("button2");
let ratio = document.getElementById("button3");
let profit = document.getElementById("button4");
let content = document.getElementsByClassName("content-bar")[0];
let nextButton1 = document.getElementById("next1");
let nextButton2 = document.getElementById("next2");
let nextButton3 = document.getElementById("next3");
let nextButton4 = document.getElementById("next4");
let questionNo = document.getElementById("question-no");
let timer = document.getElementById("timer");
let score = document.getElementById("score");
let start1 = document.getElementsByClassName("Start1")[0];
let start2 = document.getElementsByClassName("Start2")[0];
let start3 = document.getElementsByClassName("Start3")[0];
let start4 = document.getElementsByClassName("Start4")[0];
let input1 = document.getElementById("text");
let input2 = document.getElementById("button");
let nameDiv = document.getElementById("Enter-name");

nextButton1.style.visibility = "hidden";
nextButton2.style.visibility = "hidden";
nextButton3.style.visibility = "hidden";
nextButton4.style.visibility = "hidden";
questionNo.style.visibility = "hidden";
timer.style.visibility = "hidden";
score.style.visibility = "hidden";
start1.style.visibility = "hidden";
start2.style.visibility = "hidden";
start3.style.visibility = "hidden";
start4.style.visibility = "hidden";

pipes.onclick = Start1;
times.onclick = Start2;
ratio.onclick = Start3;
profit.onclick = Start4;
start1.onclick = quespipes;
start2.onclick = questimes;
start3.onclick = quesratio;
start4.onclick = quesprofit;

nextButton1.onclick = nextQuestions1;
nextButton2.onclick = nextQuestions2;
nextButton3.onclick = nextQuestions3;
nextButton4.onclick = nextQuestions4;

function nextQuestions1() {
  let userAnswer = document.querySelectorAll("[name='shriyam']:checked");
  // let rightAnswer = questions[currentQuestionIndex].Indexans;

  if (userAnswer.length === 0) {
    content.style.backgroundColor = "red";
    return;
  } else {
    currentQuestionIndex++;
    content.style.backgroundColor = " rgba(121, 182, 197, 0.658)";
  }
  //TODO:
  //   let calc=Calculator(userAnswer,rightAnswer);

  console.log(x);
  console.log(userAnswer[0]);
  if (currentQuestionIndex + 1 > questions1.length) {
    content.innerHTML = `<div style="text-align:center; font-weight:bolder">Your Quiz is completed</div><br>
        <div style="text-align:center; font-weight:bold"> Name : ${input1.value}</div><br>
        <div style="text-align:center; font-weight:bold">Your Total score is :${x} `;
    clearInterval(interval);

    nextButton1.style.visibility = "hidden";
    nextButton2.style.visibility = "hidden";

    return;
  }
  quespipes();
}

function nextQuestions2() {
  let userAnswer = document.querySelectorAll("[name='shriyam']:checked");
  // let rightAnswer = questions[currentQuestionIndex].Indexans;

  if (userAnswer.length === 0) {
    content.style.backgroundColor = "red";
    return;
  } else {
    currentQuestionIndex++;
    content.style.backgroundColor = " rgba(121, 182, 197, 0.658)";
  }
  //   let calc=Calculator(userAnswer,rightAnswer);

  console.log(x);
  console.log(userAnswer[0]);
  if (currentQuestionIndex + 1 > questions2.length) {
    content.innerHTML = `<div style="text-align:center; font-weight:bolder">Your Quiz is completed</div><br>
        <div style="text-align:center; font-weight:bold"> Name : ${input1.value}</div><br>
        <div style="text-align:center; font-weight:bold">Your Total score is :${x} `;
    clearInterval(interval);

    nextButton1.style.visibility = "hidden";
    nextButton2.style.visibility = "hidden";

    return;
  }
  questimes();
}

function nextQuestions3() {
  let userAnswer = document.querySelectorAll("[name='shriyam']:checked");
  // let rightAnswer = questions[currentQuestionIndex].Indexans;

  if (userAnswer.length === 0) {
    content.style.backgroundColor = "red";
    return;
  } else {
    currentQuestionIndex++;
    content.style.backgroundColor = " rgba(121, 182, 197, 0.658)";
  }
  //   let calc=Calculator(userAnswer,rightAnswer);

  console.log(x);
  console.log(userAnswer[0]);
  if (currentQuestionIndex + 1 > questions2.length) {
    content.innerHTML = `<div style="text-align:center; font-weight:bolder">Your Quiz is completed</div><br>
        <div style="text-align:center; font-weight:bold"> Name : ${input1.value}</div><br>
        <div style="text-align:center; font-weight:bold">Your Total score is :${x} `;
    clearInterval(interval);

    nextButton1.style.visibility = "hidden";
    nextButton2.style.visibility = "hidden";
    nextButton3.style.visibility = "hidden";

    return;
  }
  quesratio();
}

function nextQuestions4() {
  let userAnswer = document.querySelectorAll("[name='shriyam']:checked");
  // let rightAnswer = questions[currentQuestionIndex].Indexans;

  if (userAnswer.length === 0) {
    content.style.backgroundColor = "red";
    return;
  } else {
    currentQuestionIndex++;
    content.style.backgroundColor = " rgba(121, 182, 197, 0.658)";
  }
  //   let calc=Calculator(userAnswer,rightAnswer);

  console.log(x);
  console.log(userAnswer[0]);
  if (currentQuestionIndex + 1 > questions3.length) {
    content.innerHTML = `<div style="text-align:center; font-weight:bolder">Your Quiz is completed</div><br>
        <div style="text-align:center; font-weight:bold"> Name : ${input1.value}</div><br>
        <div style="text-align:center; font-weight:bold">Your Total score is :${x} `;
    clearInterval(interval);

    nextButton4.style.visibility = "hidden";

    return;
  }
  quesprofit();
}

//TODO:
// function Calculator(userAnswer,rightAnswer) {
//   userAnswer = document.querySelectorAll("[name='shriyam']:checked");
// rightAnswer = questions[currentQuestionIndex].Indexans;
//   if (
//     parseInt(userAnswer[0].value) === rightAnswer) {
//     x = x + 1;
//     console.log(x);
//   }
//   return x;
// }

function Start1() {
  nextButton1.style.visibility = "hidden";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  start1.style.visibility = "visible";
}
function Start2() {
  nextButton2.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  start2.style.visibility = "visible";
}
function Start3() {
  nextButton3.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  start3.style.visibility = "visible";
}
function Start4() {
  nextButton4.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  start4.style.visibility = "visible";
}

function quespipes() {
  input1.style.visibility = "hidden";
  input2.style.visibility = "hidden";
  nextButton1.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  nameDiv.innerText = "Let's Gooo !";
  clearInterval(interval);
  interval = setInterval(stopWatch, 1000);
  let q = questions1[currentQuestionIndex].Question;
  let s = `${currentQuestionIndex + 1})-${q}`;

  for (
    let index = 0;
    index < questions1[currentQuestionIndex].options.length;
    index++
  ) {
    const option = questions1[currentQuestionIndex].options[index];
    console.log(option);
    s =
      `${s}` +
      `<div style="padding-top:20px; padding-left:5px;"> <input type="radio" name="shriyam" id="${index}" value="${index}">&nbsp${option}</div>`;
  }
  content.innerHTML = s;

  questionNo.innerText = `Question no. ${currentQuestionIndex + 1}/${
    questions1.length
  }`;
}

function questimes() {
  input1.style.visibility = "hidden";
  input2.style.visibility = "hidden";
  nextButton2.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  nameDiv.innerText = "Let's Gooo !";
  clearInterval(interval);
  interval = setInterval(stopWatch, 1000);
  let q = questions2[currentQuestionIndex].Question;
  let s = `${currentQuestionIndex + 1})-${q}`;

  for (
    let index = 0;
    index < questions2[currentQuestionIndex].options.length;
    index++
  ) {
    const option = questions2[currentQuestionIndex].options[index];
    console.log(option);
    s =
      `${s}` +
      `<div style="padding-top:20px; padding-left:5px;"> <input type="radio" name="shriyam" id="${index}" value="${index}">&nbsp${option}</div>`;
  }
  content.innerHTML = s;

  questionNo.innerText = `Question no. ${currentQuestionIndex + 1}/${
    questions2.length
  }`;
}

function quesratio() {
  input1.style.visibility = "hidden";
  input2.style.visibility = "hidden";
  nextButton3.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  nameDiv.innerText = "Let's Gooo !";
  clearInterval(interval);
  interval = setInterval(stopWatch, 1000);
  let q = questions2[currentQuestionIndex].Question;
  let s = `${currentQuestionIndex + 1})-${q}`;

  for (
    let index = 0;
    index < questions2[currentQuestionIndex].options.length;
    index++
  ) {
    const option = questions2[currentQuestionIndex].options[index];
    console.log(option);
    s =
      `${s}` +
      `<div style="padding-top:20px; padding-left:5px;"> <input type="radio" name="shriyam" id="${index}" value="${index}">&nbsp${option}</div>`;
  }
  content.innerHTML = s;

  questionNo.innerText = `Question no. ${currentQuestionIndex + 1}/${
    questions2.length
  }`;
}

function quesprofit() {
  input1.style.visibility = "hidden";
  input2.style.visibility = "hidden";
  nextButton4.style.visibility = "visible";
  questionNo.style.visibility = "visible";
  timer.style.visibility = "visible";
  score.style.visibility = "visible";
  buttonHandler.style.visibility = "hidden";
  category.style.visibility = "hidden";
  nameDiv.innerText = "Let's Gooo !";
  clearInterval(interval);
  interval = setInterval(stopWatch, 1000);
  let q = questions4[currentQuestionIndex].Question;
  let s = `${currentQuestionIndex + 1})-${q}`;

  for (
    let index = 0;
    index < questions4[currentQuestionIndex].options.length;
    index++
  ) {
    const option = questions4[currentQuestionIndex].options[index];
    console.log(option);
    s =
      `${s}` +
      `<div style="padding-top:20px; padding-left:5px;"> <input type="radio" name="shriyam" id="${index}" value="${index}">&nbsp${option}</div>`;
  }
  content.innerHTML = s;

  questionNo.innerText = `Question no. ${currentQuestionIndex + 1}/${
    questions4.length
  }`;
}

function stopWatch() {
  timer.innerText = `Remaining time : ${i}`;
  if (i <= 0) {
    setInterval(interval);

    content.innerText = "";
    timeoutContent = document.createElement("div");
    timeoutContent.style.textAlign = "center";
    timeoutContent.style.fontSize = "30px";
    timeoutContent.style.fontWeight = "bold";
    timeoutContent.style.margin = "120px auto";
    timeoutContent.innerText = "Your time is over";
    content.append(timeoutContent);
    nextButton1.style.visibility = "hidden";
    nextButton2.style.visibility = "hidden";
    nextButton3.style.visibility = "hidden";
    nextButton4.style.visibility = "hidden";
    return;
  }
  i--;
}
