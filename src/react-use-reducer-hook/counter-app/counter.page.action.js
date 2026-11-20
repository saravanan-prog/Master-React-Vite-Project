export const reducerFunction = (state,action) => {
    console.log("state===>",state,"action===>",action)
    switch(action.type){
        case "add":
            state = state + 1
            break;
        case "sub":
            state = state - 1
        case "mul":
            state = state * 2
            break;
        case "div":
            state = state / 2
            break;
        case "mod":
            state = state / 2
            break;
        default:
            state = 0
            
    }

    return state 
}