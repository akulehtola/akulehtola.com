import styles from "./component.module.css"

export default function ExperienceCard() {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <h2 className={styles.title}>Experience</h2>
            </div>
            <span className={styles.line}></span>
            <div className={styles.content}>
                <h2 className={styles.company}>Confirma Finland</h2>
                <div className={styles.description}>
                    <p className={styles.text}>Software Developer Intern</p>
                    <p className={styles.text}>Turku, Finland &middot; June 2024 (2 weeks)</p>
                    <p className={styles.text}>Worked with: TypeScript, Angular</p>
                </div>
            </div>
        </div>
    )
}