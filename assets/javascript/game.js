  var targetNumber = Math.floor(Math.random() * 120) + 19;
  var counter = 0;
  var numberOptions = [];
  var loses = 0; 
  var wins = 0; 
  var crystalPics = ["./assets/images/image1.jpg","./assets/images/image2.jpg","./assets/images/image3.jpg","./assets/images/image4.jpg"];
  //"http://www.crystalinks.com/lasercrystal250.jpg", "http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg", "https://www.extremetech.com/wp-content/uploads/2013/07/quartz-crystal-640x353.jpg","https://www.sciencedaily.com/images/2013/11/131127131802_1_900x600.jpg" ]

  $("#number-to-guess").text(targetNumber);
   $("#wins").text(wins);
   $("#loses").text(loses);


 function newgame(){
      targetNumber = Math.floor(Math.random() * 120) + 19;
      $("#number-to-guess").text(targetNumber);
      numberOptions = [];
      rando();
      counter = 0;
      $("#score").empty().html(counter);
        for (var i = 0; i < numberOptions.length; i++) {
              var imageCrystal = $("<img>");
              imageCrystal.addClass("crystal-image");
              imageCrystal.attr("src", crystalPics[i]);
              //imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg");
              imageCrystal.attr("data-crystalvalue", numberOptions[i]);
              $("#crystals").append(imageCrystal);
          }
        $(".crystal-image").on("click", function() {

    
                    var crystalValue = ($(this).attr("data-crystalvalue"));
                    crystalValue = parseInt(crystalValue);
                    counter += crystalValue;
                    var score = counter;
                    $("#score").empty().html(counter);
                   

                      if (counter === targetNumber) {
                        alert("You win!");
                        wins++;
                        $("#crystals").empty();
                        newgame();
                        $("#wins").text(wins);
                      }

                      else if (counter >= targetNumber) {
                        alert("You lose!!");
                        loses++;
                        $("#crystals").empty();
                        newgame();
                        $("#loses").text(loses);
                  }

  });   
  }

    function rando () {
      for (var i=0, t=4; i<t; i++) {
      numberOptions.push(Math.round(Math.random() * 12))
      console.log(numberOptions);
    }
     
  }

 

  newgame();

  // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
  //     var crystalValue = ($(this).attr("data-crystalvalue"));
  //     crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //     counter += crystalValue;
  //     var score = counter;
  //     $("#score").empty().html(counter);
  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //     alert("New score: " + counter);

  //       if (counter === targetNumber) {
  //         alert("You win!");
  //         wins++;
  //         $("#crystals").empty();
  //         // rando();
  //         newgame();
  //         $("#wins").text(wins);
  //       }

  //       else if (counter >= targetNumber) {
  //         alert("You lose!!");
  //         loses++;
  //         $("#crystals").empty();
  //         // rando();
  //         newgame();
  //         $("#loses").text(loses);
  //   }

  // });
