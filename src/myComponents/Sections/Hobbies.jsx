import React from "react";

import "./Hobbies.scss";
import ScrollAnimation from "react-animate-on-scroll";
// import Gallery from "react-grid-gallery";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const imagesArray1 = importAll(
//   require.context("assets/img/gallery/", false, /\.(png|jpe?g|svg)$/)
// );
// const imagesArray2 = importAll(
//   require.context("assets/img/galleryCompressed/", false, /\.(png|jpe?g|svg)$/)
// );
// const IMAGES = [];
// for(let i = 0; i < imagesArray1.length; i++) {
//   let imgObject = {
//     src: imagesArray1[i],
//     thumbnail: imagesArray2[i],
//     thumbnailWidth: 200,
// thumbnailHeight: 200,
// tags: [
//         { value: "Ocean", title: "Ocean" },
//         { value: "People", title: "People" }
//       ],
// caption: "Boats (Jeshu John - designerspics.com)"
// };
// IMAGES.push(imgObject);
// }

class Hobbies extends React.Component {
  render() {
    return (
      <div id="hobbies-section">
        <div className="row hobbies-container">
          <div className="col-12 hobbies-heading">
            <ScrollAnimation
              animateOnce={true}
              offset={0}
              delay={1}
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>GALLERY</h1>
            </ScrollAnimation>
          </div>
          <div className="col-12 hobbies-gallery">
            {/* <Gallery 
            images={IMAGES}
            rowHeight= {300}
            enableImageSelection={false}
             /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
