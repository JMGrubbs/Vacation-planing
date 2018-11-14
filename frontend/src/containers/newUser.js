import React, { Component } from "react";

class NewUser extends Component {
  render() {
    return (
      <div>
        <input className="newUser" placeholder="Firstname" />
        <input className="newUser" placeholder="Lastname" />
        <button onClick={this.createNewUser}>New User</button>
      </div>
    );
  }
}

export default NewUser;

// createNewUser = event => {
//     let firstname = event.target.parentElement.children[9].value;
//     let lastname = event.target.parentElement.children[10].value;
//     let id = Math.floor(Math.random * 1000000);
//     let data = {
//       id: id,
//       firstname: firstname,
//       lastname: lastname
//     };
//     fetch(
//       `${URL}/users`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify(data)
//       },
//       () => {
//         this.setState({
//           loginUser: {
//             id: id,
//             firstname: firstname,
//             lastname: lastname
//           },
//           render: "userPage"
//         });
//       }
//     );
//   };
