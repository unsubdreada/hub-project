import {Button} from '../Button'
import { Input } from '../Input'
import { Header } from '@views/Header'

function App() {
  return (
    <>
      <Header text="Авторизация"/>
      <Input placeholder="Логин"/>
      <Input placeholder="Почта"/>
      <Input />
      <Button text="Войти"/>
    </>
  )
}

export default App
