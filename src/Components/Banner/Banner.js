import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
// import axios from 'axios'
import requests from '../../Requests'
const Banner = () => {
    const[movie,setMovie]=useState({})

    const getdata=()=>{
         axios.get('https://api.themoviedb.org/3//discover/movie?api_key=48417e3780da13ffc2241be333db1ae5&with_genres=28')
         .then((res)=>{
            console.log(Math.floor(Math.random()*res.data.results.length))
            const result=res.data.results[Math.floor(Math.random()*res.data.results.length)-1]
            console.log(result)
            setMovie(result)
        })
        console.log(axios)
        // Instance.get(requests.fetchNetflixOriginals)
        
    }
    useEffect(()=>{
        getdata()
    },[])
    return (
        <div className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}>
            <header></header>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>Pause</button>
            </div>
        </div>
    )
}

export default Banner