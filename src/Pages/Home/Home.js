import styled from "styled-components";
import { useState, useEffect } from "react";
import { 
  collection, 
  getDocs,
  addDoc,
} from "firebase/firestore";
import {createUserDocInitiate} from "../../redux/actions/actions"

import {db} from "../../Firebase/firebase";
import { useDispatch } from 'react-redux';

const StyledHome = styled.div`
background-color: red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



const Home = () => {

  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

const [users, setUser] = useState([]);
const userCollectionRef = collection(db, "users");

const createUser = async () => {
  //await addDoc(userCollectionRef, {name : newName, age : newAge})
  await dispatch(createUserDocInitiate(newName, newAge))
}

useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  getUsers();
}, []);


    return (
      <div className="App">
        <input
        type="string"
        placeholder="name.."
        onChange={(event) => {setNewName(event.target.value)
        }}></input>
         <input
        type="number"
        placeholder="age.."
        onChange={(event) => {setNewAge(event.target.value)
        }}></input>
        <button onClick={createUser}>Add user</button>
        {users.map((user) => {
          return (
            <div>
              <h1>Name : {user.name}</h1>
              <h1>Age : {user.age}</h1>
            </div>
          )
        })}
  
</div>
    );
  
}

export default Home;
