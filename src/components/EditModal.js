import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function EditModal(props) 
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let [text, setText] = React.useState();
    let handleText = (event) => {
        setText(event.target.value);
    }

    let handleSubmit = () => {
        props.submit(text);
    }

    React.useEffect(()=>{
        setText(props.content);
    },[]);

    return (
    <div>
        <Button variant="contained" onClick={handleOpen}>{props.text}</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.text}
            </Typography>
            <TextField 
            sx={{ marginY : "10px", width : "100%" }} 
            id="outlined-basic" label={props.text+" text"} 
            variant="outlined" 
            value={text}
            onChange={handleText}
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
        </Modal>
    </div>
    );
}

export default EditModal;