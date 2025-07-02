import { useState } from 'react'
import styles from './tags.module.css'

const tags = () => {

    let [tags] = useState([
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Thriller",
        "Western",
        "Historical",
        "Documentary",
        "Family",
        "Musical",
        "War",
   
        
      ]
      )
    return (
        <>
            <div className={styles.tags}>

                {
                    tags.map((tags) => {
                        return <p className={styles.tag}>{tags}</p>
                    })
                }

            </div>
        </>
    )
}

export default tags