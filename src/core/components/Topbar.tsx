import styles from 'src/styles/topbar.module.css';

export function TopBar() {
    const signOut = () => {
        // TODO: Sign out API call
    }

    return (
        <div className={styles.topbar}>
            <span className={styles.title}>Rate My Classmate</span>
            <span className={styles.signout} onClick={signOut}>Sign Out</span>
        </div>
    )
}