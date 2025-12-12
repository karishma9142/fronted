
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { TodosAtomFamily } from './atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  )
}
function Todo({ id }) {
  const currentTodo = useRecoilValue(TodosAtomFamily(id));
  return (
    <>
      {currentTodo.title}
      <br />
      {currentTodo.description}
      <br />
    </>
  )
}
export default App
