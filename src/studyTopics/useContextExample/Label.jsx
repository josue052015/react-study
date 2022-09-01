import React, { useContext } from 'react'
import UserContext from './UserContext'

const Label = () => {

    const {name} = useContext(UserContext)

  return (
    <h4>{name}</h4>
  )
}

export default Label