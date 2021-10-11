import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';


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
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Project ID</div>
                    {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                    <div style={{width: '70%'}}>
                        <select name="filterProjectID" id="filterSelect">
                            {getProjectID?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.projectName}</option>

                            )}
                        </select>

                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Category</div>
                    <div style={{width: '70%'}}>
                        <select name="filterCategory" id="filterSelect">
                            {getCategory?.map((v, i)=>
                                <option value={v.category}>{v.category} {v.categoryName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Discipline</div>
                    <div style={{width: '70%'}}>
                        <select name="filterDiscipline" id="filterSelect">
                            {getDiscipline?.map((v, i)=>
                                <option value={v.discipline}>{v.discipline} {v.disciplineName}</option>

                            )}
                        </select>    
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Unit</div>
                    <div style={{width: '70%'}}>
                        <select name="filterUnit" id="filterSelect">
                            {getUnit?.map((v, i)=>
                                <option value={v.unit}>{v.unit} {v.unitName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Area</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" id="filterSelect">
                            {getArea?.map((v, i)=>
                                <option value={v.Area}>{v.area} {v.areaName}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Issued By</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" id="filterSelect">
                            {Array.from(issuedByData)?.map((v, i)=>
                                <option value={v}>{v}</option>
                            )}
                        </select> 
                    </div>
                </div>
                {/* getDrawing */}
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Drawing No</div>
                    <div style={{width: '70%'}}>
                        <select name="filterArea" id="filterSelect">
                            {getDrawing?.map((v, i)=>
                                <option value={v.projectID}>{v.projectID} {v.drawingNo}</option>
                            )}
                        </select> 
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Tag Number</div>
                    <div style={{width: '70%'}}>
                        <select name="filterTag" id="filterSelect">                          
                            {Array.from(tagNumberData)?.map((v, i)=>
                                    <option value={v}>{v}</option>
                                )}
                        </select>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '30%'}}>Keyword</div>
                    <div style={{width: '70%'}}>
                        <form>
                            <input 
                                id="filterInput"
                                type="text" 
                                name="text"
                                value={content}
                                onChange={handleChange}  
                            />
                            <input type="submit" onClick={handleSubmit} value="+" />
                            {/* <button onClick={handleSubmit}>+</button> */}
                        </form>
                        {keywords.map((v, i)=> <p key={v.id}>{v.id} {v.content}</p>)}
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '40%'}}>Difficulty(1-5)</div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="difficultyB" id="filterInput" />
                    </div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="difficultyA" id="filterInput" />
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '40%'}}>Schedule Impact(1-5)</div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="ScheduleImpactB" id="filterInput" />
                    </div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="ScheduleImpactA" id="filterInput" />
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{width: '40%'}}>Cost Impact(1-5)</div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="CostImpactB" id="filterInput" />
                    </div>
                    <div style={{width: '30%'}}>
                        <input type="text" name="CostImpactA" id="filterInput" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PunchlistFilter;