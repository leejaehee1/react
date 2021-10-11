import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import "./styles/PunchlistFilter.css";
import Chip from '@material-ui/core/Chip';



const PunchlistFilter = (props) => {

    const [getProjectID, setGetProjectID] = useState();
    const [getDiscipline, setGetDiscipline] = useState();
    const [getCategory, setGetCategory] = useState();
    const [getUnit, setGetUnit] = useState();
    const [getArea, setGetArea] = useState();
    const [getDrawing, setGetDrawing] = useState();


    
    const urlProjectID = 'http://localhost:5000/punchlist/project/?range=[0, 24]';
    const urlDiscipline = 'http://localhost:5000/punchlist/discipline/?range=[0, 24]';
    const urlCategory = 'http://localhost:5000/punchlist/category/?range=[0, 24]';
    const urlUnit = 'http://localhost:5000/punchlist/unit/?range=[0, 24]';
    const urlArea = 'http://localhost:5000/punchlist/area/?range=[0, 24]';
    const urlDrawing = 'http://localhost:5000/punchlist/drawing/?range=[0, 24]';
    
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

    const [keywords, setKeywords] = useState([]);
    const [content, setContent] = useState();
    const nextID = useRef(0);

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) return;
        // console.log(e)

        const keyword = {
            id: nextID.current,
            content
        }

        setKeywords(keywords.concat(keyword))
        nextID.current += 1
        setContent("")

    }

    // if(proData
    return (
        <>
            <div style={{padding:'10px'}}>
                {/* {JSON.stringify(Object.values(props.boardAllData))} */}
                {/* {getProjectID.map(a => JSON.stringify(a.projectID))} */}
                {/* {JSON.stringify(getProjectID?.projectName)} */}
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Project ID</div>
                    {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                    <div style={{width: '70%'}}>
                        <select name="filterProjectID" className="filterSelect">
                            {getProjectID?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.projectName}</option>

                            )}
                        </select>

                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Category</div>
                    <div style={{width: '70%'}}>
                        <select name="filterCategory" className="filterSelect">
                            {getCategory?.map((v, i)=>
                                <option value={v.category}>{v.category} {v.categoryName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Discipline</div>
                    <div style={{width: '70%'}}>
                        <select name="filterDiscipline" className="filterSelect">
                            {getDiscipline?.map((v, i)=>
                                <option value={v.discipline}>{v.discipline} {v.disciplineName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Unit</div>
                    <div style={{width: '70%'}}>
                        <select name="filterUnit" className="filterSelect">
                            {getUnit?.map((v, i)=>
                                <option value={v.unit}>{v.unit} {v.unitName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Area</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" className="filterSelect">
                            {getArea?.map((v, i)=>
                                <option value={v.Area}>{v.area} {v.areaName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Issued By</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" className="filterSelect">
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
                        <select name="filterArea" className="filterSelect">
                            {getDrawing?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.drawingNo}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '30%'}}>Tag Number</div>
                    <div style={{width: '70%'}}>
                        <select name="filterTag" className="filterSelect">                          
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
                                onChange={handleChange}  
                                style={{width:'250px'}}
                            />
                            <input type="submit" onClick={handleSubmit} value="+" style={{fontSize:'15px'}} />
                            {/* <button onClick={handleSubmit}>+</button> */}
                        </form>
                        {keywords.map((v, i)=> <span key={v.id}><Chip size="small" label={v.content} /></span>)}
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '35%'}}>Difficulty(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="difficultyB" className="filterInput" style={{width: "40px"}} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="difficultyA" className="filterInput" style={{width: "40px"}} />
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '35%'}}>Schedule Impact(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="ScheduleImpactB" className="filterInput" style={{width: "40px"}} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="ScheduleImpactA" className="filterInput" style={{width: "40px"}} />
                    </div>
                </div>
                <div style={{display:'flex', padding:'3px'}}>
                    <div style={{width: '35%'}}>Cost Impact(1-5)</div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="CostImpactB" className="filterInput" style={{width: "40px"}} />
                    </div>
                    <div style={{width: '20%'}}>
                        <input type="text" name="CostImpactA" className="filterInput" style={{width: "40px"}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PunchlistFilter;