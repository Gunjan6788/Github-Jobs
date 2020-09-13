import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { get_jobs } from '../Redux/action'

const Home = () => {
    const dispatch = useDispatch()

    // let { allJobs }= useSelector(state => state.allJobs)

    // useEffect(() => {
    //     dispatch(get_jobs())
    // },[])

    const handleclick = () => {
        // console.log('handleclick')
        dispatch(get_jobs())
    }

    return (
        <div>
            <Container>
                <button onClick={handleclick}>
                    abc
                </button>
                {/* {console.log(allJobs)} */}
            </Container>
        </div>
    )
}

export default Home