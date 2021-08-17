import axios from "axios"

export const asyncAddNotes = (formData,formReset) => {
    return (dispatch, getState) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData, 
        {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const data = response.data
                if(data){
                    formReset()
                    dispatch(addNote(data))
                }
            })
            .catch(err => alert(err))
    }
}

export const addNote = (data) => {
    return {
        type : "ADD_NOTE",
        payload : data
    }
}

export const asyncGetNotes = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const data = response.data
                dispatch(allNotes(data))
            })
            .catch(err => alert(err))
    }
}

export const allNotes = (data) => {
    return {
        type : 'ALL_NOTES',
        payload : data
    }
}

export const removeNote = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then( response => {
                const data = response.data
                dispatch(deleteNote(data))
            })
            .catch( err => alert(err))
    }
}

export const deleteNote = (data) => {
    return {
        type : 'DELETE_NOTE',
        payload : data
    }
}

export const removeStateNotes = () => {
    return {
        type : 'REMOVE_STATE_NOTES'
    }
}

export const asyncUpdateNote = (formData,_id,toggleEdit) => {
    return (dispatch) => {
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,formData, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((res) => {
            dispatch(update(res.data))
            toggleEdit()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const update = (data) => {
    return {
        type : "UPDATE",
        payload : data
    }
}