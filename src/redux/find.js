let initialState = '';


let find = (state = initialState, action) =>{
   if (action.type ==='FIND') {
    console.log(action);
    return state;
      // return persons.filter( item=> item.name === action.inputValue)
    }
return state;
}

export default find;