import './index.css'
import picture from './profilepicture.jpg'

export default function ProfilePictureContainer() {
    return (
        <>
        <div className="picturecontainer">
            <img src={picture} />
        </div>
        </>
    )
}