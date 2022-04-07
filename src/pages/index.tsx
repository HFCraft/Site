import Head from 'next/head'

import useTranslation from 'next-translate/useTranslation'
import LinkButton from '../components/LinkButton'

const Index = (): JSX.Element => {
  const { t } = useTranslation('Index')

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
          className="bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 p-24 m-5 rounded-lg "
        >
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            {t`title.text`}
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            {t`title.desc`}
          </p>

          <div id="linkButtons">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <LinkButton
                href={'/play'}
                intr={true}
                w={16}
                h={16}
                alt={t`title.play`}
                src={'/images/CreeperIcon.webp'}
                text={t`button.play`}
                styles={'mt-2'}
              />
              <LinkButton
                href={'/twitch'}
                intr={true}
                w={16}
                h={16}
                alt={t`title.twitch`}
                src={'/images/TwitchIcon.webp'}
                text={t`button.twitch`}
                styles={'ml-3 mt-2'}
              />
              <LinkButton
                href={
                  'https://www.youtube.com/channel/UCdJ6KjQxr7LyxHXHSm2Fxsg'
                }
                intr={false}
                w={21}
                h={16}
                alt={t`title.youTube`}
                src={'/images/YouTubeIcon.webp'}
                text={t`button.youTube`}
                styles={'ml-3 mt-2'} 
              />
              <LinkButton
                href={'https://www.github.com/HFCraft/Site'}
                intr={false}
                w={16}
                h={16}
                alt={t`title.github`}
                src={'/images/GitHubIcon.webp'}
                text={t`button.github`}
                styles={'ml-3 mt-2'}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index