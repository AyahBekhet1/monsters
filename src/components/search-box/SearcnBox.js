import './search-box.css'

export default function SearchBox ({onChangHandler , placeholder , className}) {

        
        return (
            <input placeholder={placeholder} className={` search-box ${className}`} type='search' onChange={onChangHandler} />

        )
    }
