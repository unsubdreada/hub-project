import styles from './RightBar.module.scss'

export function RightBar(props) {
  const { prop = '' } = props

  return (
    <div className={styles.dark}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        laborum omnis impedit accusamus illo aut laboriosam libero quas nulla
        aliquid cum, vitae voluptate autem dicta harum non illum, ad voluptas
        numquam quibusdam, excepturi tenetur sequi labore! Numquam quibusdam
        architecto magni distinctio natus. Dolor officiis cumque velit.
        Inventore eaque tenetur perspiciatis.
      </p>
    </div>
  )
}
