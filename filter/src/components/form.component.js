import React from 'react'
export class FiltroForm extends React.Component {
  state = {
    estados: ["Todas", "Ativa", "Pendente", "Cancelada"],
    status: "Todas",
    keyword: "",
    register: "",
    filter: {status: "",keyword: "",register:""},
    statusChange: this.statusChange.bind(this),
    // keywordChange: '', this.keywordChange.bind(this),
    registerChange: this.registerChange.bind(this),
    handleSubmit: this.handleSubmit.bind(this),
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({filter: {status: this.state.status, keyword: this.state.keyword, register: this.state.register}}, function() {
      console.log(this.state.filter)
    }.bind(this));
  }

  statusChange(event) {
    this.setState({status: event.target.value}, function(){
      console.log(this.state.status);
    }.bind(this));
  }
  // keywordChange(event) {
  //   this.setState({keyword: event.target.value}, function(){
  //     console.log(this.state.keyword);
  //   }.bind(this));
  // }
  registerChange(event) {
    this.setState({register: event.target.value}, function(){
      console.log(this.state.register);
    }.bind(this));
  }
  

  render() {
    const options = []
    for (const [index, value] of this.state.estados.entries()) {
      options.push(<option key={index} value={value}>{value}</option>)
    }
    return (
      <form onSubmit={this.state.handleSubmit}>
        <span>
          {this.state.keyword}
        </span>
        <label>
          Qual o status da empresa?
          <select defaultValue={this.state.status} ref="status" onChange={this.state.statusChange}>
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

        <input type="text" onChange={this.state.registerChange} ref="register" placeholder="Busque pelo CNPJ." title="Pesquise pelo CNPJ da empresa." defaultValue={this.state.register}/>

        <input type="submit" value="Buscar" />
      </form>
    );
  }
}

/*
<input type="date" onChange={this.state.dateChange} ref="date" placeholder="DD/MM/AAAA" title="Digite a data que deseja pesquisar." defaultValue={this.state.date}/>

dateChange(event) {
  this.setState({date: event.target.value}, function(){
    console.log(this.state.date);
  }.bind(this));
}

date: this.state.date

dateChange: this.dateChange.bind(this),

date: ""
*/