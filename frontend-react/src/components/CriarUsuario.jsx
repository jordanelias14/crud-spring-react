import React, { Component } from 'react';
import UsuarioService from '../service/UsuarioService';

class CriarUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            primeiroNome:'',
            ultimoNome:'',
            email:''
        };
        this.changePrimeiroNomeHandler = this.changePrimeiroNomeHandler.bind(this);
        this.changeUltimoNomeHandler = this.changeUltimoNomeHandler.bind(this);
        this.salvarUsuario = this.salvarUsuario.bind(this);
    }
    salvarUsuario = (e) =>{
        e.preventDefault();
        let usuario = {primeiroNome: this.state.primeiroNome, ultimoNome: this.state.ultimoNome, email: this.state.email};
        console.log('usuario =>' + JSON.stringify(usuario));
    
        UsuarioService.createUsuario(usuario).then(res =>{
            this.props.history.push('/usuarios');
        })    
    }

    changePrimeiroNomeHandler= (event) => {
        this.setState({primeiroNome: event.target.value});
    }
    changeUltimoNomeHandler= (event) => {
        this.setState({ultimoNome: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    cancel(){
        this.props.history.push('/usuarios')
    }

    render() {
        return (
            <div>
                <div className = "container">
              
              <div className = "row">
              
                  <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "50px"}}>
                     
                      <h3 className = "text-center" style={{marginTop: "20px"}}>Cadastre os Usuários</h3>
                      <div className = "card-body">
                          <form>
                              <div className = "form-group">
                                  <label>Primeiro Nome: </label>
                                  <input placeholder = "Nome" name = "primeiroNome" className = "form-control"
                                  value={this.state.primeiroNome} onChange = {this.changePrimeiroNomeHandler}/>
                              </div>
                              <div className = "form-group">
                                  <label>Último Nome: </label>
                                  <input placeholder = "Sobrenome" name = "ultimoNome" className = "form-control"
                                  value={this.state.ultimoNome} onChange = {this.changeUltimoNomeHandler}/>
                              </div>
                              <div className = "form-group">
                                  <label>E-mail: </label>
                                  <input placeholder = "email" name = "email" className = "form-control"
                                  value={this.state.email} onChange = {this.changeEmailHandler}/>
                            </div>

                            <button className = "btn btn-success" onClick={this.salvarUsuario}>Salvar</button>
                            <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>  
                          </form>
                      </div>
                  </div>
        
              </div>
        
          </div>
            </div>
        );
    }
}

export default CriarUsuario;