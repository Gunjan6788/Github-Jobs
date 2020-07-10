import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import {get_jobs} from '../Redux/action'

export default function Home() {
    let dispatch = useDispatch()

    let { allJobs }= useSelector(state => state.allJobs)

    useEffect(() => {
        dispatch(get_jobs())
    }, [])


    return (
        <div>
            <Container>
                {console.log(allJobs)}

            </Container>
        </div>
    )
}
