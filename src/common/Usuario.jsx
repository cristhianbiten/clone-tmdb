import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        senha,
        setSenha
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}
