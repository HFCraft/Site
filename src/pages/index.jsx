import Head from 'next/head'
import LinkButton from '../components/LinkButton'

const IndexPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Site Oficial" />
        <meta
          property="og:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta property="og:site_name" content="HFCraft" />
        <meta property="og:url" content="https://www.hfcraft.xyz/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Site Oficial" />
        <meta
          name="twitter:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="twitter:site" content="@HFCraft" />
        <meta name="twitter:url" content="https://www.hfcraft.xyz" />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>Página Inicial | HFCraft</title>
      </Head>
      <div id="container">
        <div
          id="title"
          className="bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 p-24 m-5 rounded-lg "
        >
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            HFCraft
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            Um servidor no Minecraft!
          </p>

          <div id="linkButtons">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <LinkButton
                href={'/jogar'}
                intr={true}
                w={16}
                h={16}
                alt={'Jogar'}
                src={'/images/CreeperIcon.webp'}
                text={'Jogar'}
              />
              <LinkButton
                href={'/twitch'}
                intr={true}
                w={16}
                h={16}
                alt={'Twitch'}
                src={'/images/TwitchIcon.webp'}
                text={'Twitch'}
                styles={'ml-3'}
              />
              <LinkButton
                href={
                  'https://www.youtube.com/channel/UChVBw8q75tPAdRkfWWgNm0w'
                }
                intr={false}
                w={21}
                h={16}
                alt={'YouTube'}
                src={'/images/YouTubeIcon.webp'}
                text={'YouTube'}
                styles={'ml-3'}
              />
              <LinkButton
                href={'https://www.github.com/HFCraft/Site'}
                intr={false}
                w={16}
                h={16}
                alt={'GitHub'}
                src={'/images/GitHubIcon.webp'}
                text={'Github'}
                styles={'ml-3'}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
