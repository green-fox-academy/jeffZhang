import React, { useState, useEffect } from 'react'
import styles from './App.module.css'

import ImageViewer from '../ImageViewer/ImageViewer'
import ThumbnailList from '../ThumbnailList/ThumbnailList'

import { getImagesURL } from '../../lib/helpers'

function App() {
  const [imagesMeta, setImagesMeta] = useState([])
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchImagesMeta = () =>
      fetch(getImagesURL())
        .then(response => response.json())
        .then(data => {
          console.log('2nd')
          setImagesMeta(data)
        })
    fetchImagesMeta()
  }, [])

  const handleNext = () => {
    selectedImage === imagesMeta.length - 1
      ? setSelectedImage(0)
      : setSelectedImage(selectedImage + 1)
  }

  const handlePrevious = () => {
    selectedImage === 0
      ? setSelectedImage(imagesMeta.length - 1)
      : setSelectedImage(selectedImage - 1)
  }

  const handleSelect = index => {
    setSelectedImage(index)
  }

  return (
    <div className={styles['app']}>
      <ImageViewer
        imagesMeta={imagesMeta}
        selectedImage={selectedImage}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <ThumbnailList imagesMeta={imagesMeta} handleSelect={handleSelect} />
    </div>
  )
}

export default App
