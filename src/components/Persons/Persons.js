import React from 'react';
import Person from '../Persons/Person/Person';

const persons = (props) => {
  console.log("Rendering persons now..");
  //Here we are mapping the output of array to UI
    return props.persons.map((p,i) =>{
        return <Person name= {p.name} age = {p.age} 
        click={()=>props.clicked(i)} key={p.id}
        changed={(event)=> props.changed(event,p.id)}/>
      });
    };

export default persons;