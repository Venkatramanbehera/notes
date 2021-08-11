import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote } from '../action/noteAction'

const NoteItem = (props) => {
    const dispatch = useDispatch()
    const { title, body, _id } = props

    const handleRemove = () => {
        dispatch(removeNote(_id))
    }
    return (
        <Card>
            <CardContent>
                <Typography>{ title }</Typography>
                <Typography>{ body }</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={ () => handleRemove() }>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default NoteItem
