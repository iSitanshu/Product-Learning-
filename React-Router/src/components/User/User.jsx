import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userID} = useParams()
  return (
    <div className='bg-gray-600 flex justify-center text-center text-xl'>User: {userID}</div>
  )
}

export default User