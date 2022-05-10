$.ajax({
    url: 'http://www.omdbapi.com/?apikey=51559b83&s=superman',
    success: function(result) {
        console.log(result);
    }
});