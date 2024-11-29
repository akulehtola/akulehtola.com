import './index.css'

export default function Column({children}:{children: React.ReactNode}) {
    return (
        <div className="column">
            {children}
        </div>
    )
}