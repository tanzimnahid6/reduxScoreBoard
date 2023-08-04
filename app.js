const increment = document.querySelector(".lws-increment")
const decrement = document.querySelector(".lws-decrement")
const total = document.querySelector(".totalScore")
console.log(total);

const initialState = {
  value: 120,
}

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: parseInt(state.value) + parseInt(action.payload),
    }
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: parseInt(state.value) - parseInt(action.payload),
    }
  } else {
    return state
  }
}

//action creator ===================
const incrementCreator = () => {
  let incrementValue = parseInt(increment.value)
  return {
    type: "increment",
    payload: incrementValue,
  }
}
const decrementCreator = () => {
  let decrementValue = parseInt(decrement.value)
  return {
    type: "decrement",
    payload: decrementValue,
  }
}

//create redux store ==============================
const store = Redux.createStore(counterReducer)
//subscribe store==================================
const render = () => {
  const state = store.getState()
  console.log(state)
  total.innerText = state.value
}
store.subscribe(render)
//render the state in ui==========================

increment.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    if(increment.value == '' ){
        alert('please Enter a number value')
        return
    }
    store.dispatch(incrementCreator())
    increment.value = ""
  }
})
decrement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    if(decrement.value == ''){
        alert('please Enter a number value')
        return
    }
    store.dispatch(decrementCreator())
    decrement.value = ""
  }
})


//New match===================================================
