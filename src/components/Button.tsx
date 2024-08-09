import 'bootstrap-icons/font/bootstrap-icons.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  text: string
  href: string
  icon: string
}

export default function Button({ text, href, icon }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Link className="button" to={href}>
        <i className={icon + ' icon'}></i>
        {text}
      </Link>
    </motion.div>
  )
}
