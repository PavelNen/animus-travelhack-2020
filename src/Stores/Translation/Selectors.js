import React from 'react'
import { useSelector } from 'react-redux'

const useLang = props => {
  const { lang } = useSelector(state => state.translation)
  // const lang = 'RU'
}
