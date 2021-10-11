import styles from "../../Stylesheet/Header/header.module.css"

const Header = () =>{
    return(
        <>
        <div className={styles.Header}>
            <div className={styles["header-wrapper"]}>
            <h1>
                Pagination Demo
            </h1>
            </div>
        </div>
        </>
    )
}

export default Header;