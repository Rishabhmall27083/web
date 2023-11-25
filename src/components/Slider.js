// import React, { useState, useEffect } from 'react';
// import posImage7 from '../Images/PJL01496.JPG'

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     <img src={posImage7} alt=''/>,
//     "https://th.bing.com/th/id/R.f0bf8e02f896df75d00f0d66836a25af?rik=CnZzNMgG6igAew&riu=http%3a%2f%2fwww.sssutms.co.in%2fcms%2fAreas%2fWebsite%2fFiles%2fSlide%2fCampus.jpg&ehk=U4z%2f0K8va0m0%2f0so1Em2GSxbYS1isQFEvodz5ZL9lik%3d&risl=&pid=ImgRaw&r=0",
//     "https://th.bing.com/th/id/R.19e4d53c1c877b98a7c2f8ebe986e899?rik=jFtmOMfYBmSreQ&riu=http%3a%2f%2fwww.sssutms.co.in%2fcms%2fAreas%2fWebsite%2fFiles%2fGallery%2f1%2fSSSUTMS_Building(8).jpg&ehk=nRw7gacby82ffWX6wSrVFDpyEgwg6qofcHouFdxp4kA%3d&risl=&pid=ImgRaw&r=0",
  


//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Calculate the next index in a cyclic manner
//       setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Adjust the interval as needed (in milliseconds)

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, []);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   return (
//     <div>
//       <div
//         id="carouselExampleCrossfade"
//         className="carousel slide carousel-fade"
//         data-mdb-ride="carousel"
//         data-mdb-interval="false" // Disable automatic sliding
//       >
//         {/* ... Your carousel-indicators and carousel-inner code ... */}
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
//               <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-prev" type="button" onClick={handlePrev}>
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" onClick={handleNext}>
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//         <button className="carousel-control-next" type="button" onClick={handleNext}>
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from 'react';
import posImage7 from '../Images/123.png';
import posImage8 from '../Images/SOD-BUILDING.jpg';
import posImage10 from '../Images/campus.jpg';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage7} alt=''/>,
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage8} alt=''/>,
    <img style= {{width:'1700px',height:'750px'}} key={0} src={posImage10} alt=''/>,
    
    
    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index in a cyclic manner
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
        data-mdb-interval="false" // Disable automatic sliding
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              {typeof slide === 'string' ? (
                // <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
                <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />

              ) : (
                slide
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;








