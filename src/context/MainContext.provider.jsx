import { MainContext } from './gloabl.context.js'

export default function MainContextProvider({children}){

    const appSettings = {
        theme : "dark",
        language:"tamil"
    }

    return(
        <>
            <div>
               <MainContext.Provider value={appSettings}>
                 {children}
               </MainContext.Provider>
            </div>
        
        </>
    )
}