import { useEffect } from "react";
import { Component } from "react";
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    notes : []
  }
}

API_URL = "http://localhost:3000/api/tasks";

componentDidMount(){
  this.refreshNotes();
}

async refreshNotes() {
  fetch(this.API_URL).then(response => response.json()).then(data => {
    this.setState({notes:data});
  })
}
render() {
  const{notes} = this.state; 
  return (
    <div className="App">
      <h2>Task Management System</h2>
      {notes.map(note =>
        <p>
          <b>* {note.description}</b>
        </p>
        )}
    </div>
  );
}
}
export default App;