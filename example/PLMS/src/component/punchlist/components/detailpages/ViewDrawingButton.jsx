import React, {useEffect, useRef, useState} from 'react';
import './styles/viewdrawingbutton.css'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import { useRefresh } from 'react-admin'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ViewDrawingButton = (props) => {
    const refresh = useRefresh()

    const [open, setOpen] = React.useState(false);
    const [getPunchloc, setGetPunchloc] = useState([]);
    const [xPix, setXpix] = useState([]);
    const [yPix, setYpix] = useState([]);
    const urlPunchloc = 'http://54.180.147.184:5000/punchlist/punchlic/?range=[0, 24]';

    useEffect(()=> {
        var targetX = ''
        var targetY = ''
        if(getPunchloc.length) {
            getPunchloc.map(rw => {
                if(rw.punchID === props.dataOne?.punchID){
                    targetX = parseInt(rw.xPixel*100)
                    targetY = parseInt(rw.yPixel*100)
                }
            })
            setXpix(targetX)
            setYpix(targetY)
            // setImageNameDB(targetXY) 
        }
        return () => {
            setXpix([])
            setYpix([])
        }
    }, [getPunchloc])



    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [imageNameDB, setImageNameDB] = useState('');
    const [getDrawing, setGetDrawing] = useState([]);

    const urlDrawing = 'http://54.180.147.184:5000/punchlist/drawing/?range=[0, 24]';

    useEffect(()=> {
        axios.get(urlPunchloc)
        .then((res)=> setGetPunchloc(res.data.result))
        .catch(err => console.log(err))
        axios.get(urlDrawing)
        .then((res)=> setGetDrawing(res.data.result))
        .catch(err => console.log(err))  
    }, [open])
    useEffect(()=> {
        var targetData = ''
        if(getDrawing.length) {
            getDrawing.map(rw => {
                if(rw.projectID === props.dataOne?.projectID){
                    targetData=rw.drawingNo
                }
            })
            setImageNameDB(targetData) 
        }
    }, [getDrawing])

    const [drawingImage, setDrawingImage] = useState('');
    useEffect(()=> {
        // console.log(imageNameDB)
        setDrawingImage(`http://54.180.147.184:5000/drawings/pdfs/${imageNameDB}.png`)
        refresh()
    }, [imageNameDB])

    const handleCancelButton = () => {
        setOpen(false);
    }

    return (
        <>
            <button className="ViewDrawingButton" onClick={handleOpen}>
                View Drawing
            </button>
            <Dialog 
                onClose={handleClose} 
                aria-labelledby="simple-dialog-title"
                maxWidth="xl" 
                // fullWidth={true}
                open={open}>
                <div style={{width:'850px', height:'620px',}}>
                    <DialogTitle id="simple-dialog-title" style={{display:"flex", justifyContent:'center'}}>View Drawing</DialogTitle>
                    <div style={{position:'relative', width:'800px', height:'500px'
                    // , justifyContent:'center'
                    }}>
                        {(xPix===0 || xPix===undefined || xPix==='')?<>Not location</>:<></>}
                        <div style={{position:'absolute', left:`${xPix}%`, top:`${yPix}%`}}>
                        <LocationOnIcon  color='error' />
                        </div>
                        {/* <p style={{position:'absolute', left:'50%'}}>aaa</p> */}
                        <img 
                        // src={`http://54.180.147.184:5000/drawings/pdfs/${imageNameDB}.png`} 
                        style={{}}
                        src={drawingImage} 
                        alt="" width="100%" height="500px" />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{width: '70%', margin:'10px'}} 
                             // className="filterapplyButton" 
                             // type="submit" 
                             // onClick={handleApplyButton}
                         ></div>
                        <button style={{width: '30%', margin:'10px'}} className="filterCancelButton" 
                        onClick={handleCancelButton}
                        >cancel</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ViewDrawingButton;