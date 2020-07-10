import {
    ALL_JOBS
} from './actionTypes'


const initialState = {
    allJobs: []
}

export default (state = initialState, { type, payload }) => {
    console.log(payload)

    switch (type) {

        case ALL_JOBS:
            return { ...state, allJobs: payload }

        default:
            return state
    }
}
