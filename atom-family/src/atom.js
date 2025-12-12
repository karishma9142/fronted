import { atomFamily } from "recoil";
import {TODOS} from './todos'

export const TodosAtomFamily = atomFamily({
    key:"TodosAtomFamily",
    default : id => {
        return TODOS.find(x => x.id===id)
    },
});