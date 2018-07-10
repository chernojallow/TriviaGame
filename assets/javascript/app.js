

  



    var questionCounter = 0;
    var selecterAnswer;
    var time;
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var notAnswered = 0;
    var clickSound = new Audio("sound/button-click.mp3"); 
    var timeON = false;

    var count = 20;
    var questions = ["Who is the current president of USA?", 
                         "What is the capital of Texas?", 
                         "In which Country are they playing the 2018  FIFA World Cup?", 
                         "What month was the independence day of USA?", 
                         "Where do you shop for grocery?", 
                         "Which team do you support in the NBA?" ];

    var  options = [["Donald Trump", "George Bush", "Barrack Obama", "Bill Gates"], 
                       ["Dallas","Austin","Houston","San Antonio"], 
                       ["Japan", "Brazil", "Russia", "France"], 
                       [ "June","August","July","May"], 
                       ["Doller General", "Doller Tree", "H.E.B", "Walmart"], 
                       ["Houston(Rockets)","Indiana(Pacers)","Golden States(Warriors)","Cleveland(Caveliers)"]];
                       
   var  imageArray = ["<img class='center-block img-right' src='img/australia.png'>", 
                     "<img class='center-block img-right' src='img/liberia.png'>", 
                     "<img class='center-block img-right' src='img/taiwan.png'>", 
                     "<img class='center-block img-right' src='img/japan.png'>", 
                     "<img class='center-block img-right' src='img/china.png'>", 
                     "<img class='center-block img-right' src='img/turkey.png'>"];

   var   answers = ["A. Donald Trump", 
                          "B. Austin", 
                          "C. Russia", 
                          "C. July", 
                          "D. Walmart", 
                          "A. Houston(Rockets)" ];
                          
                    

  





   $(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    //modified cherno
    function startGame() {
        $(".mainArea").html ("<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>");
    
    }
      startGame();
    
    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
        clickSound.play();
        domHTML();
    
        setTimer();
    
    }); // Closes start-button click
    
    $("body").on("click", ".answer", function(event){
        //answeredQuestion = true;

        // modified;
        clickSound.play();
        var  selectedAnswer = $(this).text();
        if($(this).text() === answers[questionCounter]) {
            //alert("correct");
    
            clearInterval(time);
            win();
        }
        else {
            //alert("wrong answer!");
            clearInterval(time);
            loss();
        }
    }); // Close .answer click
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        reset();
    }); // Closes reset-button click
    
    });  //  Closes jQuery wrapper
    
    // modified
    function timeOut() {
        notAnswered++;
        $(".mainArea").html ("<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>");
     var timer =  setTimeout(wait, 3000);  //  change to 4000 or other amount
    }
    
    // modified
    function win() {
        rightAnswer++;
        $(".mainArea").html  ("<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + answers[questionCounter] + "</p>" + imageArray[questionCounter]);
     var timer= setTimeout(wait, 3000);  //  change to 4000 or other amount
    }
    
    // modified
    function loss() {
        wrongAnswer++;
        $(".mainArea").html("<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ answers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>");
      var timer = setTimeout(wait, 3000); //  change to 4000 or other amount
    }
    

    // modified
    function domHTML() {
        $(".mainArea").html ("<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[questionCounter] + "</p><p class='first-answer answer'>A. " + options[questionCounter][0] + "</p><p class='answer'>B. "+options[questionCounter][1]+"</p><p class='answer'>C. "+options[questionCounter][2]+"</p><p class='answer'>D. "+options[questionCounter][3]+"</p>");
        
    }
    
    function wait() {
        if (questionCounter < 5) {
        questionCounter++;
        domHTML();
        count= 20;
        setTimer();
        }
        else {
            endGame();
        }
    }
    
    // modified
    function setTimer() {

         if (!timeON) {
        time = setInterval(thirtySeconds, 1000);
         }
        function thirtySeconds() {
            if (count === 0 ) {
                clearInterval(time);
                timeOut();
            }
            if (count > 0) {
                count--;
            }
            $(".timer").html(count);
        }
    }
    
    // modified
    function endGame() {
        $(".mainArea").html 
        ("<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + 
        "<p class='text-center'>All done, here's how you did!" + "</p>" +  
        "<p class='summary-correct'>Correct Answers: " + rightAnswer + "</p>" +
         "<p>Wrong Answers: " + wrongAnswer+ "</p>" + 
         "<p>Unanswered: " + notAnswered + "</p>" + 
         "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>");
        
    }
    
    function reset() {
        questionCounter = 0;
        rightAnswer= 0;
        wrongAnswer = 0;
        notAnswered = 0;
        count = 30;
        domHTML();
        setTimer();
    }
         
    
    


 
