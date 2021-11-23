import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import RecipeReviewCardModal from './RecipeReviewCardModal';

import axios from 'axios';


// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [getPhotos, setGetPhotos] = useState([]);
  const [imagePathList, setImagePathList] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const urlPhotos = 'http://localhost:5000/punchlist/photos/?range=[0, 24]';

  useEffect(() => {
    axios.get(urlPhotos)
    .then((res)=> setGetPhotos(res?.data.result))
    .catch(err => console.log(err))
  }, [props])
  useEffect(()=> {
    const sampleImagePathList = []
    if(getPhotos.length) {
        getPhotos.forEach(rw => {
            if(rw.punchID === props.rowData?.punchID && rw.punchStep === props.punchStep){
                sampleImagePathList.push({label: rw.punchID ,
                    imagePath :rw.imagePath})
                }
            })
      }
      setImagePathList(sampleImagePathList)
    }, [getPhotos, props.punchStep, props.rowData?.punchID])

    useEffect(()=> {
        setImageUrl(`http://localhost:5000/${imagePathList[0]?.imagePath.slice(7)}`)
    }, [imagePathList])
    
    // // console.log(imagePathList)
    const [imageValidationtarget, setImageValidationtarget] = useState([])
    useEffect(()=> {
        // // console.log(imagePathList)
        // for(var index in imagePathList){
        //     // // console.log(imagePathList[index]["imagePath"])
        //     axios.get(`http://localhost:5000/${imagePathList[index]["imagePath"].slice(7)}`)
        //         .then((res)=> {
        //             // console.log(res);
        //             // // console.log(imageValidationtarget)
        //             var imageValidationList = [...imageValidationtarget, 1]
        //             setImageValidationtarget(imageValidationList)
        //         })
        //         .catch(err => {
        //             // console.log(2);
        //             var imageValidationList = [...imageValidationtarget, 0]
        //             setImageValidationtarget(imageValidationList)
        //         })
        // }
        // // console.log(imagePathList)
    }, [imagePathList])
  // // console.log(props.punchStep)
  // // console.log(props.rowData)
  return (
    <>
    {/* {JSON.stringify(getPhotos)} */}
    {/* {JSON.stringify(imagePathList)} */}
      <Card className={classes.root} onClick={handleOpen}>
        {/* <CardMedia
          className={classes.media}
          image={`http://localhost:5000/${imagePathList[0]["imagePath"].slice(7)}`}
          title="Paella dish"
        /> */}
        {/* {imageUrl} */}
        {imageValidationtarget}
        {(imagePathList.length)?
        <img
        className={classes.img}
        // src={tutorialSteps[activeStep].imgPath}
        width="100%"
        // height="100%"
        src={imageUrl}
        // alt={tutorialSteps[activeStep].label}
        alt={imagePathList?.label}
        />
        :
        <p>-Not Picture-</p>
        }
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {/* {body} */}
        <RecipeReviewCardModal 
            imageName={props.imageName} 
            setOpen={setOpen} 
            punchStep={props.punchStep}
            rowData={props.rowData}
          />
      </Modal>
    </>
  );
}
