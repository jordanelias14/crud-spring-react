import React, { Component } from 'react';
import UsuarioService from '../service/UsuarioService';

class ListaUsuarios extends Component {
    constructor(props){
        super(props)

        this.state = {
            usuarios:[]
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.editarUsuario = this.editarUsuario.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario(id){
        UsuarioService.deleteUsuario(id).then( res => {
            this.setState({usuarios: this.state.usuarios.filter(usuario => usuario.id !== id)});
        });

    }

    editarUsuario(id){
        this.props.history.push(`/atualizar-usuarios/${id}`);
    }

    componentDidMount(){
        UsuarioService.getUsuarios().then((res) =>{
            this.setState({ usuarios: res.data});
        });
    }

    addUsuario(){
        this.props.history.push('/add-usuarios');
    }

    render() {
        return (
            <div >
                <h2 className="text-center" style={{marginTop: "10px"}}>Lista de Cadastrados</h2>
                
                <div className="row" >
                    <table className="table table-striped table-bordered">

                        <thead>

                            <tr>
                                <th className="text-center ">Nome </th>
                                <th className="text-center ">Sobrenome </th>
                                <th className="text-center ">Endereço de Email</th>
                                <th className="text-center ">
                                    <div className="row">
                                    <button style={{marginLeft: "15px"}} className="btn btn-primary" onClick={this.addUsuario}>Adicionar Usuário</button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                         <tbody>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                    <tr key = {usuario.id}>
                                        
                                        <td>{usuario.primeiroNome}</td>
                                        <td>{usuario.ultimoNome}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <button onClick = { () => this.editarUsuario(usuario.id)} className="btn btn-info">Editar</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.deleteUsuario(usuario.id)} className="btn btn-danger">Excluir</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                         </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListaUsuarios;