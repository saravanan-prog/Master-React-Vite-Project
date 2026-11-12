
import { BASEURL, URL, OPTIONS } from '../constants/url.constant'

export const getEndpoint = (pathname) => {

    const path = pathname.includes('/') ? pathname.split('/') : pathname

    if (typeof path === "string") {
        var endPointurl = `${BASEURL}/${URL[path]}`
    }
    else {
        var endPointurl = `${BASEURL}/${URL[path[0]]}/${path[1].trim()}`
    }
    return endPointurl
}

export const getOption = (method, body = {},controller) => {
    OPTIONS.method = method
    if (method === "post" || method === "put" || method === "patch" && body != {} )
        OPTIONS.body = JSON.stringify(body)

    if(controller != undefined)
        OPTIONS.signal = controller.signal

    return OPTIONS
}