import { Container } from "react-bootstrap"
import { MainContext } from "../../context/gloabl.context"
import { useContext } from "react"
export default function GalleryPage(){

    const {theme,language} =  useContext(MainContext)
    const data = useContext(DashboardContext)


    return(
        <>
            <div >
                <h1> {language ==="tamil" ? "கேலரி பக்கம" : "Gallery page" } </h1>
            </div>
        
        </>
    )
}