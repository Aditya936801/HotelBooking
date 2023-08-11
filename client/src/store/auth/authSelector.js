
export const getUserData = (state) => {
    console.log(state)
    const userData = state?.auth?.user || {};
    return userData;
}
export const getToken = (state) => {
    
    const token = state?.auth?.token || "";
    return token;
}

