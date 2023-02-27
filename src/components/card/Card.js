import './card.css'

export default function Card ({monster}) {
        return (
            <div key={monster.id} className="card-container" >
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />  
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>   
        )
    }


