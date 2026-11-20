import { useLanguage } from "./hooks/useLanguage"

export default function App(){

    const state = useLanguage()

    return (
        <>  
            <div className="container mt-4">
                <p>{state.page}</p>
            </div>
        </>
    )
}