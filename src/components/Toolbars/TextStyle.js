import React from 'react'
import DropDown from '../DropDown'

const TextStyle = () => {
  return (
    <DropDown
      value="Heading 1"
      options={[
        "Heading 1",
        "Heading 2",
        "Heading 3",
        "Heading 4",
        "Heading 5",
        "Heading 6",
      ]}
    />
  )
}

export default TextStyle
