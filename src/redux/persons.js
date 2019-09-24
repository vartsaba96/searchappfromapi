const initialState = {
    persons:[],
    initialPersons: [],
    filterPersonsByName: [],
    filterPersonsByAge: [],
    nameValue: null,
    ageValue: null,
    sexValue: null

};

let persons = (state = initialState, action) =>{
    switch (action.type){
        case "PERSONS_DATA_SUCCESS":
            return {...state, filterPersons: action.payload, initialPersons:action.payload};
            
        case "FIND_BY_AGE":
            return {...state, 
                    filterPersonsByAge: state.initialPersons.filter( item=>item.age === (+action.payload.value)|| (action.payload.value) ===''), 
                    [action.payload.name]:action.payload.value,
                    }
        case "FIND_BY_NAME":
             return {...state,
                filterPersonsByName: state.initialPersons.filter(item=>item.name.includes(action.payload.value) || item.lastname.includes(action.payload.value)),
                [action.payload.name]:action.payload.value,
             }
            
        default:
            return state;
    }
}



export default persons;