import styles from './Content.module.scss'

export function Content(props) {
  const { prop = '' } = props

  return (
    <div className={styles.default}>
      <h1>Lorem, ipsum dolor!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa
        fuga sunt libero hic ea itaque quod dignissimos corporis deleniti
        aliquam vel sequi laudantium accusantium ut saepe, nostrum dolores!
        Obcaecati soluta qui libero recusandae voluptatum molestias sit quo
        dolores veritatis, sunt sed in, modi ducimus nihil voluptatem quibusdam
        nostrum. Unde consequuntur laborum molestias blanditiis sequi odit
        tenetur, maxime itaque placeat.
      </p>
    </div>
  )
}
