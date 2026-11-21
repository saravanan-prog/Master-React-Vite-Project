
const BASEURL = "https://fakestoreapi.com"


export const fetchApiService = async (pathUrl,method,payload,signal) => {

    const response = await fetch(
        BASEURL +'/'+ pathUrl, 
        getOption(method,signal)
    )

    const responseData = await response.json()
    return responseData

}

const getOption = (method,signal) =>{

    method = method.trim().toLowerCase()
    const option = {
        "method" : method,
        "headers":{
            "Content-Type" : "application/json"
        },
        signal:signal
    }

    if( (method ==="post" ||  method ==="put") && payload != undefined)
        option.body = JSON.stringify(payload)

    return option
}