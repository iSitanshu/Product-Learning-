    import React, { useState } from 'react'
    import { useEffect } from 'react'
    import { useLoaderData } from 'react-router-dom'

    function Github() {
        // const [data, setData] = useState([])
        // useEffect(() => {
        //     fetch(`https://api.github.com/users/hiteshchoudhary`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setData(data)
        //         })
        //         console.log(data)
        // }, [])

        const data = useLoaderData()

        return (
            <>
                <div className='bg-gray-600 flex justify-center text-center text-xl'>Github Followers: {data.followers}
                <img src={data.avatar_url} alt=""/>
                </div>
                <h1 className='bg-gray-700'>{data.login} for accessing the respository : {data.repos_url}</h1>
            </>
        )
    }

    export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch(`https://api.github.com/users/iSitanshu`)
    return response.json()
}