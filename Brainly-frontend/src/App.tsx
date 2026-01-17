import './App.css'
import { PlusIcon } from './components/icons/Plusicon'
import { Button } from './components/ui/Button'

function App() {


  return (
    <>
    <Button variant='primary' text= "Share" size='sm' startIcon = {<PlusIcon/>} /> 
    <Button variant='secondary' text="Add content" size='md' />
    <Button variant='secondary' text="Delete content" size="lg" />


    </>
  )
}

export default App
