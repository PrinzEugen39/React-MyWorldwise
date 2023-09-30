import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
                <p className={styles.copyright}> @ copyright {new Date().getFullYear()} by PrinzEugen39</p>
        </footer>
    )
}

export default Footer
