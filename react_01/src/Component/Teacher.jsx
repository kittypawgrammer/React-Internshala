function teacher(){
   let name = "Meenakshi";
    let age = 22;
    let salary = 45000;

    return (
        <div className="bg-blue-500 border-2">
            <h1> Name : {name}</h1>
            <h1> Age : {age} </h1>
            <h1> Salary : {salary}</h1>
        </div>
    )
}

export default teacher;