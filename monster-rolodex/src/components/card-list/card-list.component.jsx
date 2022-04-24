import { Component } from "react";
import Card from '../card/card.component'

import './card-list.styles.css'

class CardList extends Component {
    render() {

        const { usuarios } = this.props;

        console.log(usuarios);
        return (
            <div className='card-list'>
                {usuarios.map((usuario) => {
                    return <Card usuario={usuario} />
                })}
            </div>
        );
    }
}

export default CardList;