import Head from 'next/head'
import Link from 'next/link'

import LinkButton from '../../components/LinkButton'

const PlayPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Qual é a sua plataforma?" />
        <meta
          property="og:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta property="og:site_name" content="HFCraft" />
        <meta property="og:url" content="https://www.hfcraft.xyz/play" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Qual é a sua plataforma?" />
        <meta
          name="twitter:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="twitter:site" content="Qual é a sua edição Minecraft?" />
        <meta name="twitter:url" content="https://www.hfcraft.xyz/play" />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>Jogar | HFCraft</title>
      </Head>
      <div id="container">
        <div
          id="title"
          className="bg-gradient-to-r from-orange-500 to-amber-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 p-24 m-5 rounded-lg"
        >
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            Jogar!
          </h1>
          <p className="font-MinecraftFiveBold animate-text-start text-2.5vw flex justify-center content-center text-slate-200">
            Qual é a sua edição do Minecraft?
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
                      Minecraft Java Edition
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
                      Minecraft Bedrock Edition
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
                  alt={'Voltar'}
                  src={'/images/BackIcon.webp'}
                  text={'Voltar á página inicial'}
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
