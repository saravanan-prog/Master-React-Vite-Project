import { useLayoutEffect,useRef } from "react"

export default function A_ReferenceHook(){

    const pref = useRef()
    const inputRef = useRef()

    useLayoutEffect(()=>{
       
        pref.current.style.color="red";
        pref.current.style.backgroundColor="green"

         console.log("inputRef====>",inputRef)
         inputRef.current.focus()
    },[])


    return(
        <>
            <div className="container">
                <p ref={pref}> Hello React Js world </p>
                <input type="text" ref={inputRef} />
            </div>
        
        </>
    )

}