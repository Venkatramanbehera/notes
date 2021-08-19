import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem'

import SearchIcon from '@material-ui/icons/Search'
import '../css/NotesContainer.css'

const NotesContainer = (props) => {

    const [ search, setSearch ] = useState('')

    const notes = useSelector((state) => {
        return state.notes 
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filterData = notes.filter((ele) => {
        return ele.title.toLowerCase().includes(search)
    })

    return (
        <>
            <div className="search">
                <div className="search__icon">
                    <SearchIcon/>
                </div>
                <div className="search__bar">
                    <input type="text" value={ search } onChange={ handleSearch } />
                </div>
            </div>
            {
                <div className="notes__container">
                    {
                        filterData.map((filterItem) => {
                            return <NoteItem key={filterItem._id} {...filterItem}/>
                        })
                    }
                </div>
            }
            
        </>
    )
}

export default NotesContainer
