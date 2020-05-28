export function login(data) {
    return {
        type:"LOGIN",
        data
    }
}

export function outLogin() {
    return {
        type:"OUTLOGIN"
    }
}