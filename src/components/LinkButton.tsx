import Image from 'next/image'
import Link from 'next/link'

interface LinkButtonProps {
  intr: boolean
  href: string
  styles?: string
  alt: string
  src: string
  text: string
  w: number
  h: number
}

const LinkButton = (props: LinkButtonProps) => {
  switch (props.intr) {
    case true:
      return (
        <Link
          href={props.href}
        >
          <a
            className={`${props.styles} flex justify-center content-center text-slate-200 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
            aria-current="page"
          >
            <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <Image
                className="fill-current w-4 h-4 mr-2"
                width={props.w}
                height={props.h}
                alt={props.alt}
                src={props.src}
                priority={true}
              /> 
              <span className="ml-2 text-1.5vw font-MinecraftFiveBold">
                {props.text}
              </span>
            </button>
          </a>
        </Link>
      )
      break
    case false:
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${props.styles} flex justify-center content-center text-slate-200 block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
          aria-current="page"
        >
          <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <Image
              className="fill-current w-4 h-4 mr-2"
              width={props.w}
              height={props.h}
              alt={props.alt}
              src={props.src}
              priority={true}
            />
            <span className="ml-2 text-1.5vw font-MinecraftFiveBold">
              {props.text}
            </span>
          </button>
        </a>
      )
  }
}

export default LinkButton
