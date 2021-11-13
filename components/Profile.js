
import React,{useState,useEffect, Fragment} from 'react'
import {profileUserData} from '../lib/auth'
// import axios from 'axios'
// axios.defaults.withCredentials =true

const ProfileData = () => {
    const [userData,setUserData]= useState(null)

    useEffect(() => {
        profileUserData().then(user=>setUserData(user))
    }, [])

    return(
        <div>
            <h1>Profile</h1>
            {userData?
            <Fragment>
            <div>{userData&&userData.user.id}</div>
            <div>{userData&&userData.user.email}</div>
            <div>{userData&&userData.user.name}</div>
            </Fragment>
            :<div>
                <p>No User Data</p>
                <a href={'/login'}>go to LoginPage</a></div>}
        </div>
    )
    

}
export default ProfileData