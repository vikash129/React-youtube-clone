import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles/recommend.scss';
import { VideoCard } from './VideoCard';


const Recommend = ({ youtubeApi }) => {

    const [videos, setVideos] = useState([])
    const [pageInfo, setPageInfo] = useState([])

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${youtubeApi}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN`)
            .then((res) => { setVideos(res.data.items); setPageInfo(res.data.pageInfo) })
            .catch((e) => console.log(e))

    }
        , [])

    return (
        <div className='recommend'>
            <h2>Recommend {pageInfo.totalResults} videos </h2>
            <h3> {pageInfo.resultsPerPage} per page</h3>
            
            <div className="videoList">

                {videos.map((video, index) => {
                    return (<div key={index}>
                        <VideoCard
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                            channelImage='channel image.png'
                            thumbnail={video.snippet.thumbnails.high.url}
                            views={video.statistics.viewCount}
                            timeStamp={video.snippet.publishedAt}
                            length={video.contentDetails.duration}
                            videoId={video.id}
                            channelId={video.snippet.channelId}
                        />
                    </div>)
                })}

                {/* https://www.youtube.com/channel/UCtzhq8TIfFB9vRAHVqLL9PA */}


                {/* statistics:
commentCount: "70922"
dislikeCount: "24696"
favoriteCount: "0"
likeCount: "526027"
viewCount: "28068094" */}

                {/* contentDetails:
caption: "false"
contentRating: {}
definition: "hd"
dimension: "2d"
duration: "PT3M30S"
licensedContent: true */}

                {/* snippet:
categoryId: "10"
channelId: "UCtzhq8TIfFB9vRAHVqLL9PA"
channelTitle: "Dhurata Dora"
description: "Produced: Jugglerz, Panda Music \nLyrics: Dhurata Dora, Noizy\nBeat: Jugglerz\nMix: Fux Cartel\nMaster: Master Plus\n\nVideo by: Entermedia\n\nStyling: Monda Kul, Dodona Avdiu\nMake Up & Hair: Arbër Bytyqi & Kaci \n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nDHURATA on Instagram: https://instagram.com/DhurataDora\nNOIZY on Instagram: https://www.instagram.com/noizy\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n℗ & © 2020 Sony Music & Dhurata Dora. All Rights Reserved."
liveBroadcastContent: "none"
localized: {title: "Dhurata Dora ft. Noizy - Mi Amor", description: "Produced: Jugglerz, Panda Music \nLyrics: Dhurata D…0 Sony Music & Dhurata Dora. All Rights Reserved."}
publishedAt: "2021-07-22T22:00:11Z"
thumbnails: {default: {…}, medium: {…}, high: {…}, standard: {…}, maxres: {…}} */}

                {/* 
etag: "HVndesSS_i7BfyetV9OOiyfSb74"
id: "RHuC7YakdSs" 
etag: "HVndesSS_i7BfyetV9OOiyfSb74"
*/}

            </div>
        </div>
    )
}
export default Recommend