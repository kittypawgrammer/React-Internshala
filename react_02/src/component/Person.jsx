function Person({name, age, color = "N/A", gender}){
    return(
        <div style={{border:"3px solid black", margin:"5px", padding:"5px"}}>
           <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Color: {color}</h2>
            <h2>Gender: {gender}</h2>
        </div>
    )
}

export default Person;