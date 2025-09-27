import { motion, useInvertedScale } from 'framer-motion'
import * as React from 'react'

export const Content = React.memo(({children}) => {
  const inverted = useInvertedScale()
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <p>{children}</p>
    </motion.div>
  )
})

