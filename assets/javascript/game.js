
$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".total-score").text(totalScore);

    // pick random number 1-50
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(randomNumber);

    //display random number to player
    $(".random-number").text(randomNumber);

    //pick gem1 value 1-10
    var gemValue1 = Math.floor((Math.random() * 12) + 1);
    var gemValue2 = Math.floor((Math.random() * 12) + 1);
    var gemValue3 = Math.floor((Math.random() * 12) + 1);
    var gemValue4 = Math.floor((Math.random() * 12) + 1);
    console.log(gemValue1, gemValue2, gemValue3, gemValue4);

    var gemArray = [gemValue1, gemValue2, gemValue3, gemValue4];
    //click on first gem
    $(".button").on("click", function () {
        
            totalScore = totalScore + parseInt($(this).attr("data-gem"));
            $(".total-score").text(totalScore);
    
        if (totalScore === randomNumber) {
            wins++;
            $(".wins").text(wins);
            $(".message").text("You win!")
            // reset game
        }
        //below doesnt work
        if (totalScore > randomNumber) {
            losses++;
            $(".losses").text(losses);
            $(".message").text("You lose!")
            // reset game
        };
    });


    for (var i = 0; i < gemArray.length; i++) {
        var x = i;
        x++;
        var gem = ".gem" + x;
        $(gem).attr("data-gem", gemArray[i]);
    }


    // if (totalScore === randomNumber) {
    //     wins++;
    //     $(".wins").text(wins);
    //     $(".message").text("You win!")
    // }
    // //below doesnt work
    // if (totalScore > randomNumber) {
    //     losses++;
    //     $(".losses").text(losses);
    //     $(".message").text("You lose!")
    // };

});
