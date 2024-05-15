export const VideoCard = (props: any) => {
    return <div>
        <img className="rounded-xl" src={props.thumbnail} />
        <div className="grid grid-cols-12 pt-3"> {/** Dividing the div into 12 coloumn grids*/}
            <div className="col-span-1">
                <img className={"rounded-full"} src={props.logo} />
            </div>
            <div className="col-span-11 pl-5">
                <div className="text-3xl">
                    {props.title}
                </div>
                <div className="text-xl text-gray-400">
                    {props.channelName}
                </div>
                <div className="text-base text-gray-400">
                    {props.views} views . {props.uploadDate}
                </div>
            </div>
        </div>
    </div>
}