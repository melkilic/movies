/** @format */

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./components/services/authService";
import "react-toastify/dist/ReactToastify";
import "./App.css";
// import { jwtDeconde } from "jwt-decode";

class App extends React.Component {
  state = {};

  async componentDidMount() {
    // const response = await axios.get(
    //   "http://jsonplaceholder.typicode.com/posts"
    // );
    // console.log(response);
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer>
          <NavBar user={this.state} />
          <main className="container">
            <Switch>
              <Route path="/register" component={RegisterForm}>
                {" "}
              </Route>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/movies/:id" component={MovieForm}></Route>
              <Route
                path="/movies"
                render={(props) => <Movies {...props} user={this.state.user} />}
              />
              <Route path="/customers" component={Customers}></Route>
              <Route path="/rentals" component={Rentals}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </ToastContainer>
      </React.Fragment>
    );
  }
}

export default App;

/*  state = {
  counters: [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
    {
      id: 4,
      value: 0,
    },
  ],
};

constructor(props) {
  super(props);
  console.log("App- Constructor");
  // this.state= this.props.something
}
componentDidMount() {
  console.log("App - Mounted");
}

handleReset = () => {
  const counters = this.state.counters.map((c) => {
    c.value = 0;
    return c;
  });
  this.setState(counters);
};
handleDelete = (counterId) => {
  const counters = this.state.counters.filter((c) => c.id !== counterId);
  this.setState({ counters });
};

handleIncrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value++;
  this.setState({ counters });
};

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value--;
  this.setState({ counters });
};
*/
