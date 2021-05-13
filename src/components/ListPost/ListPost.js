import styles from '../../styles/Home.module.scss';
import { FaHeart } from 'react-icons/fa';
import { HiShare } from 'react-icons/hi';

const ListPost = () => {
  return (
    <div className={styles.wrapperListPost}>
      <div className={styles.listPost}>
        <h2>Test building Next JS</h2>
        <div className={styles.description}>
          <div>
            <FaHeart />
            <span>20</span>
          </div>
          <div>
            <HiShare />
            <span>1</span>
          </div>
          <p>3/12/2021</p>
        </div>
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
