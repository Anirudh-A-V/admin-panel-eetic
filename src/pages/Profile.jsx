import React from 'react'
import { Header } from '../components'
import AppWrap from "../containers/Layout"

const Profile = () => {
  return (
    <div className="flex flex-col m-5">
        <Header category={'User'} title={'Profile'} />
    </div>
  )
}

export default Profile