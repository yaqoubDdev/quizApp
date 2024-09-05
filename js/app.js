console.log("Hello, world");

const quizBox = document.getElementById("quiz")
const resultsBox = document.getElementById("results")
const submtButton = document.getElementById("submit")

let myQuestions = [

    {question: "What was the name giving to the Temne King ? ", answers: {a: "Obai", b: "Lavai", c: "Ndo Mahee", d: "Kapr-Masim"}, correctAns: "a"}
    {question: "Who acted as the Regent in the Temne Kingdom ?", answers: {a: "Kapr-kuma", b: "Kapr-gbogboro", c: "Kapr-fenthe", d: "Kapr-masim"}, correctAns: "d"},
    {question: "Who was the minister of health in the temne kingdom ?", answers: {a: "kapr-soya", b: "kapr-loya", c: "kapr-kuma", d: "kapr-fenthe"}, correctAns: "d"},
    {question: "What is 2 + 2 ? ", answers: {a: "22", b: "2", c: "8", d: "4"}, correctAns: "d"} 

] 

function buildQuiz() {

    const output = [];
    
    myQuestions.forEach( 
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers){
                answers.push(
                    `

                    <label> 
                        <input type="radio" name="question${questionNumber}" value="${letter}" class="rad_butn">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>

                    `
                );
            }
            
            output.push(
                `

                <div class="slide">
                    <div class="question"> 
                        ${(questionNumber+1)}. ${currentQuestion.question}
                    </div>
                    <div class="answers"> 
                        ${answers.join("")}
                    </div>
                </div>

                `
            );
        }
    );
    
    
    quizBox.innerHTML = output.join('')
}
    
function showResullts() {
    const answerBoxs = quizBox.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach(

        (currentQuestion, questionNumber) => {

            const answerBox = answerBoxs[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerBox.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAns){
                numCorrect++;
                answerBoxs[questionNumber].style.color = 'green';
                console.log(currentQuestion.correctAns);
                console.log(userAnswer)
                console.log(selector)
            }else {
                console.log(currentQuestion.correctAns);
                console.log(userAnswer)
                console.log(selector)
                answerBoxs[questionNumber].style.color = 'red';

            }
        }
    );
    console.log(numCorrect)
    resultsBox.innerHTML = `${numCorrect} out of ${myQuestions.length}`
}

function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0){
        previousButn.style.display = 'none';
    }
    else{
        previousButn.style.display = 'inline-block';
    }

    if(currentSlide === slides.length-1){
        nextButn.style.display = 'none';
        submtButton.style.display = 'inline-block'
    }
    else{
        nextButn.style.display = 'inline-block';
        submtButton.style.display = 'none'
    }
}

function showNextSlide(){
    showSlide(currentSlide + 1)
}

function showPreviousSlide(){
    showSlide(currentSlide - 1)
}







buildQuiz();

const previousButn = document.getElementById('previous');
const nextButn = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

showSlide(currentSlide)

submtButton.addEventListener("click", showResullts)

previousButn.addEventListener('click', showPreviousSlide);
nextButn.addEventListener('click', showNextSlide);


//// There is still errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ereooorooooooooooooooooooeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrroooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
