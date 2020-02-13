import axios from 'axios'

const key = '6ced056b0cb72f6bbce6b75bef270846'

const api = {
    use: axios.create({
        baseURL: `https://api.themoviedb.org/3/`
    }),
    key
}

export default api