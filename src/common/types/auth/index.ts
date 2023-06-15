export interface IPropsLogin {
    setPassword: (value: string) => void 
    setEmail: (value: string) => void 
}

export interface IPropsRegister {
    setEmail: (value: string) => void 
    setPassword: (value: string) => void 
    setRepiatPassword: (value: string) => void 
    setFirstName: (value: string) => void 
    setLogin: (value: string) => void 
}