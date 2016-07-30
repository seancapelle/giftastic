//Movie titles to be turned into buttons
var titles = ["Star Wars", "Back to the Future", "Ghostbusters", "Indiana Jones"];

//Main function
buttonMaker = function(){

    //Create buttons from titles array
    for (var i = 0; i < titles.length; i++) {

        //Adds "+" between words
        var plusTitles = titles[i].split(' ').join('+');

        //Button attributes
        var button = $('<button data-movie=' + plusTitles + '>').append(titles[i]);

        //Add button class
        button.addClass('button');
        
        //Appened to div
        $('#movieButtons').append(button);
        
    }

    //User adds movie title
    $('#addMovie').on('click', function() {

        //Clear the buttons so they won't duplicate on the page
        $('#movieButtons').empty();
         
        //newTitle gets the movie title user entered
        var newTitle = $('#movie-input').val();

        //Only add one instance of movie
        for (i = 0; i < titles.length; i++) {
        
            //If newTitle can be found in the array
            if (newTitle == titles[i]) {

               //Remove newTitle from the array
                titles.pop(newTitle);
            }
        }

        //Adds newTitle to the titles array
        titles.push(newTitle);

        //Calls the loop again with the new title
        buttonMaker();

     });
  
    //User clicks on movie button
    $('button').on('click', function() {

        //ID's which button selected
        var movie = $(this).data('movie');

        console.log($(this).data('movie'));
        
        //Adds movie to the queryURL
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";

        //Ajax call
         $.ajax({
            url: queryURL,
            method: 'GET'
            })

        //Ajax response
        .done(function(response) {

            //Console log object returned
            console.log(response);

            //Set the response to results variable
            var results = response.data;

            //Empty out previous gifs
            $('#movies').empty();

                //Loop to display all 10 gifs
                for (var i = 0; i < results.length; i++) {

                    //Create movieDiv
                    var movieDiv = $('<div>');

                    //Create p
                    var p = $('<p>');

                    //Set rating to variable
                    var rating = results[i].rating.toUpperCase();

                        //Tests if rating is given
                        if (rating == ''){

                            p.text("Not rated");
                        }
                        else {
                            p.text("Rated " + rating);
                        }

                    //Create img tag    
                    var movieImage = $('<img>');

                    //Attribute source
                    movieImage.attr("src", results[i].images.fixed_height_small_still.url);

                    //Attribute still image
                    movieImage.attr("data-still", results[i].images.fixed_height_small_still.url);

                    //Attribute active image
                    movieImage.attr("data-active", results[i].images.fixed_height_small.url);

                    //Set data-state to still
                    movieImage.attr("data-state", "still");

                    //Attribute data
                    movieImage.attr("data-value", i);

                    //Append the rating
                    movieDiv.append(p);

                    //Append movieImage to the div
                    movieDiv.append(movieImage);

                    //Prepend to #movies
                    $('#movies').prepend(movieDiv);
                        
                }

            //On click to animate gifs    
            $('img').on('click', function(e){

                //console.log(e);

                console.log(e);

                var dataNumber = e.currentTarget.dataset.value;

                var currentState = e.currentTarget.dataset.state;

                var still = "still";

                if ($(this).attr(data-state) == still) {

                    $(this).attr(src).

                }
                else {

                    //MAKE STILL
                }

                var clickImage = $(this).data(movie);

                
            })


            })

        });
};

//Start the app
buttonMaker();

