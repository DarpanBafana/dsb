function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show Choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("button"+i, choices[i]);
        }

        showProgress();
     }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScores(){
    var  gameOver = "<h1>Result</h1>";
    gameOver += "<h2 id='score'>Your scores: " +quiz.score+ "</h2>"; 
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver ;
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

var questions = [
    new Question("Which is highest peak in the world ?", ["K2", "Everest","Mt.Fuji","kilimanjaro"], "Everest"),
    new Question("Which ocean has deepest Place in the world ?", ["Atalntic", "Indian", "Pacific", "Arctic"], "Pacific"),
    new Question("Which place has most rainfall on earth ?", ["Kerala", "Cherapunji", "Mousinram", "Gangtok"], "Cherapunji")
];

var quiz = new Quiz(questions);
populate();