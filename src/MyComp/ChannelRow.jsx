import React from 'react'
import { Avatar } from '@material-ui/core'
import { DeviceUnknown, VerifiedUser } from '@material-ui/icons'
import './styles/channelrow.scss'

export const ChannelRow = (props) => {
    const { channel, channelImage, subs, build, discription, noVid, verified  , channelId , views} = props

    return (
        <div className='channelRow'>

            <Avatar className='logo' src={channelImage} alt={channel} />

            <div className="text">

                <span className = 'channel'> 
                <a href={`https://www.youtube.com/channel/${channelId}`} >{channel}</a> 
                 {verified ? <VerifiedUser /> : <DeviceUnknown />}
                 </span>

                <b>{discription}</b>

                <p> 
                    <span className='views'>{views} views </span> 
                    <span className='subs'>{subs} Subscriber </span> 
                     <span className='noVid'> {noVid}  Total Videos </span>
                    <span className='created'> Created  {build} </span>
                     
                </p>

            </div>


        </div>
    )
}
