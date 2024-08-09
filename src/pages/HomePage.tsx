import Button from '../components/Button.tsx'
import { motion } from 'framer-motion'

const pageVariant = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const pageDuration = {
  duration: 0.5,
}

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageDuration}
    >
      <div className="screen">
        <div className="mainmenu">
          <div className="logo" />

          <div className="buttons">
            <Button
              text={'About Me'}
              href={'/about'}
              icon={'bi bi-person-fill'}
            ></Button>
            <Button
              text={'nelexium'}
              href={'https://github.com/nelexium'}
              icon={'bi bi-github'}
            ></Button>
            <Button
              text={'stnsc'}
              href={'https://github.com/stnsc'}
              icon={'bi bi-github'}
            ></Button>
            <Button
              text={'Personal Projects'}
              href={'/projects'}
              icon={'bi bi-folder-fill'}
            ></Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
