import styles from "./component.module.css"

export default function ProjectsCard() {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <h2 className={styles.title}>Projects</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.project}>
                    <div className={styles.i}>
                        <div className={styles.projectTitle}>
                            <img alt="Logo" style={{margin: "2px"}} width="48" height="48" src="https://lattahattu.fi/lat.png"/><h3 style={{margin: "2px"}}>lattahattu.fi</h3>
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.description}>
                            <p className={styles.text}>A gallery website for Finnish railway enthusiasts</p>
                            <button onClick={() => window.open("https://lattahattu.fi")} className={styles.button}>Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}