export const loginStatus = () => {
    const token = localStorage.getItem('token')
    return token ? true : false
}