import React, { useEffect, useState } from 'react'
import './styles/searchpage.scss'

import { ChannelRow } from './ChannelRow'
import { VideoRow } from './VideoRow'
import { TuneOutlined } from '@material-ui/icons'
import axios from 'axios'
import {IconButton} from '@material-ui/core'


const SearchPage = (props) => {

    const [videos, setVideos] = useState([])
    const [pageInfo, setPageInfo] = useState({})
    const [channel, setChannel] = useState(null)

    const youtubeApi = 'AIzaSyCtx8GndVR_NaHkYYx7pa3bYEwl2JTfnEU'
    const query = props.history.location.param ? props.history.location.param : 'random'

    const order = 'viewCount'

    /* search videos  */

    const videoSearch = () => {
        setVideos([])

        axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?key=${youtubeApi}&order=${order}&part=snippet&&q=${query}&maxResults=27&regionCode=IN`
        ).then((res) => { setVideos(res.data.items); setPageInfo(res.data.pageInfo) })
            .catch((e) => console.log(e))
    }

    /* search cnannel */
    const channelSearch = () => {
        setChannel(null);

        axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?key=${youtubeApi}&part=snippet%2CcontentDetails%2Cstatistics&&forUsername=${query}`
        ).then((res) => {
            setChannel(res.data.items[0]);
        })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        videoSearch()
        channelSearch(); 
    }
        , [query])


    return (
        <div className='searchPage'>

            <h2>Search Results For : <b style={{ textDecoration: 'underline' }}>{query}</b></h2>

            <IconButton className="filter">
                    <TuneOutlined />  <h4> Filter</h4>
                </IconButton>

            {channel &&
                <>
                    <ChannelRow
                        channel={channel.snippet.title}
                        channelImage={channel.snippet.thumbnails.high.url}
                        subs={channel.statistics.subscriberCount}
                        build={channel.snippet.publishedAt}
                        views={channel.statistics.viewCount}
                        noVid={channel.statistics.videoCount}
                        discription={channel.snippet.description}
                        verified={true}
                        channelId={channel.id} />
                    <hr />
                </>
            }


            {videos ?

                <>

                    <h3>{pageInfo.totalResults} videos Found | {pageInfo.resultsPerPage} per page</h3>

                    {videos.map((video, index) => {
                        return (
                            <VideoRow
                                index={index}
                                videoId={video.id.videoId}
                                channelImage={channel?.snippet?.thumbnails.high.url && 'd'}
                                channelImage='d'
                            />
                        )
                    })}

                </>
                :
                <h3>Searching pls wait</h3>}

        </div>
    )
}

export default SearchPage


/*  contentDetails:
relatedPlaylists: {likes: "", favorites: "FLK8sQmJBp8GCxrOtXWBpyEA", uploads: "UUK8sQmJBp8GCxrOtXWBpyEA"}
[[Prototype]]: Object
etag: "RqXZ14NHoHE0aD5fWBYjXhpIbA8"
id: "UCK8sQmJBp8GCxrOtXWBpyEA"
kind: "youtube#channel"
snippet: {title: "Google", description: "Experience the world of Google on our official You…from all your favorite Google products and teams.", customUrl: "google", publishedAt: "2005-09-18T22:37:10Z", thumbnails: {…}, …}


*/