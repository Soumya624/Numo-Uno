import React, { useEffect } from 'react'
import { BACKEND_URL } from '../constants/constants'

import axios from 'axios'

export default function GoogleOAuth() {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
       console.log("code is ", code)

       const URL = `${BACKEND_URL}/user/google/`
       const data = { 'code': code }
       axios
        .post(URL, data)
        .then(res => {
            console.log("res.data is ",res.data)
            if(res.data.message === "success"){
                localStorage.setItem('tttoken', res.data.token)
                // console.log("name is ", res.data.name)
                // console.log("email is ", res.data.email)
                // window.location.pathname = "verificationsuccess"
                console.log("FRONTEND TEAM REDIRECT TO DASHBOARD")
            }
            
        })
        .catch(err => {
            console.log("err is ",err)
            alert("Server Error! Please try again")
        })
    })
    return(
        <div>
            <h1>Loading</h1>
        </div>
    )
}