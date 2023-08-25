import React from 'react'
import Head from 'next/head'

import React from 'react'

import styles from '../styles/admin.module.css'

const Admin = (props) => {
  return (
    <div className={styles['container']}>
      <h1>Upload</h1>
      <div className="admin-container1"></div>
      <div className="admin-container2">
        <button type="submit" className="admin-button button">
          Upload
        </button>
      </div>
    </div>
  )
}

export default Admin
