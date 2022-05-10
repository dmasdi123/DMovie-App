$.ajax({
    url: 'http://www.omdbapi.com/?apikey=51559b83&s=superman',
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach( m => {
            cards += `<div class="col-md-4 my-3">
                            <div class="card">
                                <img src="${m.Poster}">
                                <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show Details</a>
                                </div>
                            </div>
                       </div>`;
        });
        $('.movie-container').html(cards);
    },
    error: function(e) {
        console.log(e.reponseText);
    }
});