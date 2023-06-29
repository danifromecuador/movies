const loadMovies = async () => {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=490505c7fe17d32a465ca75403c13a33");
    // console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      // console.log(data.results);
      let movies = "";
      data.results.forEach(movie => movies += `<div class="movie">${movie.title}</div>`);
      console.log(movies);
      document.getElementById("mainContainer").innerHTML = movies;
    }
  }
  catch (error) {
    console.log(error);
  }
};

loadMovies();