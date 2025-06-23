import styles from './Button.module.scss'

export function Button(props) {
  const { text = '' } = props

  return <button className={styles.dark}>{text}</button>
}
