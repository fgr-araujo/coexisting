import React from 'react'
export class FiltroForm extends React.Component {
  state = {
    estados: ["Todas", "Ativa", "Pendente", "Cancelada"],
    status: "Todas",
    keyword: "",
    register: "",
    filter: {status: "",keyword: "",register:""},
    handleSubmit: this.handleSubmit.bind(this),
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({filter: {status: this.state.status, keyword: this.state.keyword, register: this.state.register}}, function() {
      console.log(this.state.filter)
    }.bind(this));
  }

  render() {
    const options = []
    for (const [index, value] of this.state.estados.entries()) {
      options.push(<option key={index} value={value}>{value}</option>)
    }
    return (
      <form onSubmit={this.state.handleSubmit}>
        <label>
          Status: 
          <select
            defaultValue={this.state.status} 
            ref="status" 
            onChange={(status) => this.setState({ status:status.target.value }) }>
              {options}
          </select>
        </label>
        <input
          type="text"
          onChange={(keyword) => this.setState({ keyword:keyword.target.value }) }
          value={this.state.keyword}
          ref="keyword"
          placeholder="Procure pelo nome da empresa"
          title="Digite o que deseja buscar."/>

        <input 
          type="text" 
          onChange={(register) => this.setState({ register:register.target.value }) }
          value={this.state.register}
          ref="register" 
          placeholder="Busque pelo CNPJ." 
          title="Pesquise pelo CNPJ da empresa."/>

        <input type="submit" value="Buscar" />
      </form>
    );
  }
}