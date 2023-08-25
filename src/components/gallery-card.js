import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard1 = (props) => {
  return (
    <>
      <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="eager"
          className="gallery-card1-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card1-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card1-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .gallery-card1-root-class-name {
            flex: 1;
          }
          .gallery-card1-root-class-name1 {
            top: 8px;
            flex: 1;
            left: 8px;
            width: 100%;
            height: 98.5%;
            position: absolute;
          }

          .gallery-card1-root-class-name4 {
            top: 8px;
            flex: 1;
            left: 8px;
            width: 100%;
            height: 98.5%;
            position: absolute;
          }

          .gallery-card1-root-class-name6 {
            flex: 1;
          }

          .gallery-card1-root-class-name9 {
            top: 8px;
            flex: 1;
            left: 8px;
            width: 100%;
            height: 98.5%;
            position: absolute;
          }
          .gallery-card1-root-class-name10 {
            flex: 1;
          }

          @media (max-width: 767px) {
            .gallery-card1-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-card1-image {
              top: 0px;
              left: 0px;
              right: auto;
              bottom: auto;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard1.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imageAlt: 'image',
  title: 'Project Title',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
}

GalleryCard1.propTypes = {
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default GalleryCard1
