import React, { Component } from 'react'; //Used for importing react components
import Classes from './App.css';
import Person from '../components/Persons/Person/Person'; //CSS Modules - Very Important
import Persons from '../components/Persons/Persons'; //CSS Modules - Very Important
import Cockpit from '../components/cockpit/cockpit'; //CSS Modules - Very Important
//import Radium from 'radium';

//Below class is a react component and it can be created by extending Component class
class App extends Component {

//Constructor of this class based component is the first thing to execute 
constructor(props){
  super(props); //This code is needed to call constructor for component which is needed
  console.log("This is App.JS constructor");
  //The state which is set below can also be set in this constructor but the below mentioned syntax
  //is more latest syntax to set state
}

//Get Derived state from props is the second method to excute in class based component lifecycly hooks
static getDerivedStateFromProps(props,state){
  console.log("App.js get derived state from props",props);
  return state;
}

//componentDidMount method is called after all child components are rendered in render method
componentDidMount(){
  console.log("App.Js component is mounted");
}

//State is used for managing the state of react component
//This can only be used in a react component (class based)
  state = {
    persons: [
      {id:1,name:"Anurag",age:29},
      {id:2,name:"Shruti", age:22},
      {id:3,name:"Avinash", age:59}
    ],
    showPersons:false
  };

  //Event handler for input text changed, this method will help in changing states
  nameChangedHandler = (event,id) => {

    //Finding the person by ID
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    });
    
    //Createing immutable object of person
    const personUpdated = {
      ...this.state.persons[personIndex]
    };
    
    //Assigning textbox eneterd value to state
    personUpdated.name=event.target.value;

    //Retrieve original state and update the person by index
    const personOriginal = [...this.state.persons];
    personOriginal[personIndex]=personUpdated

    //Now update the state to use update state array
    this.setState({
      persons: personOriginal
    });
  };

    //This method will be used to hide show main div using a state property
    togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
      this.setState({
        showPersons:!doesShow
      });
    };

    //This handler is used for deleting the item from the array
    deletePersonsHandler = (itemIndex) => {
      const persons=[...this.state.persons]; 
      // This spread operator ... will create a copy of persons state as array are reference type immutable
      persons.splice(itemIndex,1);
      this.setState({
        persons:persons
      });
    };
  
  //For this component render method is called everytime there is change of state
  //Render method is the third method to be called in life cycle hooks
  render() {

    //Defining button style
    //Removing this style and will now use from CSS file
    /*const buttonStyle= {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid green',
      padding: '8px',
      cursor: 'pointer',
      //Using pseudo selectors like hover using Radium package installed
      /*':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }*/
  //}

    //The render method in a component is responsible for generating JSX which could then be appended to HTML DOM
    //Calling a custom component named Person
  
    //Using conditional formatting using the value of the show persons 
    let persons=null;
    let btnClass='';
    if(this.state.showPersons)
    {
      btnClass=Classes.red;
      //Iterating persons state array and converting each array item to valid JSX code
      //p = array item , i = index of that item
      persons=(
        <div> 
          <Persons persons={this.state.persons} 
          clicked={this.deletePersonsHandler} 
          changed={this.nameChangedHandler}/>
        </div> 
      );
      /*buttonStyle.backgroundColor='red';
      buttonStyle[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
      buttonStyle.border='1px solid red';*/
    }

    //All the code inside return is JSX code whereas all the code outside return is javascript code
    return (
      <div className={Classes.App}>
        <Cockpit title={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked = {this.togglePersonsHandler}/>
        {persons}
        </div>
    );
    //This way can also be used to create react elements, 
    //but this is not used as it becomes more cumbersome with larger number of objects
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is also a way to create elements !'));
  }
}
//export default Radium(App); // Here you export the coponent so that it can be used in any other page
export default App; 