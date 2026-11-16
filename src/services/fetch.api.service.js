import { getEndpoint, getOption } from "./url.service"

export const fetchApiCall = async (path,method,body,controller) => {

    try{
        console.log("path=======>",path,"method===>",method,"body===>",body)
        const url     =  getEndpoint(path)
        const option  =  getOption(method,body,controller)
           

        console.log("url=======>",url)
         console.log("option=======>",option)
        const response = await fetch(url,option,body)
        return await response.json()
    }
    catch(error){
        console.error("error::::",error)
    }  
}

