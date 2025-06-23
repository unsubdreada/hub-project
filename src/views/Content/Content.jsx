import styles from './Content.module.scss'
import { NewsCard } from '@components/NewsCard/NewsCard'
import newsData from '@data/news.json'

export function Content(props) {
  const { prop = '' } = props

  return (
    <div className={styles.dark + ' ' + styles.wrapper}>
      {newsData.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          text={item.text}
          creatorInfo={item.creatorInfo}
          commentatorInfo={item.commentatorInfo}
        />
      ))}
    </div>
  )
}
