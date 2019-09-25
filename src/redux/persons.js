const initialState = {
    initialPersons: [],
    filterPersonsByName: [],
    filterPersonsByAge: [],
    filterPersonsBySex: [],
    nameValue: null,
    ageValue: null,
    sexValue: null,
    selectedOption: null,
};

let persons = (state = initialState, action) =>{
    switch (action.type){
        case "PERSONS_DATA_SUCCESS":
            return {...state,
                filterPersonsByAge: action.payload,
                filterPersonsByName: action.payload,
                filterPersonsBySex: action.payload,
                initialPersons: action.payload
            };
        case "FIND_BY_AGE":
            return {...state, 
                filterPersonsByAge: state.initialPersons.filter(item =>
                    (item.age === +action.payload) || action.payload === ''
                ),
                ageValue: action.payload,
            };
        case "FIND_BY_NAME":
            return {...state,
                filterPersonsByName: state.initialPersons.filter(item =>
                    item.name.includes(action.payload) || item.lastname.includes(action.payload)
                ),
                nameValue: action.payload,
            };
        case "FIND_BY_SEX":
            return {...state,
                filterPersonsBySex: state.initialPersons.filter(item => item.sex === action.payload),
                selectedOption: action.payload,
            };
        default:
            return state;
    }
}

export default persons;