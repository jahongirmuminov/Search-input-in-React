import React from 'react'
import CharacterItem from './CharactersItem'
import Spinner from './Spinner'

const CharacterGrid = ({isLoading, items}) => {
    return   isLoading ? (<Spinner/>) :  <section className="cards ">
            {
                items.map(item=>{
                    return(
                     <CharacterItem   key={item.char_id}    item={item}   />
                    )
                })
            }
    </section>
}

export default CharacterGrid








