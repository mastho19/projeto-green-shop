import { Action } from "./action"

interface TokenState {
    tokens: string
}
export default TokenState;

const initialState = {
    tokens: ''
}
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type){
        case "ADD_TOKEN":{
            return {tokens: action.payload} /* payload = conteúdo do token*/
        }
        default: 
            return state
    }
}
