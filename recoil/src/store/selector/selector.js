import { atom , selector } from 'recoil';
import { CounterAtom } from '../atoms/counter';

export const evenSelector = selector({
    key : "evenSelector" ,
    get : function({get}){
        const CurrenCount = get(CounterAtom);
        return CurrenCount%2==0;
    }
})