//HOW TO STYLE REACT COMPONENTS WITH css (Button Component)
//--------------------------------------
//(not including external frameworks or preprocessors)

//1.External
//2.Modules
//3.Inline

//props = read-only properties that are shared between components.  (Student Component)
//      A parent component can send data to a child component.
//      <Component key=value>

//propTypes = a mechanism that ensures that the 
//            passed value is of the correct datatype.
//            age: PropTypes.number

//defaultProps = defaultProps = default values for props in case they are not
//               passed from the parent component
//               name: "Guest"

//conditional rendering = allows you to control what gets rendered  (UserGreeting Component)
//                        in your application based on certain conditions
//                        (show, hide, or change components)


//React hook = Special function that allows functional components to use
//             React features without writing class components (React v16.8)
//             (useState, useEffect, useContext, useReducer, useCallback, and more...)

//useState() = A react hook that allows the creation of a stateful variable
//             AND a setting function to update its value in the Virtual DOM
//             [name, setName]

//onChange = event handler used primarily with form elements (MyComponent2)
//           ex. <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes

//updater function = A function passed as an argument to setState() usually
//                   ex. setYear(arrow function)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous function
//                   Good practice to use updater functions

//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This omponent re-renders
//              This component mounts
//              The state of a value

//useEffect(function, [dependecies])

//1. useEffect(() => {})       //Runs after every re-render
//2. useEffect(() => {}, [])  //Runs only on mount
//3. useEffect(() => {}, [value])//Runs on mount + when value changes

//USES
//#1 Event Listeners
//#2 DOM manipulation
//#3 Subscriptions (real-time updates)
//#4 Fetching Data from an API
//#5 Clean up when a component unmounts

//useContext() = React Hook that allows you to share values 
//               between multiple levels of components without
//               passing props through each level

//PROVIDER COMPONENT
//1. import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//      <Child/>
//    </MyContext.Provider>

//CONSUMER COMPONENT
//1.import React, {useContext} from 'react';
//  import {MyContext} from './ComponentA';
//2. const value = useContext(MyContext);


//useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1.Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals



//import Student from "./Student.jsx";
//import UserGreeting from "./UserGreeting";
//import List from "./List.jsx";
// import Button from "./Button2.jsx"
//import ProfilePicture from "./ProfilePicture.jsx";
//import MyComponent from "./MyComponent2";
//COUNTER PROGRAM IMPORTS
//import Counter from "./Counter";
//////////////////////////////
//COLORPICKER PROGRAM IMPORTS
//import ColorPicker from "./ColorPicker";
/////////////////////////////
//import MyComponent from "./MyComponent3";
//import MyComponent from "./MyComponent4"; //update objects in state
//import MyComponent from "./MyComponent5"; //update ARRAYS in state
// import MyComponent from "./MyComponent6"; //update ARRAY of OBJECTS in state

//////////////////////////////
//TODO LIST PROGRAM IMPORTS
import ToDoList from "./ToDoList";
/////////////////////////////

//import MyComponent from "./MyComponent7";//useEffect
//import MyComponent from "./MyComponent8";//useEffect

//import DigitalClock from "./DigitalClock";
//import ComponentA from "./ComponentA";
//import MyComponent from "./MyComponent9";
// import StopWatch from "./StopWatch";
function App() {

  // const fruits = [{id: 1, name:"apple", calories: 95}, 
  //               {id: 2,name:"orange", calories: 45}, 
  //               {id: 3, name:'banana', calories: 105}, 
  //               {id: 4, name:'coconut', calories: 159}, 
  //               {id: 5, name:'pineapple', calories: 37}];
  // const vegetables = [{id: 1, name:"potatoes", calories: 110}, 
  //                     {id: 2, name:"celery", calories: 15}, 
  //                     {id: 3, name:'carrots', calories: 25}, 
  //                     {id: 4, name:'corn', calories: 63}, 
  //                     {id: 5, name:'broccoli', calories: 50}];

  return(
    <>
      {/* <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={35} isStudent={false}></Student>
      <Student name="Squirdward" age={40} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student ></Student> */}
      {/* <UserGreeting isLoggedIn={true} username="Lorax"/> */}
      {/* <List items={fruits} category="Fruits"></List>
      <List items={fruits} category="Vegetables"></List> */}
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {fruits.length > 0 ? <List items={fruits} category="Vegetables"></List>: null} */}
      {/* <Button></Button>
      <ProfilePicture></ProfilePicture> */}
      {/* <MyComponent></MyComponent> */}
      {/* <Counter></Counter> */}
      {/* <MyComponent></MyComponent> */}
      {/* <ColorPicker></ColorPicker> */}
      {/* <MyComponent></MyComponent> */}
      {/* <MyComponent></MyComponent> */}

      <ToDoList></ToDoList>


      {/* <MyComponent></MyComponent> */}

      {/* <DigitalClock></DigitalClock> */}

      {/* <ComponentA></ComponentA> */}

      {/* <MyComponent></MyComponent> */}
      {/* <StopWatch></StopWatch> */}
    </>
  );
}

export default App
