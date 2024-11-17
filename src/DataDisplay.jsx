import React from "react";

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, handelEdit , handleDelete} = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr> 
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <button onClick={() => handelEdit(data.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataDisplay;
