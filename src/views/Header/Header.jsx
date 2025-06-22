import styles from './Header.module.scss';

export function Header(props) {
    const {text = ''} = props;
    return <div className={styles.header}><h1>{text}</h1></div>
}