import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.tsx'

const pageVariant = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const pageDuration = {
  duration: 0.5,
}

export default function ProjectsPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageDuration}
    >
      <Navbar />
      <div className="contents">
        <h2>Projects Page</h2>
      </div>
    </motion.div>
  )
}
