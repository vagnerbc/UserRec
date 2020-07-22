import './i18n'

import { useTranslation } from 'react-i18next'

export function Translate (value) {
  const { t } = useTranslation()

  return t(value)
}
