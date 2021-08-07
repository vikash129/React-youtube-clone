import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Search, Notifications, ArrowDropDown, Settings, VideoCall, MenuOpenSharp, AppsSharp } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import './styles/header.scss'
import IconButton from '@material-ui/core/IconButton/IconButton'

export default function Header({handleMenu}) {

  // const [isScrolled, setIsScrolled] = useState(false)
  const [search, setSearch] = useState('')
 

  // window.onscroll = () => {

  //   setIsScrolled(window.pageYOffset !== 0 ? true : false)

  // }

 

  return (
    <header className='navbar'>

      <div className='header_left'>

        <IconButton onClick={handleMenu} >
          <MenuOpenSharp />

        </IconButton>


        <img src='logo.png' alt='l' className='header_logo' />

      </div>


      <div className='search'>

        <input type='text' className='search_input' placeholder='type to search...'
          onChange={e => setSearch(e.target.value)} value={search} />

        <IconButton component={Link} to={{
          pathname: '/search',
          param: search
        }} >

          <Search className='icon' />
        </IconButton>


      </div>

      <div className="icons">

        <Notifications className='icon' />
        <Settings className='icon' />
        <VideoCall />
        <AppsSharp />
        <Avatar src='logo.png' alt='d' className='avatar' />
        <ArrowDropDown className='icon' />

      </div>


    </header>
  )
}
