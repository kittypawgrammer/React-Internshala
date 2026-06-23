function Student(){
   let name = "Kunal";
    let age = 29;
    let standard = 12;

    return (
        <div className="bg-red-500">
            <h1> Name : {name}</h1>
            <h1> Age : {age} </h1>
            <h1> Standard : {standard}</h1>
        </div>
    )
}

export default Student;