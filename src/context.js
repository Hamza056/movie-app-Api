import React, { useEffect,useState } from "react";
import { useContext } from "react";
const API_URL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const [iserror,setisError]=useState({show:"false" ,message:''});
    const [query,setQuery]=useState('titanic');
    const getMovies=async(url)=>{
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if(data.Response === "True"){
          setMovies(data.Search);
          setIsLoading(false);
          setisError({show:"false" ,message:''});
        }else{
            setisError({show: true , message: data.Error});
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
      let timeout =setTimeout(()=>{
        
        getMovies(`${API_URL}&s=${query}`);
      },500);
      return()=>{
        clearTimeout(timeout);
      }
    },[query]); 
    return <AppContext.Provider value={{isLoading,movies,iserror,query,setQuery}}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};