import { useState , useEffect} from 'react';
import './App.css'
// import Monsters from './Components/Monsters';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearcnBox';


const App = () =>{

  const [searchField , setSearchField] =useState('')
  const [title , setTitle] =useState('')
  const [monsters ,  setMonsters] = useState([])
  const [filteredMonsters , setFilteredMonsters] = useState(monsters)


  useEffect(()=>{
    const getMonsters=async ()=> {
      const res=await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      setMonsters(users) 
    }
    getMonsters()
  },[])

  
  useEffect(()=>{
    const newFilteredMonsters= monsters.filter((monster)=>{
      return  monster.name.toLowerCase().includes(searchField) 
    })
    setFilteredMonsters(newFilteredMonsters)
    
  },[monsters, searchField])


  const onSearchChange =(e)=>{
          
        const searchFieldString = e.target.value.toLowerCase()
        setSearchField(searchFieldString)
      }

  const onTitleChange =(e) =>{
    const newTitle = e.target.value
    setTitle(newTitle)
  }    

  

  return (
    <div className='App'>
      <h1 className='app-title' >{title}</h1>
      <SearchBox onChangHandler={onSearchChange} placeholder='search monsters' className='search-box' />
      <br />
      <SearchBox onChangHandler={onTitleChange} placeholder='set title' className='search-box' />
     <CardList  monsters={filteredMonsters} />
    </div>
  )
}
// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField:''
      
//     }

//   }

//   async componentDidMount() {
//     const res=await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json()
//     this.setState(()=>{
//       return {monsters:users}
//     })
    
//   }

//   onSearchChange =(e)=>{
          
//     const searchField = e.target.value.toLowerCase()
//     this.setState(()=>{
//       return {searchField:searchField}
//     })
//   }

//   render () {

//     const {monsters , searchField} =this.state
//     const {onSearchChange} = this
//     const filteredMonsters= monsters.filter((monster)=>{
//       return  monster.name.toLowerCase().includes(searchField)

//     })
//     return (
//       <div className='App'>
//         <h1 className='app-title' >Monsters Rolodex</h1>
//         <SearchBox onChangHandler={onSearchChange} placeholder='search monsters' className='search-box' />
//        <CardList  monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }



export default App
