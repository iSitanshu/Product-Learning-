    import React, { useState } from 'react'
    import { useEffect } from 'react'

    function Github() {
        const [data, setData] = useState([])
        useEffect(() => {
            fetch(`https://api.github.com/users/hiteshchoudhary`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
                console.log(data)
        }, [])
        return (
            <div className='bg-gray-600 flex justify-center text-center text-xl'>Github Followers: {data.followers}</div>
        )
    }

    export default Github