import React from 'react'
import { Observables } from '@portal/fetchWithCache'
import './form-style.css'

export class FiltroForm extends React.Component {
  state = {
    status: null,
    name: "",
    id: "",
    filter: {name: "",status:null , id: ""},
    handleSubmit: this.handleSubmit.bind(this),
  }

  handleSubmit(event) {
    event.preventDefault();
    var toBoolean;
    if (this.state.status == "true") {
      toBoolean = true;
    } else if  (this.state.status == "false") {
      toBoolean = false;
    } else {
      toBoolean = null;
    }
    this.setState({ 
      filter: {
        name: this.state.name, 
        status: toBoolean, 
        id: this.state.id
      }}, 
      function() {
        const filter = this.state.filter;
        Observables.filterFields.next(filter)
        console.log(filter);
      }.bind(this)
    );
  }

  render() {
    return (
      <form onSubmit={this.state.handleSubmit}>
        <label>
          Status  
          <select
            defaultValue={this.state.status} 
            ref="status" 
            onChange={(status) => this.setState({ status:status.target.value }) }>
              <option value="null">TODAS</option>
              <option value="true">ATIVO</option>
              <option value="false">INATIVO</option>
          </select>
        </label>
        <input
          type="text"
          onChange={(name) => this.setState({ name:name.target.value }) }
          value={this.state.name}
          ref="name"
          placeholder="Procure pelo nome"
          title="Digite o nome para buscar."/>

        <input 
          type="text" 
          onChange={(id) => this.setState({ id:id.target.value }) }
          value={this.state.id}
          ref="id" 
          placeholder="Procure pelo ID"
          title="Digite o ID para buscar."/>

        <button type="submit" value="Filtrar"><i class="fas fa-search"></i> Filtrar</button>
        {/* <input type="submit" value="Buscar" /> */}
      </form>
    );
  }
}