import styles from 'styles/PhotoBook/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Photo Book
            </div>
            <div className={styles.action}>
                <input />
            </div>
        </div>
    )
}

export default Header