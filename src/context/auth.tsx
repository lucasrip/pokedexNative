import axios from "axios";
import React,{createContext , useState} from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}:any)
{
   const [favoritesPokemons,setFavoritesPokemons] = useState<any>([]);
  
  return(
    <AuthContext.Provider value={{favoritesPokemons,setFavoritesPokemons}} >
      {children}
    </AuthContext.Provider>
  )
}