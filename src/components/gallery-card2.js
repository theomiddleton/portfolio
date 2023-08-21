import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard2 = (props) => {
  return (
    <>
      <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
        <div className="gallery-card2-container">
          <div className="gallery-card2-container1">
            <h2 className="gallery-card2-text">{props.title}</h2>
            <span className="gallery-card2-text1">{props.description}</span>
            <span className="gallery-card2-text2">SHOW MORE</span>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="gallery-card2-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card2-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card2-container {
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #00000096;
          }
          .gallery-card2-container:hover {
            opacity: 1;
          }
          .gallery-card2-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card2-text {
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-card2-text1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-card2-text2 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .gallery-card2-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .gallery-card2-root-class-name {
            flex: 1;
          }

          .gallery-card2-root-class-name4 {
            flex: 1;
            height: 100%;
          }

          @media (max-width: 767px) {
            .gallery-card2-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-card2-container {
              max-width: auto;
            }
            .gallery-card2-image {
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

GalleryCard2.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imageAlt: 'image',
  title: 'Project Title',
  rootClassName: '',
  imageSrc:
    '/pictures/lgaoon.jpg',
}

GalleryCard2.propTypes = {
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default GalleryCard2
