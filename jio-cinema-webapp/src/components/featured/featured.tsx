import FeaturedShow from '../featured-show/featured-show'
import styles from './featured.module.css'


const featured = (props) => {

    return (
        <>
            <section className={styles.featured}>

                <h1 className={styles.sectiontitle}>Hot Right Now </h1>

                <div className={styles.shows}>

                    {
                        props.movies.map((movie)=>{
                            return <FeaturedShow movie = {movie}/>
                        })


                    }
                    
                </div>



            </section>
        </>
    )
}

export default featured