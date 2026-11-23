import { BASEURL } from "../constants/url.constant"
import { getPathUrl } from "./url.service"


export const fetchApicall = async (pathname,method,payload) => {

  var response = {}

  if(method.toLowerCase() == "get")
     response = await fetch(BASEURL + '/' + getPathUrl(pathname))

  else if(method.toLowerCase() == "delete")
     response = await fetch(
      BASEURL + '/' + getPathUrl(pathname),
      getOption(method)

    )

  else if(method.toLowerCase() == "post" || method.toLowerCase() == "put")
     response = await fetch(
      BASEURL + '/' + getPathUrl(pathname), 
      getOption(method,payload)
    )
  
  
  const responseData = await response.json()
  return responseData
}


const getOption = (method,payload) => {
    
  const option = {
      method:method,
      headers:{
        "Content-Type":"application/json"
      },
   }
   if(payload != undefined)
     option.body = JSON.stringify(payload)

   return option
}

