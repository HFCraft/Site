import Head from 'next/head'
import Link from 'next/link'

import useTranslation from 'next-translate/useTranslation'
import LinkButton from '../../components/LinkButton'

const PlayPage: any: React.FC = (): JSX.Element => {
  const { t } = useTranslation('Play/Index')

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t`meta.desc`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t`meta.title`} />
        <meta property="og:description" content={t`meta.desc`} />
        <meta property="og:site_name" content={t`og.site`} />
        <meta property="og:url" content={t`meta.url`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t`meta.title`} />
        <meta
          name="twitter:description"
          content={t`meta.desc`}
        />
        <meta name="twitter:site" content={t`twitter.site`} />
        <meta name="twitter:url" content={t`meta.url`} />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>{t`meta.title`}</title>
      </Head>
      <div id="container">
        <div
          id="title"
          className="bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 p-24 m-5 rounded-lg"
        >
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            {t`title.text`}
          </h1>
          <p className="font-MinecraftFiveBold animate-text-start text-2.5vw flex justify-center content-center text-slate-200">
            {t`title.desc`}
          </p>

          <div id="serverAddress">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <Link
                href="/play/java"
              >
                <a
                  className="flex justify-center content-center text-slate-200 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="text-1.5vw font-MinecraftFiveBold">
                      {t`edition.java`}
                    </span>
                  </button>
                </a>
              </Link>

              <Link
                href="/play/bedrock"
              >
                <a
                  className="flex justify-center content-center text-slate-200 ml-3 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="text-1.5vw font-MinecraftFiveBold">
                      {t`edition.bedrock`}
                    </span>
                  </button>
                </a>
              </Link>
            </p>

            <div id="linkButtons">
              <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
                <LinkButton
                  href={'/'}
                  intr={true}
                  w={16}
                  h={16}
                  alt={t`button.back`}
                  src={'/images/BackIcon.webp'}
                  text={t`button.back`}
                  styles={'mt-2'}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayPage
