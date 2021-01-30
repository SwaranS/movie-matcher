import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.componenets";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locals: [],
      searchField: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ locals: users }));
  }
  render() {
    const { locals, searchField } = this.state;
    const filteredUsers = locals.filter((localUser) =>
      localUser.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Search Users</h1>
        <SearchBox
        placeholder = 'Search Users' 
        handleChange = {e => this.setState({searchField : e.target.value})}/>
        
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
