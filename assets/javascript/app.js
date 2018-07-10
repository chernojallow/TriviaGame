

  



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
                         "What is the capital of Gambia?", 
                         "Where do you shop for grocery?", 
                         "Which team do you support in the NBA?" ];

    var  options = [["Donald Trump", "George Bush", "Barrack Obama", "Bill Gates"], 
                       ["Dallas","Austin","Houston","San Antonio"], 
                       ["Japan", "Brazil", "Russia", "France"], 
                       [ "Bakau","Banjul","Dippa","Sukuta"], 
                       ["Doller General", "Doller Tree", "H.E.B", "Walmart"], 
                       ["Houston(Rockets)","Indiana(Pacers)","Golden States(Warriors)","Cleveland(Caveliers)"]];
                       
   var  imageArray = ["<img class='center-block img-right' src='assets/images/image1.jpeg'>", 
                     "<img class='center-block img-right' src='assets/images/image2.jpeg'>", 
                     "<img class='center-block img-right' src='assets/images/image3.jpeg'>", 
                     "<img class='center-block img-right' src='assets/images/image4.jpg'>", 
                     "<img class='center-block img-right' src='assets/images/image7.jpeg'>", 
                     "<img class='center-block img-right' src='assets/images/image6.jpeg'>"];

   var   answers = [      "A. Donald Trump", 
                          "B. Austin", 
                          "C.Russia", 
                          "B. Banjul", 
                          "D. Walmart", 
                          "A. Houston(Rockets)" ];
                          
                    

  





   $(document).ready(function() {
    
    

    function startGame() {
        $(".bootstrap").html ("<p class='start'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>");
    
    }
      startGame();
    
   
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
        clickSound.play();
        domHTML();
    
        setTimer();
    
    }); 
    
    $("body").on("click", ".answer", function(event){
       

       
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
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        reset();
    }); // Closes reset-button click
    
    });  
    
    
    function timeOut() {
        notAnswered++;
        $(".bootstrap").html 
        ("<p class='time'>Time Remaining: <span class='timer'>" + count + "</span></p>" +
          "<p class='text-center'>You ran out of time! The correct answer was: " + answers[questionCounter] + "</p>" +
          "<img class='center-block img-wrong' src='img/x.png'>");
     var timer =  setTimeout(wait, 2000);  
    }
    
    
    function win() {
        rightAnswer++;
        $(".bootstrap").html  ("<p class='time'>Time Remaining: <span class='timer'>" + count + "</span></p>" + 
        "<p class='text-center'>Correct! The answer is: " + answers[questionCounter] + "</p>" + imageArray[questionCounter]);
       
     var timer= setTimeout(wait, 2000);  
    }
    
    /
    function loss() {
        wrongAnswer++;
        $(".bootstrap").html("<p class=' time'>Time Remaining: <span class='timer'>" + count + "</span></p>" + 
        "<p class='text-center'>Wrong! The correct answer is: "+ answers[questionCounter] + "</p>" + 
        "<img class='center-block img-wrong' src='img/x.png'>");
      var timer = setTimeout(wait, 2000); 
    }
    


    function domHTML() {
        $(".bootstrap").html ("<p class='time'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + 
        questions[questionCounter] + "</p><p class='first-answer answer'>A. " + options[questionCounter][0] + 
        "</p><p class='answer'>B. "+options[questionCounter][1]+"</p><p class='answer'>C."+options[questionCounter][2]+"</p><p class='answer'>D. "+options[questionCounter][3]+"</p>");
        
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
    
    
    function endGame() {
        $(".bootstrap").html 
        ("<p class=' time'>Time Remaining: <span class='timer'>" + count + "</span></p>" + 
        "<p class='text-center'>All done, here's how you did!" + "</p>" +  
        "<p class='summary-correct'>Correct Answers: " + rightAnswer + "</p>" +
         "<p>Wrong Answers: " + wrongAnswer+ "</p>" + 
         "<p>Unanswered: " + notAnswered + "</p>" + 
         "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Start Over!</a></p>");
        
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
         
    
    


 
