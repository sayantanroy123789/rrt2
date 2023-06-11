import React, { useState, useEffect } from "react";

function List() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let users = data.results;
        console.log(users);
        setUser(users);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>Users Information</h2>

      <p style={{marginTop:"20px", marginBottom:"20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        molestias et magni asperiores a ad consectetur excepturi sunt aspernatur
        odio maxime tempore, natus impedit quam mollitia id totam sed distinctio
        voluptatibus molestiae? Praesentium unde beatae itaque maxime eaque
        laudantium dolore! Rerum perferendis necessitatibus quae labore porro
        dolorem. Sint ullam libero a delectus, nam placeat aspernatur nobis
        sunt, fuga sed dignissimos excepturi enim deserunt, aperiam
        necessitatibus similique omnis impedit est nostrum harum nisi reiciendis
        eaque. 
      </p>

      <div>
        <table
          cellPadding={10}
          style={{ width: "100%", boxShadow: "0 0 10px black" }}
        >
          <thead>
            <tr style={{ background: "black", color: "white" }}>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody align="center">
            {user.map((data) => (
              <tr>
                <td>
                  <img src={data.picture.medium} alt="" />
                </td>
                <td>{  data.name.title+" "+data.name.first + " " + data.name.last}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default List;