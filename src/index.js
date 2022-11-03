import store from './store';

const unsubscribe = store.subscribe(()=> console.log("STORE CHANGED", store.getState()))
store.dispatch({
    type: "bugAdded",
    payload:{
        description:"BUG1"
    }
})
unsubscribe();

store.dispatch({
    type: "bugRemoved",
    payload:{
        id:1
    }
})

store.dispatch({
    type: "bugResolved",
    payload:{
        id:1
    }
})
console.log(store);
console.log(store.getState())
