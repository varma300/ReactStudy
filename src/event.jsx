function Evenr_Hanling_Component(){

    let event_handler1 = ()=> 
    console.log('1 or 2 button clicked, unable to idendify which button usd user');// normal event function
   
    let event_handler2 = (e)=> console.log('3 & 4button clicked, passing parameter. it print the memmery space of function also',e);
  
    let event_handler3 = (e)=> console.log('5 & 6 button clicked. devleper can idendify which button is pressed',e.target);
  
    let event_handler4 = (e,extraparam)=> {
        console.log('7 & 8 button clicked. devleper can idendify which button is pressed. ',e.target);
        console.log('second parameterbutton, we can pass an argument through the ', extraparam);
    }
    
    let event_handler5 = (e)=> {
    console.log(`8 button clicked. uind ".bind"  and "this" key word. 
    we can pass extra parameter through this rairly using core language method`,e);
    }
    return (
        <>

        <button onClick={event_handler1}>Click 1</button>
        <button onClick={event_handler1}>Click 2</button>
        <br/>
        <button onClick={event_handler2}>Click 3</button>
        <button onClick={event_handler2}>Click 4</button>
        <br/>
        <button onClick={event_handler3}>Click 5</button>
        <button onClick={event_handler3}>Click 6</button>
        <br/>
        <button onClick={(event) => event_handler4(event, 'button 7')}>Click 7</button>
        <button onClick={(event) => event_handler4(event, 'button 8')}>Click 8</button>
        <br/>
        <button onClick={event_handler5.bind(this, 'button 9')}>Click 8</button>





        </>
    )
}

export default Evenr_Hanling_Component;