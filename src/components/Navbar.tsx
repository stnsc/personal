import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={'/'} className="navbar-back flex">
          <i className="bi bi-caret-left-fill"></i>
          <img src="/watermark.png" alt="Back" style={{ width: 70 + 'px' }} />
        </Link>
      </motion.div>
    </div>
  )
}
