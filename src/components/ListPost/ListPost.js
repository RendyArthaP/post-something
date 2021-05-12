import styles from '../../styles/Home.module.scss';

const ListPost = () => {
  return (
    <div className={styles.wrapperListPost}>
      <div className={styles.listPost}>
        <h2>Test building Next JS</h2>
        <p>3/12/2021</p>
      </div>
      <div className={styles.listPost}>
        <h2>Test building Next JS</h2>
        <p>3/12/2021</p>
      </div>
      <div className={styles.listPost}>
        <h2>Test building Next JS</h2>
        <p>3/12/2021</p>
      </div>
    </div>
  )
}

export default ListPost
