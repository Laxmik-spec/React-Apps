import styles from './featured-show.module.css'


const featuredshow = (props) => {

    return (
        <>

            <div className={styles.featuredshow}>

                <img src={props.movie.imageUrl} alt="" />
                <div className={styles.movietitle}>
                    <h1>{props.movie.name}</h1>
                </div>
            </div>

        </>
    )
}

export default featuredshow