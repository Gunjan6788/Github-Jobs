import {
    ALL_JOBS,
} from './actionTypes'
import axios from 'axios'

const get_jobs_success = (payload) => {
    return {
        type:ALL_JOBS,
        payload
    }
}

export const get_jobs = () => {
    return dispatch => {
        return axios.get(
            'https://jobs.github.com/positions.json'
            )
            .then((res) => res.data)
            .then(res => dispatch(get_jobs_success(res)))
            .catch(err => console.log(err))
    }
}