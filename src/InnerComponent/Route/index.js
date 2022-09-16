export const TOKEN = 'token'
export const login = (token) => {

    localStorage.setItem(TOKEN, token);
//   const data=   localStorage.getItem(TOKEN)
//   console.log(data)

}
export const logout = () => {
    localStorage.removeItem(TOKEN);
 

}

export const isLogin = () => {
    
    if (localStorage.getItem(TOKEN)) {
        return true;
    }
    if (localStorage.getItem(TOKEN)) {
        return true;
    }
    if (localStorage.getItem(TOKEN)) {
        return true;
    }
    if (localStorage.getItem(TOKEN)) {
        return true;
    }
    return false;
}