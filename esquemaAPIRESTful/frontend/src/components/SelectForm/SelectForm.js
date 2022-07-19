import React from "react";
import axios from "axios";

import DataSection from '../DataSection/DataSection';

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "/api/productos" };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  

 async handleSubmit(event) {
      await axios
      .get(`localhost:8080${this.state.value}`)
      .then(function (v) {
          console.log(v);
       alert(v)
      })
      .catch(function (e) {
        console.log(e);
      });

    event.preventDefault();
}

render() {
    return (
      <div>
        <form >
          <label>
            Seleccionar endpoint:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="/api/productos">/api/productos</option>
              <option value="/api/info">/api/info</option>
              <option value="/api/productos/form">/api/productos/form</option>
            </select>
          </label>
          
        </form>
        <DataSection  data={this.state.value}></DataSection>

      </div>
    );
  }
}

export default SelectForm;
