import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Searching from './components/Searching'
const App = () => {
    const [items,setItems]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState(true)

    useEffect(()=>{
        const ItemsFetch = async()=>{
            // const iterval=setInterval(() => {
            //    return query
            // }, 3000);
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            console.log(result.data);
            setItems(result.data)
            setIsLoading( false  )
        }
        ItemsFetch()
    },[query])

   
    return (
        <div className="container">
               <Header/>
                 <Searching  getQuery={(q)=>setQuery(q)}/>
                 <CharacterGrid  isLoading={isLoading}  items={items} />
        </div>
    )
}

export default App
















