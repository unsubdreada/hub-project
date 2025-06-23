import styles from './LeftBar.module.scss'

export function LeftBar(props) {
  const { prop = '' } = props

  return (
    <div className={styles.dark}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quasi
        eveniet eligendi autem neque mollitia rem possimus, omnis vitae
        consectetur molestias quam, sequi asperiores velit unde ipsa perferendis
        iusto! Libero aperiam eum sint error quis accusamus, magni corporis odit
        placeat laboriosam illum deserunt alias laudantium dolorum enim soluta
        excepturi. Iste!
      </p>
    </div>
  )
}
