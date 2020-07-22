import React from 'react'
import { Translate } from '@user-rec/internacionalization'

const placeholder = 'FirstName'

function FirstName () {
  return (
    <input type="text" placeholder={Translate(placeholder)} />
  )
}

export default FirstName
