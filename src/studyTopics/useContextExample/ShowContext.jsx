import React from 'react'
import UserContext from './UserContext'
import Label from './Label'
import UpdateContext from './UpdateContext'

const ShowContext = () => {

    const userMock = {
        name: 'juan',
        lastName: 'perez'
    }

  return (
    <UserContext.Provider value={userMock}>
    <h2>Use context example</h2>
    <Label/>

    <UpdateContext/>
    </UserContext.Provider>
  )
}

export default ShowContext