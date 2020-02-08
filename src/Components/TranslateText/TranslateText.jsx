import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Texts from 'Text'

const TranslateText = ({ point, lang }) => {
  const { lang: genLang } = useSelector(state => state.translation)

  const _lang = lang || genLang
  console.log(Texts[_lang][point])

  return (Texts[_lang][point])
}

TranslateText.propTypes = {
  point: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(
    ['RU', 'EN']
  ),
}

export default TranslateText
