import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '@/styles/home.module.css'
import styles from '@/styles/upload.module.css'

const Upload = (props: { rootClassName: string | number; heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; textinput_placeholder: string | undefined; text1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; button: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <h1 className={styles['text']}>{props.heading}</h1>
        <div className={styles['container2']}>
          <svg viewBox="0 0 1097.142857142857 1024" className={styles['icon']}>
            <path d="M731.429 493.714c0-4.571-1.714-9.714-5.143-13.143l-201.143-201.143c-3.429-3.429-8-5.143-13.143-5.143-4.571 0-9.714 1.714-13.143 5.143l-200.571 200.571c-3.429 4-5.714 8.571-5.714 13.714 0 10.286 8 18.286 18.286 18.286h128v201.143c0 9.714 8.571 18.286 18.286 18.286h109.714c9.714 0 18.286-8.571 18.286-18.286v-201.143h128c10.286 0 18.286-8.571 18.286-18.286zM1097.143 658.286c0 121.143-98.286 219.429-219.429 219.429h-621.714c-141.143 0-256-114.857-256-256 0-99.429 57.714-189.714 147.429-231.429-0.571-8.571-1.143-16.571-1.143-24.571 0-161.714 130.857-292.571 292.571-292.571 118.857 0 225.714 72 270.857 181.714 26.286-22.857 60-35.429 94.857-35.429 80.571 0 146.286 65.714 146.286 146.286 0 28-8 55.429-23.429 78.857 99.429 23.429 169.714 112 169.714 213.714z"></path>
          </svg>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className={` ${styles['textinput']} ${projectStyles['input']} `}
          />
          <span className={styles['text1']}>{props.text1}</span>
          <button
            type="button"
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            {props.button}
          </button>
          <span className={styles['text2']}>{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Upload.defaultProps = {
  heading: 'Upload',
  textinput_placeholder: 'placeholder',
  button: 'Upload',
  text: 'Images up to 16MB, max 1',
  text1: 'Choose files or drag and drop',
  rootClassName: '',
}

Upload.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Upload
