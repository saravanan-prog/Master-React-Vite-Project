import { useEffect } from 'react'
import styles from './homepage.module.css'

export default function HomePage(){

    useEffect(()=>{
        console.log("styles=======>",styles)
    },[])

    return(
        <>
            <div className="container">
              <div className={styles.title}> Home Page </div>
            </div>
            <div>
                <p id={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam temporibus rem quas mollitia corporis voluptatibus numquam rerum, expedita neque dolores quos possimus iste culpa fuga cumque assumenda laudantium modi?</p>
            </div>
        </>
    )
}