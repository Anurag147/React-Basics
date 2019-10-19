import React from 'react';
import Classes from './Person.css';
//import Radium,{StyleRoot} from 'radium';

//This is a react component (method based)
//{props.children} is used for adding text we have provided while calling the component

    const person = (props) => {
        //Used for media queries using radium
    /*const style = {
                    '@media (min-width: 500px)':{
                    width:'450px'
                   }
    };*/
    return (
           
                <div className={Classes.Person}>
                <p onClick={props.click}>I am <strong>{props.name}</strong> and i am <strong>{props.age}</strong> years old</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}></input>
                </div>
            
    )};

//export default Radium(person);
export default person;