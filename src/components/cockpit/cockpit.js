import React from 'react';
import Classes from './cockpit.css';

const cockpit = (props) =>
{
    let btnClass='';
    if(props.showPersons){
        btnClass=Classes.red;
    }
    //Apply CSS classes conditionally
    let classesArr= [];
    if(props.persons.length > 1)
    {
      classesArr.push(Classes.red);
      classesArr.push(Classes.bold);
    }
    return(
        <div className={Classes.cck}>
            <h1>{props.title}</h1>
            <p className={classesArr.join(' ')}>This is really working</p>
            <button className={btnClass} onClick = {props.clicked}>Toggle Name</button> 
        </div>
    )
};

export default cockpit;