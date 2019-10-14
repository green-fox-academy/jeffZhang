import React from 'react'

function Type(props) {
  let { name: typeName, checked: checkStatus } = props.type
  return (
    <li>
      <div>
        <input
          type="checkbox"
          id={typeName}
          name="type"
          checked={checkStatus}
          onChange={() => {}} //same reason as Star
        />
        <label htmlFor={typeName}>{typeName}</label>
      </div>
    </li>
  )
}

export default Type
