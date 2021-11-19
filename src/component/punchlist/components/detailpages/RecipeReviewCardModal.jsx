import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CancelIcon from '@material-ui/icons/Cancel';

import axios from 'axios';



// Modal 
function rand() {
    // return Math.round(Math.random() * 20) - 10;
    return 0
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    width: 700,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  paper: {
    position: 'absolute',
    // width: 500,
    // height: 700,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RecipeReviewCardModal(props) {
  const classes = useStyles();

  const [getPhotos, setGetPhotos] = useState([]);
  const urlPhotos = 'http://54.180.147.184:5000/punchlist/photos/?range=[0, 24]';


  const [modalStyle] = React.useState(getModalStyle);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  useEffect(() => {
      axios.get(urlPhotos)
      .then((res)=> setGetPhotos(res.data.result))
      .catch(err => console.log(err))
    }, [])
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const clickCancel = () => {
        props.setOpen(false)
    }
    
    
    const [imagePathList, setImagePathList] = useState([]);
    
    useEffect(()=> {
        const sampleImagePathList = []
        if(getPhotos.length) {
            getPhotos.map(rw => {
                if(rw.punchID === props.rowData?.punchID && rw.punchStep === props.punchStep){
                    sampleImagePathList.push({label: rw.punchID ,
                        imagePath :rw.imagePath})
                    }
                })
            }
            setImagePathList(sampleImagePathList)
        }, [getPhotos])
        //   // console.log(props.punchStep)
        //   // console.log(props.rowData)
        //   // console.log(getPhotos)
        //   // console.log(imagePathList)
        //   // console.log(imagePathList[0]?.imagePath.slice(7))
    const [imageValidationtarget, setImageValidationtarget] = useState([])
    useEffect(()=> {
        // // console.log(imagePathList)
        for(var index in imagePathList){
            // // console.log(imagePathList[index]["imagePath"])
            axios.get(`http://54.180.147.184:5000/${imagePathList[index]["imagePath"].slice(7)}`)
                .then((res)=> {
                    // // console.log(1);
                    // // console.log(imageValidationtarget)
                    var imageValidationList = [...imageValidationtarget, 1]
                    setImageValidationtarget(imageValidationList)
                })
                .catch(err => {
                    // // console.log(2);
                    var imageValidationList = [...imageValidationtarget, 0]
                    setImageValidationtarget(imageValidationList)
                })
        }
    }, [imagePathList])

    useEffect(()=> {
        // // console.log('imageValidationtarget');
        // // console.log(imageValidationtarget);
    }, [imageValidationtarget])

    const maxSteps = imagePathList.length;
    return (
        <div style={modalStyle} className={classes.paper}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
    </Paper> */}
      <div style={{display:'flex'}}>
        <div style={{width:"95%"}}>
          <h3>{props.imageName}</h3> 
          {/* <p>{JSON.stringify(imagePathList[0]?.imagePath)}</p> */}
          {/* {JSON.stringify(imageValidationtarget)} */}
          {/* {(`http://54.180.147.184:5000/${imagePathList[activeStep]?.imagePath.slice(7)}`)?<>aaaaaaaaa</>:<>bbbbbbbbbbbbb</>} */}
        </div>
        <div>
          <CancelIcon style={{cursor: 'pointer'}} onClick={clickCancel} />
        </div>
      </div>
      {(imageValidationtarget.length)?
      <img
        className={classes.img}
        // src={tutorialSteps[activeStep].imgPath}
        src={`http://54.180.147.184:5000/${imagePathList[activeStep]?.imagePath.slice(7)}`}
        // alt={tutorialSteps[activeStep].label}
        alt={imagePathList?.label}
        />
      :
      <p>-empty-</p>
      }
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
