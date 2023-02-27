import './CardList.css'
import Card from "../card/Card";

const CardList =({monsters})=>  {
      return (
      <div className="card-list">
      {
        monsters.map(monster=>{
          return (
           <Card monster={monster} key={monster.id} />
          )
        })
      }
      </div>
    )
  }


export default CardList;
