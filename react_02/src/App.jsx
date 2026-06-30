// import Person from './component/Person'
// import Product from './component/Product'
import Mentor from './component/Mentor';
import Students from './component/Students';

function App() {
  let arr1 = ["shivank", "Priyanka", "Siddhant"];
   let arr2 = ["Simba", "Loko"];
  return (
    // <div>
    //   <Person name="Priyanka" age="28" color="blue" gender="female"/>
    //   <Person name="Kunal" age="30"color="red" gender="male"/>
    //   <Person name="Swati" age="22" color="yellow" gender="female"/>
    // </div>
/* <div>
    <Product name="Broom" des="Bettre quality broom" price="100" img="https://images.unsplash.com/photo-1705951442994-1e3533a15058?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb29tfGVufDB8fDB8fHww" />
    </div> */

    <div>
      <Mentor num="1" name="Smarth"/>
      <Students studentList={arr1}/>
      <Mentor num="2" name="Marvik"/>
      <Students studentList={arr2}/>

    </div>
  )
}

export default App;


