import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal 
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClear}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        ariaHideApp={false}
        className = "modal"
        //className = modal makes the bg transparent
        //wait 200 ms to delete this reactDom element
        >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className = 'button'onClick = {props.handleClear}>Okay</button>
        </Modal>
)
//conditional rendering if props.selectedOption exists
//onrequestclose calls an event handler when esc key is pressed or mouse is cliked off of modal
//is Open tells you if modal should open based on boolean

export default OptionModal;

//real boolean values converst string to true and undefined to false