import './index.css'
import picture from './me.jpg'

export default function ProfilePictureCard() {
    return (
        <>
        <div className="picturecard">
            <img src={picture} />
        </div>
        </>
    )
}