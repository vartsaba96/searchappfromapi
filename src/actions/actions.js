const personsDataSuccess = (persons) =>{
    return {
        type: "PERSONS_DATA_SUCCESS",
        payload: persons
    }
}

export const getPersons = (url) =>{
    return (dispatch)=> {
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw new Error( response.statusText)
                }
                return response;
            })
            .then(response=> response.json())
            .then(persons => dispatch(personsDataSuccess(persons)))
    }
}

export const findPersonsByName = (formElement) => {
    return {
        type: "FIND_BY_NAME",
        payload: formElement
            }
}

export const findPersonsByAge = (formElement) => {
    return {
        type: "FIND_BY_AGE",
        payload: formElement
            }
}

