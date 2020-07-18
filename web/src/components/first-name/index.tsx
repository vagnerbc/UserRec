import React from 'react'
import { useTranslation } from "react-i18next";

const placeholder = 'FirstName'

function FirstName() {
    const {t} = useTranslation()
    return (
        <input type="text" placeholder={t(placeholder)} />
    )
}

export default FirstName
