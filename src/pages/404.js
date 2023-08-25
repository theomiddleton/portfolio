import React from 'react'
import Head from 'next/head'

import styles from '../styles/404.module.css'

const NotFound = (props) => {
  return (
    <>
    <div className={styles['container']}></div>
      <div className={styles["not-found-container"]}>
        <Head>
          <title>404 - Not Found</title>
        </Head>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <div className={styles["not-found-container1"]}>
          <h1 className={styles["not-found-text1"]}>404</h1>
        </div>
        <div className={styles["not-found-container2"]}>
          <h2 className={styles["not-found-text2"]}>
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </h2>
        </div>
      </div>
    </>
  )
}

export default NotFound
