


$('button').on('click', function() {

var movie = "star wars";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";


 $.ajax({
    url: queryURL,
    method: 'GET'
 	})

    .done(function(response) {

    	console.log(response);

    	var results = response.data;

    	for (var i = 0; i < results.length; i++) {

    		var movieDiv = $('<div>');

    		var p = $('<p>');

    		var rating = results[i].rating.toUpperCase();

    		p.text("Rated " + rating);

    		var movieImage = $('<img>');

            movieImage.attr("src", results[i].images.fixed_height.url);

            movieDiv.append(p);

            movieDiv.append(movieImage);

            $('#movies').prepend(movieDiv);
                
            }

    	})
    });