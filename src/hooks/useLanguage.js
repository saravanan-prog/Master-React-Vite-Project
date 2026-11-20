import { useAppSettings } from "./useAppSettings"
import tamil from '../assets/lang/tamil.json'
import english from '../assets/lang/english.json'

export const useLanguage = () => {

    const {lang} = useAppSettings() 

    console.log("lang====>",lang)

    if(lang == "tamil")
        return tamil
    else
        return english

}