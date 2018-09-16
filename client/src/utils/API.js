import axios from 'axios'

export default {

    searchTitles: searchData => axios.get('/api/search?title=' + searchData)
}