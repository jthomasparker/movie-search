import axios from 'axios'

export default {

    searchTitles: searchData => axios.get('/api/search?title=' + searchData),

    getMovies: searchData => {
        let url = '/api/search?'
        const entries = Object.entries(searchData)
        for (const [key, value] of entries) {
            url += `${key}=${value}&`
        }
        console.log(url)
        return axios.get(url)
    }
}