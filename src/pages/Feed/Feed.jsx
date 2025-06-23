import styles from './Feed.module.scss'
import { LeftBar } from '@views/LeftBar'
import { Content } from '@views/Content'
import { RightBar } from '@views/RightBar'

export function Feed(props) {
  return (
    <div className={styles.wrapper}>
      <LeftBar />
      <Content />
      <RightBar />
    </div>
  )
}
