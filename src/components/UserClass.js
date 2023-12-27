import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name, " Child componnet cons");
  }

  async componentDidMount() {
    // const url = "https://api.github.com/users/vikash-frontier";
    // const data = await fetch(url);
    // const res = await data.json();

    // this.setState({
    //   userInfo: res,
    // });

    console.log(this.props.name, " Child did mount");
  }

  componentDidUpdate() {
    console.log("Did update");
  }

  render() {
    console.log(this.props.name, " Child componnet render");
    // console.log(this.state.userInfo);

    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Loction: Bihar</p>
        <span>email: vik@gmail.com</span>
        <p>count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
