import React from 'react'
import styles from './ImageViewer.module.css'

import { APPENDED_PATH } from '../../lib/helpers'

function ImageViewer(props) {
  let selectedMeta = undefined
  let largePicURL = undefined

  const { imagesMeta, selectedImage, handleNext, handlePrevious } = props
  if (imagesMeta.length) {
    selectedMeta = imagesMeta[selectedImage]
    largePicURL = selectedMeta['urls']['raw'] + APPENDED_PATH
  }

  return (
    <div className={styles['white-board']}>
      <div className={`${styles['arrow-block']} ${styles['left-block']}`}>
        <div
          className={`${styles['arrow-sign']}`}
          onClick={handlePrevious}
        ></div>
      </div>

      <div
        className={largePicURL ? styles['image'] : styles['loading']}
        style={largePicURL && { backgroundImage: `url('${largePicURL}')` }}
      ></div>

      <div className={`${styles['arrow-block']} ${styles['right-block']}`}>
        <div
          className={`${styles['arrow-sign']} ${styles['arrow-sign-right']}`}
          onClick={handleNext}
        ></div>
      </div>
    </div>
  )
}

export default ImageViewer
