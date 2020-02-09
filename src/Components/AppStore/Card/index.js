import * as React from 'react'
import { memo, useRef } from 'react'
import Button from '@material-ui/core/Button'
import { motion, useMotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInvertedBorderRadius } from '../utils/use-inverted-border-radius'
import { useScrollConstraints } from '../utils/use-scroll-constraints'
import { useWheelScroll } from '../utils/use-wheel-scroll'
import { closeSpring, openSpring } from './animations'
import { Content } from './Content'
import { Image } from './Image'
import { Title } from './Title'

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 60

export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    history,
    pointOfInterest = 100,
    backgroundColor = '#333333',
    card,
    openSnackbar,
  }) => {
    const y = useMotionValue(0)
    const zIndex = useMotionValue(isSelected ? 2 : 0)

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20)

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null)
    const constraints = useScrollConstraints(cardRef, isSelected)

    function checkSwipeToDismiss () {
      y.get() > dismissDistance && history.push('/')
    }

    function checkZIndex (latest) {
      if (isSelected) {
        zIndex.set(2)
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0)
      }
    }

    function handleSaveTicket (amount) {
      const tickets = JSON.parse(localStorage.getItem('saved_tickets')) || []
       tickets.push({
        id: card.id,
        title: card.title,
        description: card.description,
        event: card.subevents[0],
        categories: card.categories,
        alias: card.seo.alias,
        amount
      })

      localStorage.setItem('saved_tickets', JSON.stringify(tickets))

      openSnackbar()

      history.push('/')
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null)
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    )

    return (
      <li ref={containerRef} className={'card'}>
        <Overlay isSelected={isSelected}/>
        <div className={`card-content-container ${isSelected && 'open'}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              id={card.subevents[0].image}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            />
            <Title title={card.title} category={card.categories.map(({ title }) => title)} isSelected={isSelected}/>
            <Content>
              <div className={'card-content-buttons'}>
                <Button variant="contained" color="primary" onClick={() => handleSaveTicket(1)}>
                Дообавить в избранное
              </Button>
              </div>
                {card.description}
            </Content>
          </motion.div>
        </div>
        {!isSelected && <Link to={`${card.id}`} className={'card-open-link'}/>}
      </li>
    )
  },
  (prev, next) => prev.isSelected === next.isSelected
)

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className="overlay"
  >
    <Link to="/"/>
  </motion.div>
)
