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
        <h1>
          {user.name}
        </h1>
        <h2>
          {user.description}
        </h2>
        <span>
          {user.jobs}
        </span>
      </div>
    </div>
  )
}

export default Bio
