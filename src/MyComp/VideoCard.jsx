import React from 'react'
import './styles/videocard.scss'

import { Avatar } from '@material-ui/core'
import { PlayCircleFilled } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { Link } from 'react-router-dom'

export const VideoCard = (props) => {

    const { title, thumbnail, channel, channelImage, views, timeStamp, length, videoId, channelId } = props

    return (
        <div className='videoCard'>


            <div className="thumbnail">

                <a href={`https://www.youtube.com/watch?v=${videoId}`} className='playIcon'>
                    <PlayCircleFilled />
                </a>

                <img
                    src={thumbnail}
                    alt={channel} />

            </div>

            <div className="text">

                <div className="info">
                    <Avatar
                        className='avatar'
                        src={channelImage}
                        alt={channel} />

                    <a href={`https://www.youtube.com/channel/${channelId}`}> {channel}</a>
                </div>

                <h4 className='title'> {title}</h4>


                <div className="disc">
                    <span> {length}</span>  <span>{views}</span><span>   {timeStamp}</span>
                </div>
            </div>
        </div>
    )
}
