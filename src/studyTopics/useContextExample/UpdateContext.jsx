import React, { useContext } from 'react'
import UserContext from './UserContext'
import Label from './Label'

const UpdateContext = () => {

    const anotherUserMock = { name: 'pedro', lastName: 'rodriguez' }

    return (
        <>

            <h2>Updated context</h2>

            <UserContext.Provider value={anotherUserMock}>
                <Label />
            </UserContext.Provider>
        </>
    )
}

export default UpdateContext