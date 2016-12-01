import { creatStore } from 'redux'
import reducer from './reducer'

export default function configureStore (initialState = { todos: [] }) {
  return creatStore (reducer, initialStore)
}
