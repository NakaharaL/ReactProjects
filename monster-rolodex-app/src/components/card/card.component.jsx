import './card.styles.css'

const Card = ({usuario}) => {
    const { name, email, id} = usuario;

    return (
        <div className='card-container' key={id}>
            <img alt={`Usuário ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}></h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;