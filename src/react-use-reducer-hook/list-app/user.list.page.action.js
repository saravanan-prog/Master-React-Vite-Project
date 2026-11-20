export const reducerFn = (state,action) => {
    switch(action.type){
        case "add-user":
            console.log("add user processing",state)
            const record = {
                id:4,
                name:"kumar",
                course:"AWS"
            }

            return [...state,record]
        
        case "update-user":
            return state.map(
                (value,index) => {
                    if(index == action.userid){
                        value.id = 5
                        value.name = "Ratha"
                        value.course = "Azure"
                    }
                    return value
                }
            )
        
        case "remove-user":
            return state.filter(
                (value,index) => index != action.userid
            )
        default:
            state = state
    }
}