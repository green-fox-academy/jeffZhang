import React from 'react'
import styles from './Thumbnail.module.css'

function Thumbnail(props) {
  const { meta, index, handleSelect } = props
  let thumnnailURL = meta['urls']['thumb']
  let photographer = meta['user']['name']

  return (
    <div
      className={styles['thumbnail']}
      style={{
        backgroundImage: `url('${thumnnailURL}')`
      }}
      onClick={() => handleSelect(index)}
    >
      <div className={styles['tooltip']}>{photographer}</div>
    </div>
  )
}

export default Thumbnail
