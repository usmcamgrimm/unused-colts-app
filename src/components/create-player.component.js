import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerForm from './PlayerForm'

const CreatePlayer = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', position: '', number: '' })
  // onSubmit handler
  const onSubmit = playerObject => {
    axios.post(
'http://localhost:4000/players/create-player', 
    playerObject)
      .then(res => {
        if (res.status === 200)
          alert('Player successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }

  return(
    <PlayerForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Player
    </PlayerForm>
  )
}

export default CreatePlayer