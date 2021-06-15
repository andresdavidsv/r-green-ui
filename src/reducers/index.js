const reducer = (state,action)=>{
  switch (action.type) {
    case 'SET_FAVORITE':
      return{
        ...state,
        myList:[
          ...state.myList, action.payLoad
        ]
      }
    case 'LOGIN_REQUEST':
      return{
        ...state,
        user: action.payLoad
      }
    case 'LOGOUT_REQUEST':
      return{
        ...state,
        user: action.payLoad
      }
    default:
      return state;
  }
}

export default reducer;