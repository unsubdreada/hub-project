export function Input(props) {
    const {type = 'text', placeholder=''} = props;
    return <input className="" type={type} placeholder={placeholder}></input>;
}