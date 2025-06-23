import styles from './Header.module.scss'
import { Logotype } from '@components/Logotype'

export function Header(props) {
  const { text = '' } = props
  return (
    <div className={styles.header}>
      <Logotype />
    </div>
  )
}
