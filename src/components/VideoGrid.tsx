import { VideoCard } from "./VideoCard";
const VIDEOS = [
    {
      "duration": "20:24",
      "thumbnail": "/porul_ep_3.jpg",
      "title": "Entri Elevate “PORUL” | EP3 | WEBSERIES | KARIKKU",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "1.8M",
      "uploadDate": "1 day ago"
    },
    {
      "duration": "19:04",
      "thumbnail": "/porul_ep_2.jpg",
      "title": "Entri Elevate “PORUL” | EP2 | WEBSERIES | KARIKKU",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "2.7M",
      "uploadDate": "4 days ago"
    },
    {
      "duration": "18:10",
      "thumbnail": "/porul_ep_1.jpg",
      "title": "Entri Elevate “PORUL” | EP1 | WEBSERIES | KARIKKU",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "3.8M",
      "uploadDate": "6 days ago"
    },
    {
      "duration": "1:38",
      "thumbnail": "/porul_teacer.jpg",
      "title": "Entri Elevate “PORUL” | Teaser | WEBSERIES | KARIKKU",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "1.3M",
      "uploadDate": "7 days ago"
    },
    {
      "duration": "33:57",
      "thumbnail": "/mokkaFinal.jpg",
      "title": "MOKKA | Final Part | Karikku | Comedy",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "7.2M",
      "uploadDate": "1 month ago"
    },
    {
      "duration": "26:46",
      "thumbnail": "/mokka.jpg",
      "title": "MOKKA | Part 1 of 2 | Karikku | Comedy",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "8.9M",
      "uploadDate": "2 months ago"
    },
    {
      "duration": "33:36",
      "thumbnail": "/tadash.jpg",
      "title": "Tattadash! | Karikku | Comedy",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "11M",
      "uploadDate": "4 months ago"
    },
    {
      "duration": "39:24",
      "thumbnail": "/onam.jpg",
      "title": "Happy Onam | Karikku | Comedy",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "14M",
      "uploadDate": "8 months ago"
    },
    {
      "duration": "22:30",
      "thumbnail": "/piyush6.jpg",
      "title": "IIC Lakshya “Priyappettavan Piyush” | FINAL EP | Webseries | Karikku",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "3.7M",
      "uploadDate": "9 months ago"
    },
    {
      "duration": "21:13",
      "thumbnail": "/piyush5.jpg",
      "title": "IIC Lakshya “Priyappettavan Piyush” | EP5 | Webseries | Karikku",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "3.5M",
      "uploadDate": "10 months ago"
    },
    {
      "duration": "22:00",
      "thumbnail": "/piyush4.jpg",
      "title": "IIC Lakshya “Priyappettavan Piyush” | EP4 | Webseries | Karikku",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "4.1M",
      "uploadDate": "10 months ago"
    },
    {
      "duration": "23:39",
      "thumbnail": "/piyush3.jpg",
      "title": "Priyappettavan Piyush | EP3 | Webseries | Karikku",
      "channelName": "Karikku",
      "logo": "/kariku_log.jpg",
      "views": "4.1M",
      "uploadDate": "10 months ago"
    }
]

{/* <VideoCard title={"Entri Elevate “PORUL” | EP3 | WEBSERIES | KARIKKU"} channelName={"Karikku"} views={"1.7M"} uploadDate={"1 day ago"} logo={"/kariku_log.jpg"} thumbnail={"/porul_ep_3.jpg"}/> */}
export const VideoGrid = () => {
    return(
    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
            {VIDEOS.map(video => <VideoCard title={video.title} channelName={video.channelName} views={video.views} uploadDate={video.uploadDate} logo={video.logo} thumbnail={video.thumbnail}/>)}
        </div>
    )
}
  