import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import "./styles/PunchlistFilter.css";
import Chip from '@material-ui/core/Chip';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const PunchlistFilter = (props) => {

    const [getProjectID, setGetProjectID] = useState();
    const [getDiscipline, setGetDiscipline] = useState();
    const [getCategory, setGetCategory] = useState();
    const [getUnit, setGetUnit] = useState();
    const [getArea, setGetArea] = useState();
    const [getDrawing, setGetDrawing] = useState();


    
    const urlProjectID = 'http://54.180.147.184:5000/punchlist/project/?range=[0, 24]';
    const urlDiscipline = 'http://54.180.147.184:5000/punchlist/discipline/?range=[0, 24]';
    const urlCategory = 'http://54.180.147.184:5000/punchlist/category/?range=[0, 24]';
    const urlUnit = 'http://54.180.147.184:5000/punchlist/unit/?range=[0, 24]';
    const urlArea = 'http://54.180.147.184:5000/punchlist/area/?range=[0, 24]';
    const urlDrawing = 'http://54.180.147.184:5000/punchlist/drawing/?range=[0, 24]';
    
    const issuedByData = new Set();
    const tagNumberData = new Set();

    Object.values(props.boardAllData).map(v =>{ 
        issuedByData.add(v.issuedBy);
    })

    Object.values(props.boardAllData).map(v =>{ 
        tagNumberData.add(v.tagNumber);
    })


    useEffect(()=>{
        axios.get(urlProjectID)
        .then((res)=> setGetProjectID(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlDiscipline)
        .then((res)=> setGetDiscipline(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlCategory)
        .then((res)=> setGetCategory(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlUnit)
        .then((res)=> setGetUnit(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlArea)
        .then((res)=> setGetArea(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlDrawing)
        .then((res)=> setGetDrawing(res.data.result))
        .catch(err => console.log(err))

        
    }, [])

    //  filterCategory filterDiscipline filterUnit/ filterArea/ filterIssuedBy/ filterDrawing/ filterTag/ difficultyB difficultyA ScheduleImpactB ScheduleImpactA CostImpactB CostImpactA
    const [filterProjectID, setFilterProjectID] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [filterDiscipline, setFilterDiscipline] = useState("");
    const [filterUnit, setFilterUnit] = useState("");
    const [filterArea, setFilterArea] = useState("");
    const [filterIssuedBy, setFilterIssuedBy] = useState("");
    const [filterDrawing, setFilterDrawing] = useState("");
    const [filterTag, setFilterTag] = useState("");
    const [difficultyB, setDifficultyB] = useState("");
    const [difficultyA, setDifficultyA] = useState("");
    const [scheduleImpactB, setScheduleImpactB] = useState("");
    const [scheduleImpactA, setScheduleImpactA] = useState("");
    const [costImpactB, setCostImpactB] = useState("");
    const [costImpactA, setCostImpactA] = useState("");

    const handleChange = (e) =>{
        const name = e.target.name
        // // console.log(name)
        // // console.log(e.target.value)
        if (name ==="filterProjectID") {
            setFilterProjectID(e.target.value)
            // // console.log(1)
        } else if (name =="filterCategory"){
            setFilterCategory(e.target.value)
            // // console.log(2)
        }else if (name =="filterDiscipline"){
            setFilterDiscipline(e.target.value)
            // // console.log(3)
        }else if (name =="filterUnit"){
            setFilterUnit(e.target.value)
            // // console.log(4)
        }else if (name =="filterArea"){
            setFilterArea(e.target.value)
            // // console.log(5)
        }else if (name =="filterIssuedBy"){
            setFilterIssuedBy(e.target.value)
            // // console.log(6)
        }else if (name =="filterDrawing"){
            setFilterDrawing(e.target.value)
            // // console.log(7)
        }else if (name =="filterTag"){
            setFilterTag(e.target.value)
            // // console.log(8)
        }else if (name =="difficultyB"){
            setDifficultyB(e.target.value)
            // // console.log(9)
        }else if (name =="difficultyA"){
            setDifficultyA(e.target.value)
            // // console.log(10)
        }else if (name =="scheduleImpactB"){
            setScheduleImpactB(e.target.value)
            // // console.log(11)
        }else if (name =="scheduleImpactA"){
            setScheduleImpactA(e.target.value)
            // // console.log(12)
        }else if (name =="costImpactB"){
            setCostImpactB(e.target.value)
            // // console.log(13)
        }else if (name =="costImpactA"){
            setCostImpactA(e.target.value)
            // // console.log(14)
        }
    }

    const [keywords, setKeywords] = useState([]);
    const [content, setContent] = useState();
    const nextID = useRef(0);

    const handleChangeKey = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) return;
        // // console.log(e)

        const keyword = {
            id: nextID.current,
            content
        }

        setKeywords(keywords.concat(keyword))
        nextID.current += 1
        setContent("")

    }

    const handleFilter = (e) => {
        e.preventDefault()
        // // console.log(e)
        // // console.log(e.target.name)
        // // console.log(e.target.elements)
    }
    


    const handleFilterCancel = () => {
        props.setFilterOpen(false)
    }

    const handleFilterApply = () => {
        const filterData = {
            projectID:filterProjectID,
            category:filterCategory,
            discipline:filterDiscipline,
            unit:filterUnit,
            area:filterArea,
            issuedBy:filterIssuedBy,
            drawing:filterDrawing, // not punchlist data
            tagNumber:filterTag,
            keyword:keywords,
            difficultyB:difficultyB,
            difficultyA:difficultyA,
            scheduleImpactB:scheduleImpactB,
            scheduleImpactA:scheduleImpactA,
            costImpactB:costImpactB,
            costImpactA:costImpactA
        }
        props.setFilterOpen(false)
        props.setDataForFilter(filterData)
        // // console.log(filterData)
    }

    // const [filterProjectID, setFilterProjectID] = useState("");
    // const [filterCategory, setFilterCategory] = useState("");
    // const [filterDiscipline, setFilterDiscipline] = useState("");
    // const [filterUnit, setFilterUnit] = useState("");
    // const [filterArea, setFilterArea] = useState("");
    // const [filterIssuedBy, setFilterIssuedBy] = useState("");
    // const [filterDrawing, setFilterDrawing] = useState("");
    // const [filterTag, setFilterTag] = useState("");
    // const [difficultyB, setDifficultyB] = useState("");
    // const [difficultyA, setDifficultyA] = useState("");
    // const [scheduleImpactB, setScheduleImpactB] = useState("");
    // const [scheduleImpactA, setScheduleImpactA] = useState("");
    // const [costImpactB, setCostImpactB] = useState("");
    // const [costImpactA, setCostImpactA] = useState("");


    return (
        <>
            <div style={{padding:'10px'}}>
                <form 
                onSubmit={handleFilter}
                >
                {/* {JSON.stringify(Object.values(props.boardAllData))} */}
                {/* {getProjectID.map(a => JSON.stringify(a.projectID))} */}
                {/* {JSON.stringify(getProjectID?.projectName)} */}
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Project ID</div>
                    {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                    <div style={{width: '70%'}}>
                        <select name="filterProjectID" id="filterProjectID" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {getProjectID?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.projectName}</option>

                            )}
                        </select>

                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Category</div>
                    <div style={{width: '70%'}}>
                        <select name="filterCategory" id="filterCategory" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {getCategory?.map((v, i)=>
                                <option value={v.category}>{v.category} {v.categoryName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Discipline</div>
                    <div style={{width: '70%'}}>
                        <select name="filterDiscipline" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {getDiscipline?.map((v, i)=>
                                <option value={v.discipline}>{v.discipline} {v.disciplineName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Unit</div>
                    <div style={{width: '70%'}}>
                        <select name="filterUnit" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {getUnit?.map((v, i)=>
                                <option value={v.unit}>{v.unit} {v.unitName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Area</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {getArea?.map((v, i)=>
                                <option value={v.area}>{v.area} {v.areaName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Issued By</div>
                    <div style={{width: '70%'}}>
                        <select name="filterIssuedBy" className="filterSelect" onChange={handleChange}>
                            <option value=""></option>
                            {Array.from(issuedByData)?.map((v, i)=>
                                <option value={v}>{v}</option>
                            )}
                        </select> 
                    </div>
                </div>
                {/* getDrawing */}
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Drawing No</div>
                    <div style={{width: '70%'}}>
                        <select name="filterDrawing" className="filterSelect" onChange={handleChange}>
                        <option value=""></option>
                            {getDrawing?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.drawingNo}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Tag Number</div>
                    <div style={{width: '70%'}}>
                        <select name="filterTag" className="filterSelect" onChange={handleChange}>
                        <option value=""></option>
                            {Array.from(tagNumberData)?.map((v, i)=>
                                    <option value={v}>{v}</option>
                                )}
                        </select>
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Keyword</div>
                    <div style={{width: '70%'}}>
                        <form>
                            <input 
                                className="filterInput"
                                type="text" 
                                name="text"
                                value={content}
                                onChange={handleChangeKey}  
                                style={{width:'170px'}}
                            />
                            {/* <input type="submit" onClick={handleSubmit} value="+" style={{fontSize:'15px'}} /> */}
                            <AddCircleOutlineIcon 
                                fontSize="small" 
                                style={{paddingTop:'7px', cursor: 'pointer'}} 
                                onClick={handleSubmit}
                            />
                            {/* <button onClick={handleSubmit}>+</button> */}
                        </form>
                        {keywords.map((v, i)=> <span key={v.id}><Chip size="small" label={v.content} /></span>)}
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '60%'}}>Difficulty(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="difficultyB" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="difficultyA" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '60%'}}>Schedule Impact(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="scheduleImpactB" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="scheduleImpactA" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '60%'}}>Cost Impact(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="costImpactB" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="costImpactA" className="filterInput" style={{width: "40px"}} onChange={handleChange} />
                    </div>
                </div>

                <hr></hr>
                <div style={{display:'flex'}}>
                <button style={{width: '50%', margin:'10px'}} className="filterCancelButton" onClick={handleFilterCancel} >cancel</button>
                <button style={{width: '50%', margin:'10px'}} 
                    className="filterapplyButton" 
                    type="submit" 
                    onClick={handleFilterApply}
                >apply</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default PunchlistFilter;