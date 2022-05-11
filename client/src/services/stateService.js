import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        // example URL api/state/Minnesota
        let requestData = { visited: visited }
        // singular state in URL works here, and I can't figure out why
        return axios.patch('/api/state/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then( response => {
            return response.data
        })
    }
}