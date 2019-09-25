import React from 'react';


const Search = (props) => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="nameValue">Поиск за именем или фамилией:
            <input name="nameValue" type="text" onChange={props.onHandleFindName} />
                    </label>
                    <label htmlFor="ageValue">Поиск за возрастом:
            <input name="ageValue" type="number" onChange={props.onHandleFindAge} />
                    </label>
                </div>
                <span className="radio">
                    <label>Поиск за полом:
                <input type="radio" value="m"
                            checked={props.selectedOption === 'm'}
                            onChange={props.onHandleFindSex} />
                        Мужской
              </label>
                </span>
                <span className="radio">
                    <label>
                        <input type="radio" value="f"
                            checked={props.selectedOption === 'f'}
                            onChange={props.onHandleFindSex} />
                        Женский
              </label>
                </span>
            </form>
        </div>
    )
}

export default Search;