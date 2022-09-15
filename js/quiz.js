var questions = [{
    question: "what is the baby of a Moth known as?",
    choices: ["baby","infant","kit","larva"],
    correctAnswer:3
},{
    question: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer:2
},{
    question: "What is the young of a Buffalo called?",
    choices:["calf", "baby", "pup","cow"],
    correctAnswer: 0

},{
    question: "What do we call the young of an Alligator?",
    choices: ["baby", "gator","hatchling", "calf"],
    correctAnswer:2

},{
    question: "What is a baby Goose called?",
    choices: ["gooser", "goosling", "gup","pup"],
    correctAnswer:1
},{
    question: "What is a baby Hamster called?",
    choices: ["Ham", "Hamstring","youngHam","smallHam"],
    correctAnswer:1
},{
    question: "What is the baby of a grasshopper called?",
    choices: ["hopper","nymph","stick","pup"],
    correctAnswer:1
},{
    question: "What is a baby Kangaroo called?",
    choices: ["kinga", "joey","calf", "baby"],
    correctAnswer:1
},{
    question: "What is a whale baby called?",
    choices: ["whala", "cub", "grub","infant"],
    correctAnswer:0
},{
    question: "What is a baby Monkey called?",
    choices: ["infant","baby","calf", "pulp"],
    correctAnswer:0

},{
    question:" What is  the baby Bear called?",
    choices: ["cub","baby balu", "young Bear", "Bearling"],
    correctAnswer:2
}];

var currentQuestion = 0;
var correctAnswers=0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function (){
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else {
                $(document).find("quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){correctAnswers++;}
                currentQuestion++;
                if(currentQuestion < questions.length) { displayCurrentQuestion();}
                else {
                    displayScore();
                    $(document).find("nextButton").text("Play again?");
                    quizOver= true;
                }
            }
        } else {
            quizOver= false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }


    });
});

function diisplayCurrentQuestions(){
 console.log("in display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer >. .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find("li").remove();
    var choices;
    for (i=0; i<numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value '+ i +' name="dynradio"/>' + choice+ '</li>').appendTo(choiceList);

    }
}
    
    function resetQuiz () {
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
    }

    function displayScore() {
        $(document).find(".quizContainer > .result").text("You scored: " +correctAnswers + "out of" +questions.length);
        $(document).find(".quizContainer > .result").show();
    }

    function hideScore() {
        $(document).find("result").hide();
    }