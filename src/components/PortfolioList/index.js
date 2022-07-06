import React, { useState } from "react";
import Modal from "../Modal";

const PortfolioList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  
  console.log("category", category);
  const [photos] = useState([
    {
      name: "Dinero",
      category: "Portfolio",
      deploy: "https://defhook.github.io/dinero/",
      repo: "https://github.com/defhook/dinero",
    },
    {
      name: "Riddle Me This",
      category: "Portfolio",
      deploy: "https://morning-sierra-98445.herokuapp.com/",
      repo: "https://github.com/Rodrigo-Valencia/Riddle-Me-This",
    },
    {
      name: "Run Buddy",
      category: "Portfolio",
      deploy: "https://defhook.github.io/run-buddy/",
      repo: "https://github.com/defhook/run-buddy",
    },
    {
      name: "Pass",
      category: "Portfolio",
      deploy: "https://secure-river-32894.herokuapp.com/",
      repo: "https://github.com/defhook/pass"
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Allows us to toggle the state of the modal  */}
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
