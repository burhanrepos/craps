// variables used to test the state of the game
var WON = 0;
var LOST = 1;
var CONTINUE_ROLLING = 2;

// var randomNumber1=Math.floor(Math.random()*6)+1;

// // var randomDiceImage="dice"+randomNumber1+".png";

// var randomImageSource="images/dice"+randomNumber1+".png";

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src",randomImageSource);
// var randomNumber2=Math.floor(Math.random()*6)+1;

// // var randomDiceImage="dice"+randomNumber1+".png";

// var randomImageSource2="images/dice"+randomNumber2+".png";

// var image2=document.querySelectorAll("img")[1];

// image2.setAttribute("src",randomImageSource2);

// if(randomNumber1 >randomNumber2){
// document.querySelector('h1').innerHTML="🎆Player 1 Wins";
// }
// else if(randomNumber1<randomNumber2){
// document.querySelector('h1').innerHTML="Player 2 Wins🎆";
// }
// else
// {
// document.querySelector('h1').innerHTML="Match Draw";
    
// }


 // other variables used in program
 var firstRoll = true; // true if current roll is first
 var sumOfDice = 0; // sum of the dice
 var myPoint = 0; // point if no win/loss on first roll
 var gameStatus = CONTINUE_ROLLING; // game not over yet

 // process one roll of the dice
 function play()
 {
    // get the point field on the page
    var point = document.getElementById( "pointfield" );

    // get the status div on the page
    var statusDiv = document.getElementById( "status" );
    if ( firstRoll ) // first roll of the dice
    {
       sumOfDice = rollDice();
        console.log(sumOfDice)
       switch ( sumOfDice )
       {
          case 7: case 11: // win on first roll
             gameStatus = WON;
             // clear point field
             point.value = "";
             break;
          case 2: case 3: case 12: // lose on first roll
             gameStatus = LOST;
             // clear point field
             point.value = "";
             break;
          default: // remember point
             gameStatus = CONTINUE_ROLLING;
             myPoint = sumOfDice;
             point.value = myPoint;
             firstRoll = false;
       } // end switch
    } // end if
    else 
    {
       sumOfDice = rollDice();

       if ( sumOfDice == myPoint ) // win by making point
          gameStatus = WON;
       else
          if ( sumOfDice == 7 )    // lose by rolling 7
             gameStatus = LOST;
    } // end else

    if ( gameStatus == CONTINUE_ROLLING )
       statusDiv.innerHTML = "Roll again";
    else 
    {
       if ( gameStatus == WON )
          statusDiv.innerHTML = "Player wins. " +
             "Click Roll Dice to play again.";   
       else 
          statusDiv.innerHTML = "Player loses. " + 
             "Click Roll Dice to play again.";     
 
       firstRoll = true;
    } // end else
 } // end function play

 // roll the dice
 function rollDice()
 {
    var die1;
    var die2;
    var die1ImageSource;
    var die2ImageSource;
    var workSum=0;

    die1 = Math.floor( 1 + Math.random() * 6 );
    die2 = Math.floor( 1 + Math.random() * 6 );
    workSum = die1 + die2;
    //setting Image to die1 random number
    die1ImageSource="images/dice"+die1+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",die1ImageSource);
    console.log(workSum,die1,die1ImageSource)
    //setting Image to die2 random number
    die2ImageSource="images/dice"+die2+".png";
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",die2ImageSource);
    console.log(workSum,die2,die2ImageSource)


    document.getElementById( "sumfield" ).value = workSum;

    return workSum;
 } // end function rollDice
 // -->