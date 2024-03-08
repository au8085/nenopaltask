import React, { useCallback, useState } from "react";
import "./Home.css";
import mockData from "../../mockData";
import ModalComponent from "../modal/modal";

const Home = () => {
  const [userData, setUserData] = useState(mockData);
  const [toggle, setToggle] = useState(new Array(mockData.length).fill(false));
  const [isOpen, setIsOpen] = useState(false);
  const [initValue, setInitValue] = useState({}); // Initialize with an empty object
  const [currentIndex, setCurrentIndex] = useState(null);

  const toggleHeartHandler = (index) => {
    const updatedToggle = [...toggle];
    updatedToggle[index] = !updatedToggle[index];
    setToggle(updatedToggle);
  };

  const deleteDataHandler = (index) => {
    if (userData.length > 1) {
      const newData = [...userData];
      newData.splice(index, 1);
      setUserData(newData);
    } else {
      alert("Can not Remove the last item from the list!");
    }
  };

  const toggleModal = useCallback((index) => {
    setCurrentIndex(index);
    setInitValue(userData[index]);
    setIsOpen(!isOpen);
  },[])
  
  const closeModal = ()=>{
    setIsOpen(!isOpen); 
  }

  const handleSave = useCallback((updatedData) => {
    if (currentIndex && updatedData) {
      const updatedUserData = [...userData];
      updatedUserData[currentIndex] = updatedData;
      setUserData(updatedUserData);
      setIsOpen(false);
    }
  }, [currentIndex, userData]);

  return (
    <div className="container">
      {userData.map((person, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <img src={person.image} alt={person.name || ""} />
          </div>
          <div className="card-body">
            <div>
              <h5>{person.name || ""}</h5>
              <p>
                <i className="fas fa-envelope mg-right"></i>{" "}
                {person.email || ""}
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> {person.phone || ""}
              </p>
              <p>
                <i className="fas fa-globe"></i>{" "}
                <a href={person.website}>{person.website || ""}</a>
              </p>
            </div>
          </div>
          <div className="card-footer">
            <span
              className="icon"
              onClick={() => toggleHeartHandler(index)}
            >
              {!toggle[index] ? (
                <i className="far fa-heart"></i>
              ) : (
                <i className="fas fa-heart"></i>
              )}
            </span>
            <span className="separator"></span>
            <span className="icon" onClick={() => toggleModal(index)}>
              <i className="far fa-edit"></i>
            </span>
            <span className="separator"></span>
            <span
              className="icon"
              onClick={() => deleteDataHandler(index)}
            >
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        </div>
      ))}
      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
        onSave={handleSave}
        initialValue={initValue}
      />
    </div>
  );
};

export default Home;
