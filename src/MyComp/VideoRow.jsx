import Avatar from '@material-ui/core/Avatar'
import { PlayCircleFilled } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './styles/videorow.scss'
import axios from 'axios'

export const VideoRow = (props) => {

    const {channel , channelImage, index, videoId } = props
    const youtubeApi = 'AIzaSyCtx8GndVR_NaHkYYx7pa3bYEwl2JTfnEU'

    const [video, setVideo] = useState(null)

    // console.log(channelId)

    useEffect(() => {
        axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${youtubeApi}`
        )
            .then((res) => { setVideo(res.data.items[0]) })
            .catch((e) => console.log(e))
    }
        , [])

    return (

        <div className='videoRow' key={index}>

            {video &&
                <>
                    <div className="thumbnail">
                        <img
                        src={video.snippet.thumbnails.high.url}
                        alt={channel} />

                        <PlayCircleFilled className='playIcon' />
                    </div>

                    <div className="text">
                        <h3 className='title'>{video.snippet.title}</h3>

                        <div className="channel">
                            <Avatar
                                className='avatar'
                                src={channelImage}
                                alt={video.snippet.channelTitle} />

                            <span >{video.snippet.channelTitle}  </span>

                        </div>

                        <p className='info'>
                            <span className='views'> {video.statistics.viewCount}  Views</span>
                            <span className='views'> {video.statistics.likeCount}  Likes</span>
                            {/* <span className='subs'>{video.statistics.subscribers} Subscriber </span> */}
                            <br />
                            <span className='timeStamp'>{video.snippet.publishedAt} </span>
                            <span className='length'>{video.contentDetails.duration} </span>

                        </p>


                        <p className="disc">
                            {video.snippet.description.slice(0, 200)}

                        </p>

                    </div>
                </>
            }
        </div>




    )
}
// contentDetails: {duration: "PT21M3S", dimension: "2d", definition: "hd", caption: "true", licensedContent: true, …}
// etag: "18N8LoGHIV0nF0wrKDZEJgg2zvo"
// id: "Ks-_Mh1QhMc"
// kind: "youtube#video"

// categoryId: "27"
// channelId: "UCq0EGvLTyy-LLT1oUSO_0FQ"
// channelTitle: "Eddie Woo"
// defaultAudioLanguage: "en"
// description: "Main site: http://www.misterwootube.com \nSecond channel (for teachers): http://www.youtube.com/misterwootube2\nConnect with me on Twitter (http://twitter.com/misterwootube) or Facebook (http://fb.com/misterwootube)"
// liveBroadcastContent: "none"
// localized: {title: "Dividing by zero?", description: "Main site: http://www.misterwootube.com \nSecond ch…ootube) or Facebook (http://fb.com/misterwootube)"}
// publishedAt: "2014-09-22T00:00:16Z"
// tags: (4) ["math", "maths", "mathematics", "Division By Zero"]
// thumbnails: {default: {…}, medium: {…}, high: {…}, standard: {…}, maxres: {…}}
// title: "Dividing by zero?"

// statistics: {viewCount: "19962603", likeCount: "301179", dislikeCount: "5692", favoriteCount: "0", commentCount: "8809"}
