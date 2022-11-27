import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true)

    // if screen width is less than 768px, sidebar will be hidden
    useEffect(() => {
        if (window.innerWidth < 768) {
            setSidebar(false)
        } else {
            setSidebar(true)
        }
    }, [])


    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className='flex'>
            <div className={`sidebar w-72 bg-orange-600 flex flex-col h-screen ${sidebar ? "" : "max-lg:hidden"}`}>
                <div className="sidebar__header text-2xl p-2 text-slate-100 font-bold justify-center items-center">
                    <h1>EETI</h1>
                    <h3>CA Management</h3>
                </div>
                <div className="sidebar__links flex flex-col mt-6">
                    <a href="/" className='p-3 text-xl text-slate-100 font-bold hover:bg-orange-400'>Dashboard</a>
                    <a href="/list" className='p-3 text-xl text-slate-100 font-bold hover:bg-orange-400'>View CA</a>
                    <a href="/profile" className='p-3 text-xl text-slate-100 font-bold hover:bg-orange-400'>Profile</a>
                </div>
            </div>
            <div className="m-1 p-2 text-2xl cursor-pointer rounded-3xl hover:shadow-orange-300 hover:shadow-sm h-10">
                <GiHamburgerMenu onClick={showSidebar}  />
            </div>
        </div>
    )
}

export default Sidebar