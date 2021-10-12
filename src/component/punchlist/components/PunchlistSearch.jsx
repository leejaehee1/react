import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';


const PunchlistSearch = (props) => {

    const [searchText, setSearchText] = useState("");

    const handeleSearchFilter = (e) => {
        console.log(e.target.name);
        setSearchText(e.target.value)
    }  

    const handleSearchClick = (e) => {
        console.log('올려버린다./')
        props.setSearchText(searchText)
    }

    return (
        <>
            <input style={{width: "150px", textAlign: "left", border: '1px solid black', fontSize:'17px' }} 
                type="text" name="aheiufhbeawhfibqilfb" value={searchText} onChange={handeleSearchFilter} 
            />
            <SearchIcon fontSize="large" style={{ paddingTop: "10px", paddingBottom:'-5px' , height: "30px", margin:'0px' }} onClick={handleSearchClick} />
        </>
    )
}


export default PunchlistSearch;