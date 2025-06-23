import styles from './NewsCard.module.scss'
import { useRef, useState, useEffect } from 'react'

export function NewsCard(props) {
  const { title = '', text = '', creatorInfo, commentatorInfo } = props

  const cardRef = useRef(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.scrollHeight
      if (rect > 500) {
        console.log(rect)
        setIsOverflowing(true)
      }
    } else {
      console.log('no ref')
    }
  }, [])

  return (
    <div className={`${styles.wrapper} ${styles.dark} `}>
      <div className={styles.creator}>
        <div className={styles.avatar__wrapper}>
          <img
            className={styles.avatar}
            src={creatorInfo.avatar}
            alt={creatorInfo.nickname}
          />
          <img
            className={styles.theme}
            src={creatorInfo.theme}
            alt={creatorInfo.themeName}
          />
        </div>
        <div className={styles.info__wrapper}>
          <h4>{creatorInfo.nickname}</h4>
          <p>{creatorInfo.postedTime}</p>
        </div>
      </div>
      <hr />
      <div className={styles.news} ref={cardRef} data-opened={isOpened}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
      {isOverflowing && !isOpened && (
        <div className={styles.read__more} onClick={() => setIsOpened(true)}>
          <p>Читать больше</p>
        </div>
      )}
      <hr />
      <div className={styles.popular__comment}>
        <div className={styles.commentator}>
          <img
            className={styles.avatar}
            src={commentatorInfo.avatar}
            alt={commentatorInfo.nickname}
          />
          <div className={styles.info__wrapper}>
            <p className={styles.nickname}>{commentatorInfo.nickname}</p>
            <p className={styles.posted__time}>{commentatorInfo.postedTime}</p>
          </div>
          <p className={styles.text}>{commentatorInfo.text}</p>
        </div>
      </div>
    </div>
  )
}
