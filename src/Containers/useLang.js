import React from 'react'
import { useSelector } from 'react-redux'

const useLang = Component => props => {
  const { lang } = useSelector(state => state.translation)
  // const lang = 'RU'

  return (
    lang ? <Component lang={lang} {...props}/> : 'Loading...'
  )
}

useLang.propTypes = {}

export default useLang
