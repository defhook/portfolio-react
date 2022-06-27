import React from "react";



const Modal = ({ onClose, currentPhoto }) => {
  const { name, category, description, index, deploy, repo } = currentPhoto;
  return (
    //JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/screenshots/${category}/${index}.jpg`)} alt="me" />
        <p>{description}</p>
         <a href={repo} target="_blank"  rel="noreferrer"> View Code</a>
     
         <a href={deploy} target="_blank"  rel="noreferrer"> Demo Link</a>
         <br/>
        <button onClick={onClose} type="button">Close me!</button>
      </div>
    </div>
  );
}

export default Modal;
