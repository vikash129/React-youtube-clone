import React from 'react'
import './styles/sidebarrow.scss'
import { Link } from 'react-router-dom'
import {IconButton} from '@material-ui/core'

export const SideBarRow = ({ selected, Icon, title }) => {
    return (

        <div className={`sidebarrow ${selected && 'selected'}`}>

            <IconButton component = {Link} to={title === 'home' ? '/' : title} className = 'link  '> 

                <Icon className="icon"/> 

                <h1 className='title'>{title}</h1>

                
                </IconButton>
 
        </div>
    )
}
