import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar w-64 bg-orange-500 flex flex-col">
        <div className="sidebar__header">
            <h3>CA Management</h3>
        </div>
        <div className="sidebar__links">
            <a href="/">Dashboard</a>
            <a href="/list">View CA</a>
            <a href="/profile">Profile</a>
        </div>
    </div>

  )
}

export default Sidebar