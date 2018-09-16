import axios from 'axios'

export default {
    getMovies: searchData => {
        let url = '/api/search?'
        const entries = Object.entries(searchData)
        for (const [key, value] of entries) {
            url += `${key}=${value}&`
        }
        return axios.get(url)
    },

    getTrailer: movieTitle => axios.get('https://www.googleapis.com/youtube/v3/search?', {
        params:
        {
            key: process.env.REACT_APP_YOUTUBE,
            maxResults: 1,
            q: movieTitle + ' trailer',
            part: 'snippet',
            type: 'video',
            videoCategoryId: 44,
            videoEmbeddable: true,
            videoSyndicated: true,
        }
    })
}