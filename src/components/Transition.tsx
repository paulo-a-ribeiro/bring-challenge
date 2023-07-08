import { ReactNode, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CityContext } from '@/context/CityContext'

interface TransitionProps {
  children: ReactNode
}

const variants = {
  out: {
    opacity: 0,
    scale: 0.93,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
}

const transition = { duration: 0.5 }

export default function Transition(props: TransitionProps) {
  const { selectedCity } = useContext(CityContext)

  return (
    <motion.div
      key={selectedCity?.name}
      variants={variants}
      transition={transition}
      animate="in"
      initial="out"
      exit="out"
    >
      {props.children}
    </motion.div>
  )
}
