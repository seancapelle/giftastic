var titles = ["Star Wars", "Back to the Future", "Ghostbusters", "Indiana Jones"];

for (var i = 0; i < titles.length; i++) {

	var button = $('<button data-movie=' +titles[i] + '>').append(titles[i]);
	$('#movieButtons').append(button);
}

$('button').on('click', function() {

var movie = $(this).data('movie');
console.log (this);
console.log ($(this));
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";

//Ajax call
 $.ajax({
    url: queryURL,
    method: 'GET'
 	})

	//Ajax response
    .done(function(response) {

    	console.log(response);

    	var results = response.data;

    	//Empty out previous gifs
    	$('#movies').empty();

    	for (var i = 0; i < results.length; i++) {

    		var movieDiv = $('<div>');

    		var p = $('<p>');

    		var rating = results[i].rating.toUpperCase();

    		//Tests if rating is given
    		if (rating == ''){

    			p.text("Not rated");
    		}
    		else {
    			p.text("Rated " + rating);
    		}

    		var movieImage = $('<img>');

            movieImage.attr("src", results[i].images.fixed_height.url);

            movieDiv.append(p);

            movieDiv.append(movieImage);

            $('#movies').prepend(movieDiv);
                
            }

    	})
    });