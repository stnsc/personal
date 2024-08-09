import 'bootstrap-icons/font/bootstrap-icons.css'

interface Props {
  text: string
  href: string
  icon: string
}

export default function Button({ text, href, icon }: Props) {
  return (
    <>
      <a className="button" href={href}>
        <i className={icon + ' icon'}></i>
        {text}
      </a>
    </>
  )
}
