var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "limit=10&api_key=dc6zaTOxFJmzC";
var movie = "batman";

 $.ajax({
    url: queryURL,
    method: 'GET'
 	})
    .done(function(response) {

    	console.log(response);
    }