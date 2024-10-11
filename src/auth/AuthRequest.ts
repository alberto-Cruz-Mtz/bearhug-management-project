export type authRequest = {
    endpoint: string
    method: 'LOG-IN' | 'SIGN-UP'
}

export type AuthCredentials = {
    username: string;
    password: string;
}