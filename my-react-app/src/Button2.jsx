
function Button(){

    let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };

    //when the button is clicked, an event object is return(Recall from javascript)
    const handleClick = (e, name) => e.target.textContent = `OUCH, ${name}! 😢`;


    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    //when the callback function has parameters need to wrap in arrow function
    return (<button onClick={(e) => handleClick(e, "bro")}>Click me 😎</button>);
}

export default Button