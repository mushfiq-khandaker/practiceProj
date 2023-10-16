
import styles from './style.module.css'


const DocsIDPage = ({params}) => {
    return(
        <div className={styles.title}>Docs ID {params.id}</div>
    )
}

export default DocsIDPage