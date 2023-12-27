import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent componnet cons");
  }

  componentDidMount() {
    console.log("Parenr did mount");
  }

  render() {
    console.log("Parent component render");
    return (
      <div>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        <UserClass name={"Third"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <UserClass name={"Vikash"} />
//     </div>
//   );
// };

export default About;
