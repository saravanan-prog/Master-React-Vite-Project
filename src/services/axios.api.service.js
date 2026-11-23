import axios from "axios";
import { getPathUrl } from "./url.service";

const apiEndpoint = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_ENOINT_URL,
        timeout : 5000
    }
)


export const getApiCall = async (pathName,signal) => {
    const resposne = await apiEndpoint.get(
        getPathUrl(pathName),
        {signal}
    )
    
    return resposne.data
}

