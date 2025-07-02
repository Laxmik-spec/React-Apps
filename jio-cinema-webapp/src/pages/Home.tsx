import Header from "../components/Header/header"
import Tags from '../components/tags/tags'
import Channels from '../components/channels/channels'
import Carousel from '../components/carousel/carousel'
import Featured from "../components/featured/featured"
import Shows from '../components/shows/shows'
import { useEffect, useState } from "react"


export default function Home()
{
    let [movies, setMovies] = useState([])
    let [featured, setFeatured] = useState([])
    let [actionMovies, setActionMovies] = useState([])
    let [dramaMovies, setDramaMovies] = useState([])
    let [topRatesMovies, setTopRatesMovies] = useState([])


    useEffect(() => {
        const fetchMovies = async () => {

            try {
                let movieresponse = await fetch('http://localhost:3000/movies')
                let moviesdata = await movieresponse.json()
                setMovies(moviesdata)

                // filter for featured movies
                featured = moviesdata.filter((movie)=>{return movie.featured === true})
                console.log(featured)
                setFeatured(featured.slice(0,6))


                // filter for action movies
                let actionMovies = moviesdata.filter((movie)=>{return movie.genre.includes('Action')})
                console.log(actionMovies)
                setActionMovies(actionMovies.slice(0,6))

                // filter for hindi movies
                let DramaMovies = moviesdata.filter((movie)=>{return movie.genre.includes('Drama')})
                console.log(DramaMovies)
                setDramaMovies(DramaMovies.slice(0,6))

                // filter for action movies
                let topMovies = moviesdata.filter((movie)=>{return movie.imdb>=8.5})
                console.log(topMovies)
                setTopRatesMovies(topMovies.slice(0,6))
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchMovies() 
    }, [])



    return (
        <>

            <Header/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured movies={featured}/>
            <Shows title='Action Movies'/>
            <Shows title='Hindi Movies'/>
            <Shows title='English Movies'/>
        </>
    )

}