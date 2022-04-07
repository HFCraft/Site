import Head from 'next/head'

import useTranslation from 'next-translate/useTranslation'
import LinkButton from '../components/LinkButton'

const BadRequest = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t`BadRequest:meta.desc`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t`BadRequest:meta.title`} />
        <meta property="og:description" content={t`BadRequest:meta.desc`} />
        <meta property="og:site_name" content={t`BadRequest:og.site`} />
        <meta property="og:url" content={t`BadRequest:meta.url`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t`BadRequest:meta.title`} />
        <meta
          name="twitter:description"
          content={t`BadRequest:meta.desc`}
        />
        <meta name="twitter:site" content={t`BadRequest:twitter.site`} />
        <meta name="twitter:url" content={t`BadRequest:meta.url`} />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>{t`BadRequest:meta.title`}</title>
      </Head>
      <div id="container">
        <div
          id="bg"
          className="w-screen h-screen animation-pulse bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 grid grid-cols-1 gap-2 place-content-center"
        >
          <div id="title" className="text-5vw">
            <h1 className="font-MinecraftFiveBold flex justify-center items-center text-justify text-slate-200">
              {t`BadRequest:title.text`}
            </h1>
            <p className="font-MinecraftTen flex justify-center items-center text-justify text-slate-200">
              {t`BadRequest:title.desc`}
            </p>

            <div id="linkButtons">
              <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
                <LinkButton
                  href="/"
                  intr={true}
                  w={16}
                  h={16}
                  alt={t`BadRequest:button.back`}
                  src={'/images/BackIcon.webp'}
                  text={t`BadRequest:button.back`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadRequest
