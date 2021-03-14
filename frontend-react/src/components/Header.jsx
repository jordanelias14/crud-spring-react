import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav  className="navbar navbar-expand-md navbar-dark bg-primary">
                        <div><a href="http://localhost:3000/usuarios" className="navbar-brand" style={{color: "#000000"}}>
                            <b>Gerenciador de Cadastros</b></a> </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;