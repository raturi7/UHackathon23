import React, { useRef, useState } from "react";
import image from "../../Components/Images/Rectangle 13.png";
import "./Gallery.css";
import Heading from "../../Components/Heading/Heading";
import { useLocation } from "react-router-dom";
import img1 from "./IMAGES/img (1).avif";
import img2 from "./IMAGES/img (2).avif";
import img3 from "./IMAGES/img (3).avif";
import img4 from "./IMAGES/img (4).avif";
import img5 from "./IMAGES/img (5).avif";
import img6 from "./IMAGES/img (6).avif";
import img7 from "./IMAGES/img (7).avif";
import img8 from "./IMAGES/img (8).avif";
import img9 from "./IMAGES/img (9).avif";
import img10 from "./IMAGES/img (10).avif";
import img11 from "./IMAGES/img (11).avif";
import img12 from "./IMAGES/img (12).avif";
import img13 from "./IMAGES/img (13).avif";
import img14 from "./IMAGES/img (14).avif";
import img15 from "./IMAGES/img (15).avif";
import img16 from "./IMAGES/img (16).avif";
import img17 from "./IMAGES/img (17).avif";
import img18 from "./IMAGES/img (18).avif";
import img19 from "./IMAGES/img (19).avif";
import img20 from "./IMAGES/img (20).avif";

const Gallery = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);
  const ref1 = useRef();
  const modal = useRef();
  const [selectedImage, setSelectedImage] = useState(["","",""]); // Store the selected image

  let data = [
    [img3," The Victorious Champions","Amidst thunderous applause, we celebrated the victorious champions, honoring their remarkable achievements and recognizing their relentless pursuit of excellence that set them apart as shining beacons of success."],
    [img9,"The Exceptional Runner-Ups","Honoring the exceptional runner-ups, their talent and dedication inspired us all, leaving an indelible impact throughout the competition"],
    [img5,"Commending The Impressive Second Runner-Ups","Commending the impressive second runner-ups, their outstanding performance and unwavering determination left an unforgettable mark, inspiring us with their remarkable journey "],
    [img17,"The Winning Teams","Standing ovation to the winning teams, whose outstanding accomplishments and unwavering spirit of innovation have reshaped the landscape of success, leaving an indelible mark on this remarkable journey."],
    [img13,"A Guiding Light of Knowledge","A guiding light of knowledge and motivation, gracing our occasion with their esteemed presence, igniting intellects and molding the course of inventive endeavors"],
    [img6,"A beacon of wisdom","A beacon of wisdom and inspiration, illuminating our event with their presence, as they ignite minds and shape the path of innovation"],
    [img7,"Token of Gratitude","With deep appreciation, we expressed our heartfelt gratitude and presented a token of gratitude to our esteemed chief guests, acknowledging their wisdom, guidance, and unwavering support that had illuminated our path and enriched our event."],
    [img2,"The Educational Orchestrators","The educational orchestrators, guiding and nurturing young minds, fostering an environment of growth and inspiration, as they pave the way for tomorrow's leaders and innovators."],
    [img19,"Igniting a Collective Spirit0","An exuberant show of good faith and well wishes, igniting a collective spirit of innovation, collaboration, and boundless possibilities."],
    [img12,"The Discerning Jury","The discerning jury, unraveling brilliance, shaping the destiny of innovation with insightful judgment."],
    [img14,"Grace and Expression","A mesmerizing symphony of bodies, where rhythm and passion intertwine, painting the canvas of movement with grace and expression."],
    [img10,"A band of digital warriors","The masterminds behind the scenes, orchestrating creativity and precision, weaving together a seamless tapestry of inspiration and success"],
    [img8,"A passionate presenter","A passionate presenter, unveiling their project with unwavering enthusiasm, captivating the audience with their innovation and leaving a lasting impression of creativity in action"],
    [img11,"A United Force","A united force of innovators, standing on the precipice of brilliance, as they present their revolutionary project, igniting minds and leaving an indelible mark on the realm of possibilities."],
    [img15,"A Confident Participant","A confident participant, stepping into the spotlight, ready to showcase their project with fervor, leaving the audience inspired and amazed by their ingenuity and dedication."],
    [img16,"A Dynamic Ensemble","A dynamic ensemble of passionate minds, converging from diverse horizons, ready to unleash their creativity and immerse themselves in the exhilarating journey of discovery and collaboration"],
    [img4,"Immersed in the Event's Energy","A dynamic gathering of participants, immersed in the event's energy, exchanging ideas, showcasing talents, and fueling an atmosphere of innovation"],
    [img18,"Brimming with Excitement","A participant brimming with excitement, radiating enthusiasm and anticipation, eagerly diving into the event's vibrant atmosphere, ready to embark on an unforgettable journey of creativity and discovery"],
    [img1,"A Visionary Squad","A visionary squad, poised to unveil their groundbreaking creation, as they captivate the judges with their ingenuity and showcase the future in their hands."],
    [img20,"A Band of Digital Warriors","A band of digital warriors, forging innovation through lines of code, hacking through challenges to unlock a future of endless possibilities"]
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    modal.current.style.filter = "blur(4px) brightness(20%)";
  };

  const closeModal = () => {
    setSelectedImage([]);
    modal.current.style.filter = "none";
  };

  return (
    <div className="gallery-container pt-5">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={ref1}
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered"
          style={{ height: "max-content" }}
        >
          <div className="modal-content d-flex flex-wrap flex-row gap-4 justify-content-center">
            {selectedImage && (
              <img
                src={selectedImage[0]}
                className="modal-img"
                alt=""
                style={{ objectFit: "cover", maxHeight: "80vh" }}
              />
            )}
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
            <div className="modal-body d-flex flex-column p-0">
              <div className="modal-header p-0" style={{ border: "none" }}>
                <Heading text={selectedImage[1]} />
              </div>
              <p style={{ fontSize: "16px" }}>
                {
                  selectedImage[2]
                }
              </p>
              <p style={{ fontSize: "16px" }}>{"Date: DD/MM/YY"}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container pt-5 flex flex-col"
        style={{ display: "block" }}
      >
        <div
          className="d-flex flex-row gallery-box flex-wrap justify-content-center pt-5 px-3"
          ref={modal}
        >
          {data.map((element, index) => {
            return (
              <button
                type="button"
                onClick={() => {openModal(element) 
                  console.log(element)}}
                className="w-1/3 p-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                }}
                key={index}
              >
                <img src={element[0]} alt="" className="gallery-image" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
