import React from 'react'
export class FiltroForm extends React.Component {
  state = {
    status: null,
    name: "",
    id: "",
    filter: {id: "",name: "",status:null},
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
    this.setState({filter: {status: toBoolean, name: this.state.name, id: this.state.id}}, function() {
      const filter = this.state.filter;
      console.log(filter);
    }.bind(this));
  }

  render() {
    return (
      <form onSubmit={this.state.handleSubmit}>
        <label>
          Status: 
          <select
            defaultValue={this.state.status} 
            ref="status" 
            onChange={(status) => this.setState({ status:status.target.value }) }>
              <option value="null">Todas</option>
              <option value="true">Ativo</option>
              <option value="false">Desativo</option>
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

        <input type="submit" value="Buscar" />
      </form>
    );
  }
}