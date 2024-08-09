import Button from '../components/Button.tsx'

export default function Home() {
  return (
    <>
      <div className="screen">
        <div className="mainmenu">
          <img
            className="logo"
            src="/longtransparent.png"
            alt="nelexium logo"
          />
          <div className="buttons">
            <Button
              text={'About Me'}
              href={'#'}
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
              href={'#'}
              icon={'bi bi-folder-fill'}
            ></Button>
          </div>
        </div>
      </div>
    </>
  )
}
