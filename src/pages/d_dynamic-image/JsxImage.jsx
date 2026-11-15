import reactImage from '../../assets/react.svg'
import viteImage from '../../assets/vite.svg'


export default function JsxImage(){


    return(
        <>
            <div className="container">
                <h3> React Image</h3>
                <img src= {reactImage} alt="React-image" />
                <h3> Vite Image </h3>
                <img src= {viteImage} alt="React-image" />

            </div>
        </>
       
    )
}