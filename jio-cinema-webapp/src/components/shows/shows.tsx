import styles from './shows.module.css'
import Show from '../show/show'

const shows = (props) => {

    return (
        <>
            <section className={styles.shows}>

                <h1>{props.title}</h1>
                <div className={styles.showsparent}>
              
                        <Show/>
                        <Show/>
                        <Show/>
                        <Show/>
                        <Show/>
                        <Show/>
                </div>
            </section>
        </>
    )
}

export default shows