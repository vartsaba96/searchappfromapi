import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getPersons, findPersonsByName,findPersonsByAge } from './actions/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.onHandleFind = this.onHandleFind.bind(this);
  };
  componentDidMount() {
    this.props.getData("https://venbest-test.herokuapp.com/")
  }


  onHandleFind(e) {
    this.props.onFind({ value: e.target.value, name: e.target.name });
  }


  render() {

    return (

      <div className="App">
        <div>
          <form>
            <input name="nameValue" type="text" onChange={this.onHandleFind} />
            <input name="ageValue" type="number" onChange={this.onHandleFind} />

          </form>
        </div>
      { this.props.filterPersons ?
        <ul>{this.props.filterPersons.map((person, index) => {
          return <li key={index}>
            <div>{person.name} {person.lastname}</div>
            <div>Возраст: {person.age}</div>
            <div>Пол: {person.sex}</div>
          </li>
        })}

        </ul>:
        <div>Loading....</div>
      }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons.persons,
    nameValue: state.persons.nameValue,
    filterPersons: [...state.persons.filterPersonsByName, ...state.persons.filterPersonsByAge ]
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: url => dispatch(getPersons(url)),

    onFind: (formElement) => {
      if (formElement.name === 'nameValue'){
      dispatch(findPersonsByName(formElement))
      } else if (formElement.name === 'ageValue'){
        dispatch(findPersonsByAge(formElement))
      }
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


