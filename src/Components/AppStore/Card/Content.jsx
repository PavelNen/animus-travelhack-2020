import { motion, useInvertedScale } from 'framer-motion'
import * as React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

export const Content = React.memo(({children}) => {
  const inverted = useInvertedScale()
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <p>{children}</p>
      <LoremIpsum p={3} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  )
})

