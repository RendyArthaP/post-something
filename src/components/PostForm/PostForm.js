import styles from '../../styles/Home.module.scss';

const PostForm = () => {
  return (
    <>
      <form className={styles.wrapperForm}>
        <input className={styles.textBox}/>
        <button type="button">Submit</button>
      </form>
    </>
  )
}

export default PostForm