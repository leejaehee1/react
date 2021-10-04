import React, {useRef} from 'react';
import Modal from '@material-ui/core/Modal';
import './styles/viewdrawingbutton.css'
import ComponentToPrint from './ViewDrawingButtonPrint';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Button from '@material-ui/core/Button';


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

    let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
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
                    {/* <ViewDrawingButtonPrint /> */}
                    {/* <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p>
                    <p>abcabcaaaaaaaaaaaaaaaaaabc</p> */}
                    <button>Print</button>
                    {/* <ReactToPrint
                        trigger={() => <a href="#">Print this out!</a>}
                        // trigger={() => <Button>Print this out!</Button>}
                        content={() => componentRef.current}
                    />
                    <ComponentToPrint ref={el => (componentRef = el)} /> */}
                    <div ref={componentRef}>
                        <ComponentToPrint />
                    </div>
                    <Button>Close</Button>
                    <Button onClick={handlePrint}>Print</Button>
                </div>
            </Modal>
        </>
    )
}

export default ViewDrawingButton;