import { motion, useInvertedScale } from 'framer-motion'
import * as React from 'react'
import { ponaminaluService } from '../../../Services/ponaminaluService'
import { closeSpring } from './animations'

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor
}) => {
  const inverted = useInvertedScale()

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={ponaminaluService.getImage(500, 500, id)}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20, opacity: 0.3 } : { x: -pointOfInterest, y: 0, opacity: 0.5 }
        }
        transition={closeSpring}
      />
    </motion.div>
  )
}
