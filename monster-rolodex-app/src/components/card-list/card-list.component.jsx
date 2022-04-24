import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({usuarios}) => (
        <div className='card-list'>
            {usuarios.map((usuario) => {
                return <Card usuario={usuario} />
            })}
        </div>
    );

export default CardList;