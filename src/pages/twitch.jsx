import Head from 'next/head'

import { TwitchPlayer } from 'react-twitch-embed'

import LinkButton from '../components/LinkButton'

const TwitchPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Twitch" />
        <meta property="og:description" content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost" />
        <meta property="og:site_name" content="HFCraft" />
        <meta property="og:url" content="https://www.hfcraft.xyz/twitch" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Twitch" />
        <meta
          name="twitter:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="twitter:site" content="@HFCraft" />
        <meta name="twitter:url" content="https://www.hfcraft.xyz/twitch" />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>Twitch | HFCraft</title>
      </Head>
      <div id="container">
        <div
          id="title"
          className="bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 p-24 m-5 rounded-lg "
        >
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            AO VIVO!
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            Quer assistir a live da Zebra?
          </p>

          <div
            id="twitch"
            className="mt-4 mb-4 bg-slate-800 border-solid border-8 border-slate-800"
          >
            <TwitchPlayer
              channel="antonyzera"
              id="antonyzera"
              height="95.4vh"
              width="100%"
            />
          </div>

          <div id="linkButtons" className="">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <LinkButton
                href={'/'}
                intr={true}
                w={16}
                h={16}
                alt={'Voltar'}
                src={'/images/BackIcon.webp'}
                text={"Voltar à página inicial"}
              />
              <LinkButton
                href={
                  'https://www.twitch.tv/antonyzera?tt_content=twitch_logo&tt_medium=embed'
                }
                intr={false}
                w={16}
                h={16}
                alt={'Twitch'}
                src={'/images/TwitchIcon.webp'}
                text={"Vamos à página da Twitch?"}
                styles={'ml-3'}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwitchPage
