import React, { useState } from 'react';
import UploadForm from './Pictures/comps/UploadForm';
import ImageGrid from './Pictures/comps/ImageGrid';
import Modal from './Pictures/comps/Modal';

const ViewPictures = () =>{
    // return (
    //     <div>
    //         <br/>
    //         <center><h1>Haircut Pictures</h1></center>
    //         <div className="picture-container">
    //         <center>
    //             <div className="pic1">
    //                 <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic2">
    //             <img className="pic1" src="https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic3">
    //             <img className="pic1" src="https://i.imgur.com/dc1PU8j.jpg" alt="cat"/>
    //             </div>
    //         </center>
    //         </div>
    //         <br/><br/><br/>
    //         <div className="picture-container">
    //         <center>
    //             <div className="pic1">
    //             <img className="pic1" src="https://freeaddon.com/wp-content/uploads/2017/12/cute-cats-0.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic2">
    //             <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic3">
    //             <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //         </center>
    //         </div>
    //         <br/><br/><br/>
    //         <div className="picture-container">
    //         <center>
    //             <div className="pic1">
    //             <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic2">
    //             <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //             <div className="pic3">
    //             <img className="pic1" src="https://i.pinimg.com/originals/8c/5d/c6/8c5dc61b7c71444ca37bc342020e7891.jpg" alt="cat"/>
    //             </div>
    //         </center>
    //         </div>

    //     </div>
        
        
    // );

const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}


export default ViewPictures;