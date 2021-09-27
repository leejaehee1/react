import React from 'react';
import Modal from '@material-ui/core/Modal';
import './styles/viewdrawingbutton.css'

function rand() {
    return Math.round(Math.random() * 20) - 10;
    // return 0
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

const ViewDrawingButton = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
            <button className="ViewDrawingButton" onClick={handleOpen}>
                View Drawing
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {/* {body} */}
                <div style={modalStyle} className="page">
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                </div>
            </Modal>
        </>
    )
}

export default ViewDrawingButton;