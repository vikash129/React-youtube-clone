import React from 'react'
import './styles/sidebar.scss'

import { HomeOutlined, WhatshotOutlined, Subscriptions, CameraFrontOutlined, FlagOutlined } from '@material-ui/icons'
import { VideoLibrary, HistoryOutlined, OndemandVideoRounded, WatchLaterRounded, ThumbDownAltSharp, ExpandMoreOutlined } from '@material-ui/icons'

import { SideBarRow } from './SideBarRow'

const SideBar = ({menu}) => {
    return (
        <div className='sidebar' style ={{display : menu ?  'block' : 'none' }}>

            <SideBarRow selected={true} Icon={HomeOutlined} title='home' />
            <SideBarRow Icon={WhatshotOutlined} title='trending' />
            <SideBarRow Icon={CameraFrontOutlined} title='shorts' />
            <SideBarRow Icon={Subscriptions} title='subscription' />
            <SideBarRow Icon={FlagOutlined} title='World' />

            <hr/>

            <SideBarRow Icon={VideoLibrary} title='Library' />
            <SideBarRow Icon={HistoryOutlined} title='History' />
            <SideBarRow Icon={OndemandVideoRounded} title='Paid' />
            <SideBarRow Icon={WatchLaterRounded} title='Watch Later' />
            <SideBarRow Icon={ThumbDownAltSharp} title='Liked Videos' />
            <SideBarRow Icon={ExpandMoreOutlined} title='Explore More' />

            <hr />
        </div>
    )
}

export default SideBar