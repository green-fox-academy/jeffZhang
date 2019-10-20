import React from 'react'
import styles from './ThumbnailList.module.css'

import Thumbnail from '../Thumbnail/Thumbnail'

function ThumbnailList(props) {
  const { imagesMeta, handleSelect } = props

  return (
    <div className={styles['thumbnail-list']}>
      {imagesMeta.map((meta, index) => (
        <Thumbnail
          key={meta.id}
          meta={meta}
          handleSelect={handleSelect}
          index={index}
        />
      ))}
    </div>
  )
}

export default ThumbnailList
