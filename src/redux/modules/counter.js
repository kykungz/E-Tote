// Actions
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const SET_CART = 'SET_CART'

// Initial State
const initialState = {
  list: []
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ITEM:
      let addedList = [...state.list]
      const dup = addedList.find((item) => item.index == action.payload.index)
      if (dup) {
        dup.amount += action.payload.amount
      } else {
        addedList = [...state.list, action.payload]
      }
      localStorage.list = JSON.stringify(addedList)
      return {
        list: addedList
      }
    case REMOVE_ITEM:
      const removedList = state.list.filter((item, i) => i !== action.index)
      localStorage.list = JSON.stringify(removedList)
      return {
        list: removedList
      }
    case SET_CART:
      localStorage.list = JSON.stringify(action.payload)
      return {
        list: action.payload
      }
    default:
      return state
  }
}

// Action Creators
export const setCart = (payload) => ({
  type: SET_CART,
  payload
})

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload
})

export const removeItem = (i) => ({
  type: REMOVE_ITEM,
  index: i
})
