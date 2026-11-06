import { getEndpoint, getOption } from "./url.service"

export const fetchApiCall = async (path,method,body={},controller) => {

    try{
        const url     =  getEndpoint(path)
        const option  =  getOption(method,controller)
        const response = await fetch(url,option,body)
        return await response.json()
    }
    catch(error){
        console.error("error::::",error)
    }  
}

