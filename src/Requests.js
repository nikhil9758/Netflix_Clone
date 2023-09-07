
const API_KEY="48417e3780da13ffc2241be333db1ae5"

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRamanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests