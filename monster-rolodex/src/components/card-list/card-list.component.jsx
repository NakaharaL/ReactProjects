import { Component } from "react";

class CardList extends Component {
    render() {

        const { usuarios } = this.props;

        console.log(usuarios);
        return (
            <div>
                {usuarios.map((usuario) => (
                    <h1 key={usuario.id}>{usuario.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;