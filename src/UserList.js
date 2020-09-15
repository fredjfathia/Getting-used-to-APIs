import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
 const [ListOfUser, setListOfUser] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
     );
     setListOfUser(result.data);
   };
   fetchData();
 }, [])
 
 return (
     <div style={{ backgroundColor:"rgb(187, 241, 223)"}}>
     <h1><i>List Of Users</i></h1>
     <div>
       <table border="1">
         <tr>
         <th>ID</th>
         <th>Name</th>
         <th>UserName</th>
         <th>Email</th>
         <th>Address</th>
         <th>Phone</th>
        <th> Website</th>
         <th>Company</th>
         </tr>
         
    {ListOfUser.map(item => (
      <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
    </tr>
     ))}
      
   </table> 
   </div> 
  </div>
 );
}
export default UserList;