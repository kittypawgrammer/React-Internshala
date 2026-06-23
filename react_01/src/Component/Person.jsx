function Person(){
    let name = "Priyanka Kanwal";
    let age = 30;
    let salary = 40000;
    let isMale = false;

    return (
        <div class="bg-green-400 border-2">
            {/* <h1> Name: Priyanka </h1> */}
            <h1> Name : {name}</h1>
            <h1> Age : {age} </h1>
            <h1> Salary : {salary}</h1>
            <h1> IsMale : {JSON.stringify(isMale)} </h1>
        </div>
    )
}

export default Person;