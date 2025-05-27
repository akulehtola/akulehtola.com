import styles from './component.module.css'

export default function NameCard() {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.text}>
                <h2 className={styles.name}>Aku Lehtola</h2>
                <h4 className={styles.content}>self-taught software developer from Southwest Finland</h4>
            </div>
        </div>
        </>
    )
}