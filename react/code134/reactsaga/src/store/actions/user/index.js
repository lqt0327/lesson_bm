export function login(data){
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

export function uploadHead(data) {
    return {
        type:"UPLOAD_HEAD",
        data
    }
}