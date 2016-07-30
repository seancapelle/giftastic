var titles = ["Star+Wars", "Back+to+the+Future", "Ghostbusters", "Indiana+Jones"];

buttonMaker = function(){

console.log ("In buttonMaker");

for (var i = 0; i < titles.length; i++) {

    var button = $('<button data-movie=' + titles[i] + '>').append(titles[i]);
    $('#movieButtons').append(button);
    }



    $('#addMovie').on('click', function() {
     
     //newTitle gets the movie title user entered
     var newTitle = $('#movie-input').val();

     // //Adds newTitle to the titles array
     titles.push(newTitle);

     for (i = 0; i < titles.length; i++){
        var button = $('<button data-movie=' +titles[i] + '>').append(titles[i]);
        $('#movieButtons').append(button);

        // var newButton = $('<button>');
        // newButton.attr('data-movie', );
        // newButton.html(newTitle);
     }

     //Appends new button
     // $('#movieButtons').append(newButton);

 });
  
//User clicks on movie button
$('button').on('click', function() {

    //ID's which button selected
    var movie = $(this).data('movie');
    
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

                //Attribute static image
                movieImage.attr("src", results[i].images.fixed_height_small_still.url);

                //Attribute data
                movieImage.attr("data", i);

                //Append the rating
                movieDiv.append(p);

                //Append movieImage to the div
                movieDiv.append(movieImage);

                //Prepend to #movies
                $('#movies').prepend(movieDiv);
                    
            }

            $('img').on('click', function(){

                console.log("This is " + this);

                var clickImage = $(this).data(i);

                console.log(clickImage);
            })


        })

    });
};

buttonMaker();

