import Navigation from "../component/Navigation";
import { useNavigate } from "react-router-dom";
import Counter from "../Counter";
import Home from "../Home";
import DataDisplay from "../DataDisplay";
import React, { useState } from "react";

const Test = () => {
  let navigate = useNavigate();
  let [data, setData] = useState([
    {
      id: 1,
      name: "test",
      email: "test@gmail.com",
    },
    { id: 2, name: "test1", email: "test1@email.com" },
  ]);
  let handelEdit = (id) => {
    console.log(id);
  };
  let handleDelete = (id) => {
    console.log(id);
    setData(data.filter((data) => data.id !== id));
  };
  return (
    <div>
      <Navigation />
      <DataDisplay
        data={data}
        handelEdit={handelEdit}
        handleDelete={handleDelete}
      />
      <Home></Home>
      <Counter></Counter>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dahboard
      </button>
      <div></div>
    </div>
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>NAME</th>
    //         <th>EMAIL</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((data) => {
    //         return (
    //           <tr key={data.id}>
    //             <td>{data.id}</td>
    //             <td>{data.name}</td>
    //             <td>{data.email}</td>
    //             <td>
    //               <button onClick={() => handelEdit(data.id)}>Edit</button>
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Test;
