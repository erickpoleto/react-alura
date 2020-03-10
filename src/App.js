import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from  './formulario';

class App extends Component {
  state = {
    autores : [
      {
        nome: 'Paulo',
        livro: 'DevOps',
        preco: '500'
      },
      {
        nome: 'João',
        livro: 'CleanCode',
        preco: '1500'
      },
      {
        nome: 'Geremias',
        livro: 'HaveDotSlash',
        preco: '5000'
      },
      {
        nome: 'Legolas',
        livro: 'Senhor dos Anéis',
        preco: '10000'
      }
    ],
  };

  escutadorDeSubmit = autor =>{
    this.setState({
      autores: [...this.state.autores, autor]
    })
  }

  removeAutor = (index) =>{
    
    const {autores} = this.state;

    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {
          console.log(index, posAtual)
          return posAtual !== index;
        }),
      }
    );
  }

  render (){
    return (
      <Fragment>
        <Tabela autores={ this.state.autores } removeAutor = { this.removeAutor }/>
        <Form escutadorDeSubmit = { this.escutadorDeSubmit}/>
      </Fragment>
    );
  }
}
export default App;
