import React, {useState} from 'react';


function MyComponent(){

    const [name, setName] = useState("Guest"); //Use state returns array //array destructuring //can pass initial value
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () =>{
        setName("Spongebob");
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployed = () =>{
        setIsEmployed(!isEmployed);
    }

    return(<div>
                <p>Name: {name}</p>
                <button onClick = {updateName}>Set name</button>
                <p>Age: {age}</p>
                <button onClick = {incrementAge}>Set age</button>
                <p>Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick = {toggleEmployed}>Toggle Status</button>
           </div>)
}

export default MyComponent;