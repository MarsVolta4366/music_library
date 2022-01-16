import { useState } from "react"
import { useParams } from "react-router"

const AlbumView = () => {

    const {id} = useParams()
    const [albumData, setAlbumData] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album view page</p>
        </div>
    )
}

export default AlbumView