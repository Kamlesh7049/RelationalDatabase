import { useState,useEffect } from "react";
import axios from "axios";


const Display = () => {
  const [mydata,setMydata]=useState([]);
  
  const loadData=()=>{
    let api="http://localhost:8080/employee/userdatadisplay";
     axios.get(api).then((res)=>{
      console.log(res.data);
      setMydata(res.data);

     })
  }

  useEffect(()=>{
    loadData();
  },[])

const ans=mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.fname}</td>
      <td>{key.lname}</td>
      <td>{key.userid ? key.userid.uname : 'N/A'}</td>
      <td>{key.userid ? key.userid.email : 'N/A'}</td>
      {/* <td>{key.userid.uname}</td>
      <td>{key.userid.email}</td> */}
    </tr>
    </>
  )
})

  return (
   <>
   <h3>Welcome Display!!</h3>
   <table  border="2px">
    <tr>
      <th>First Name</th>
      <th>Second Name</th>
      <th>User ID</th>
      <th>Email</th>
    </tr>
    {ans}
   </table>
   </>
  )
}

export default Display;