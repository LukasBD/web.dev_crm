import { ReactNode, createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [logado, setLogado] = useState()
  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      {children}
    </AuthContext.Provider>
  )
}
