import styles from './Bio.module.scss';
import { useState } from 'react';

const Bio = () => {
  const [user, setUser] = useState({
    name: "Rendy Artha Prawira",
    description: "Javascript enthusiast!",
    jobs: "Full Stack Javascript"
  })
  return (
    <div className={styles.wrapperBio}>
      <div className={styles.avatarUser}>
        <span>
          {user.name.charAt(0)}
        </span>
      </div>
      <div className={styles.infoUser}>
        <span className={styles.userName}>
          {user.name}
        </span>
        <span className={styles.userDescription}>
          {user.description}
        </span>
        <span className={styles.userJobs}>
          {user.jobs}
        </span>
      </div>
    </div>
  )
}

export default Bio
