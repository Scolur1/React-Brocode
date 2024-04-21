import React, {useState} from 'react';


function MyComponent(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;//store value from input
        document.getElementById("foodInput").value = ""; //reset the input after button pressed
        setFoods(f => [...f, newFood]);//take everything from original and add newFood


    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));//returns elements that meet condition //(_ means ignore this param)
    }

    return(<div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id='foodInput' placeholder='Enter food name'/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>);
}

export default MyComponent