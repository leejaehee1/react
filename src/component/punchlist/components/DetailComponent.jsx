// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';



const images = [
  {
    url: '/static/images/export-all.png',
    title: 'export-all',
    width: '100%'
  },
  {
    url: '/static/images/export-selected.png',
    title: 'export-selected',
    width: '40%'
  },
  {
    url: '/static/images/report-selected.png',
    title: 'report-selected',
    width: '40%'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    position: 'relative',
    height: 30,
    margin: '10px 10px 20px 0',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
  },
  imageSrc: {
    width: '130px',
    height: '30px',
    backgroundSize: 'cover',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    borderRadius: 8,
  },
  imageTitle: {
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
    borderRadius: 8,
  },
}));


function DetailComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <img src="./static/images/export-all.png" alt="asdf" /> */}
      {images.map((image) => (
        <ButtonBase
          // focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            // width: image.width,
            margin: '10 10 0 0',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
        </ButtonBase>
      ))}   

    </div>
  )
}

export default DetailComponent;