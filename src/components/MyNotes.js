import React from 'react'
import { useSelector } from 'react-redux'

import '../css/MyNote.css'
import AddNote from './AddNote'
import NotesContainer from './NotesContainer'

const MyNotes = (props) => {

    const notes = useSelector((state) => {
        return state.notes
    })

    return (
        <div className="notes">
            <div className="left">
                {
                    notes.length ? <NotesContainer/> : <h1>No notes found add your first node</h1>
                }
            </div>
            <div className="right">
                <h1>Add Note</h1>
                <AddNote/>
            </div>
        </div>
    )
}

export default MyNotes
