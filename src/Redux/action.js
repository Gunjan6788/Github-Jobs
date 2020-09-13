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
        return axios({
            method:'get',
            url:'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf'
        })
            .then((res) => console.log(res.data))
            .then((res) => {
                dispatch(get_jobs_success(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}