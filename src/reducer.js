//[] ---> store
//reducer is a function that takes the state and action as paramaters
// you can use SWITCH Case code or IF Else statment
let lastId = 0;

//SWITCH CASE
export default function reducer (state = [], action) {
    switch (action.type) {
        case "bugAdded":
            return [
                    ...state,
                    {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                    }
                ]
        case "bugResolved":
            return state.map((bug)=> 
                        bug.id !== action.payload.id ? bug : {...bug, resolved: true })
        case "bugRemoved":
            return state.filter(bug=> bug.id !==  action.payload.id)
    
        default:
            return state;
    }

}


//IF ELSE 
// function reducer (state = [], action) {
//     if(action.type === "bugAdded"){
//         return [
//             ...state,
//             {
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//             }
//         ]
//     }
//     else if(action.type === "bugRemoved"){
//         return state.filter(bug=> bug.id !==  action.payload.id)
//     }
//     return state;

// }