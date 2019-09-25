import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {
  getPersons,
  findPersonsByName,
  findPersonsByAge,
  findPersonsBySex
} from './actions/actions';
import Search from './component/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.onHandleFindName = this.onHandleFindName.bind(this);
    this.onHandleFindAge = this.onHandleFindAge.bind(this);
    this.onHandleFindSex = this.onHandleFindSex.bind(this);
  };

  componentDidMount() {
    this.props.getData("https://venbest-test.herokuapp.com/")
  }

  onHandleFindName(e) {
    this.props.onFindName(e.target.value);
  }

  onHandleFindAge(e) {
    this.props.onFindAge(e.target.value);
  }

  onHandleFindSex(e) {
    this.props.onFindSex(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <Search onHandleFindName={this.onHandleFindName} onHandleFindAge={this.onHandleFindAge}
          selectedOption={this.props.selectedOption} onHandleFindSex={this.onHandleFindSex} />
        {this.props.listPersons ?
          <ul>{this.props.listPersons.map((person, index) => {
            return <li key={index}>
              <div>{person.name} {person.lastname}</div>
              <div>Возраст: {person.age}</div>
              <div>Пол: {person.sex}</div>
              <hr></hr>
            </li>
          })}
          </ul> :
          <div>Loading....</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const commontNameAndAge = commonFromTwoArrays(state.persons.filterPersonsByName, state.persons.filterPersonsByAge);
  return {
    listPersons: commonFromTwoArrays(commontNameAndAge, state.persons.filterPersonsBySex),
    selectedOption: state.persons.selectedOption,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: url => dispatch(getPersons(url)),
    onFindName: formElement => dispatch(findPersonsByName(formElement)),
    onFindAge: formElement => dispatch(findPersonsByAge(formElement)),
    onFindSex: formElement => dispatch(findPersonsBySex(formElement)),
  }
}

function commonFromTwoArrays(firstArr, secondArr) {
  return firstArr.filter(item =>
    secondArr.some(el => item.name === el.name) &&
    secondArr.some(el => item.age === el.age) &&
    secondArr.some(el => item.sex === el.sex)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


