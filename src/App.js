import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // For Product declared as an object
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illustraion", price: "$69.99" },
    { name: "PDF", price: "$9.99" },
    { name: "PDF", price: "$9.99" },
    { name: "PDF", price: "$9.99" },
    { name: "jpeg", price: "$1.99" },
  ];

  // const materialNames = products.map(pd => pd.name);
  // console.log(materialNames);
  //For Person declared as an array
  const names = ["Khalid", "Jhankar", "Jitu", "Babu", "Lipu", "Ashik"];
  const city = ["Stockholm", "New York", "Copenhagen", "Lisbon"];
  const citizenship = ["Sweden", "USA", "Denmark", "Portugal"];
  const about = "lorem lorem lorem";

  const friendsName = names.map((name) => name);
  console.log(friendsName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My React Project</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <ul>
          {products.map((pd) => (
            <li>
              Name: {pd.name} & Price: {pd.price}
            </li>
          ))}
          <li>{products[0].name}</li>
          <li>{products[1].name}</li>
          <li>{products[2].name}</li>
          <li>{products[3].name}</li>
        </ul>

        <ul>
          {products.map((pd) => (
            <Product material={pd}></Product>
          ))}
        </ul>
        <Product material={products[0]}></Product>
        <Product material={products[1]}></Product>
        <Product material={products[2]}></Product>
        <Product material={products[3]}></Product>

        <Person
          name={names[0]}
          city={city[0]}
          citizenship={citizenship[0]}
          about={"Read More..."}
          profession={"Student"}
        ></Person>
        <Person
          name={names[1]}
          city={city[1]}
          citizenship={citizenship[1]}
          about={about}
          profession={"Teacher"}
        ></Person>
        <Person
          name={names[2]}
          city={city[2]}
          citizenship={citizenship[2]}
          about={about}
          profession={"Service"}
        ></Person>
        <Person
          name={names[3]}
          city={city[3]}
          citizenship={citizenship[3]}
          about={about}
          profession={"Business"}
        ></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  // const isIncreased = ()=> {
  //   let newCount = count +1;
  //   setCount(newCount);
  // };
  // const isIncreased = ()=> setCount(count +1);

  // const isDecreased = ()=> {
  //   const minusCount = count -1;
  //   setCount(minusCount);
  // };

  // const isDecreased = ()=> setCount(count -1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onMouseOver={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
// Fetching and using useEffect()

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
      {
        console.log(users)
      }
        {users.map(info => <li>NAME: {info.name}, PHONE: {info.phone}</li>)}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    backgroundColor: "lightgray",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px",
    width: "300px",
    textAlign: "center",
    float: "left",
  };
  console.log(props);
  // const {name, price} = props.material;  // destructure way MOD 32-8
  // console.log(name,price);
  return (
    <div style={productStyle}>
      <h3>Name: {props.material.name} </h3>
      <h5>Price: {props.material.price} </h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    backgroundColor: "red",
    border: "2px solid blue",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    width: "600px",
  };
  return (
    <div style={personStyle}>
      <h3>Name: {props.name} </h3>
      <h4>City: {props.city} </h4>
      <h4>Citizenship: {props.citizenship} </h4>
      <h4>Profession: {props.profession}</h4>
      <p>About More: {props.about}</p>
    </div>
  );
}

export default App;
// function Person(props) {
//   var personStyle = {
//     backgroundColor: "cyan",
//     color: "red",
//     padding: "5px",
//     borderRadius: "10px",
//     border: "5px solid red",
//     margin: "10px",
//   };
//   console.log(props);
//   return (
//     <div style={personStyle}>
//       <h1 style={{ color: "yellow" }}> Name: {props.name}</h1>
//       <h3 style={{ color: "white" }}>City: {props.city}</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto.
//       </p>
//     </div>
//   );
// }

// var person = {
//   name: "Dr. Zakir",
//   job: "Islamic Scholar",
//   country: "India",
//   live: "Malaysia",
// };
// var person2 = {
//   name: "Dr. Ibrahim",
//   job: "Medical Officer",
//   country: "Bangladesh",
//   live: "Dhaka",
// };

// send inside the return
// var style = {
//   backgroundColor: "cyan",
//   color: "red",
//   padding: "5px",
//   borderRadius: "10px",
//   border: "5px solid red",
// };
// {/* By khalid */}
// <button class="btn-primary">Click for Core Concepts</button>
// <h3>Khalid is here to explore React</h3>
// <h4 style={style}>
//   Person heading: {2 + 2}- Name: {person.name}, Country: {person.live},
//    Other: {person.job + ", "+ person.country}
// </h4>
// <h5 style={{color: 'white', backgroundColor: 'blue'}}>Name: {person2.name}, job and live: {person2.job + ", " + person2.live}</h5>
// <p>My First React Paragraph</p>
