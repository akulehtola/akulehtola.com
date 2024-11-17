import './index.css'
import picture from './profilepicture.jpg'

export default function ProfilePictureCard() {
    return (
        <>
        <div className="picturecard">
            <img src={picture} />
        </div>
        </>
    )
}