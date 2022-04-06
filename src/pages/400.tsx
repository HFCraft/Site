import Head from 'next/head'

import LinkButton from '../components/LinkButton'

const BadRequest = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Requisição inválida" />
        <meta
          property="og:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta property="og:site_name" content="HFCraft" />
        <meta property="og:url" content="https://www.hfcraft.xyz/500" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Requisição inválida" />
        <meta
          name="twitter:description"
          content="'HFCraft' é um servidor survival na última versão do Minecraft, do Streamer LordLIVE, e hospedado pela PurpleHost"
        />
        <meta name="twitter:site" content="@HFCraft" />
        <meta name="twitter:url" content="https://www.hfcraft.xyz/500" />
        <meta
          name="twitter:image"
          content="/_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75"
        />

        <title>Requisição inválida | HFCraft</title>
      </Head>
      <div id="container">
        <div id="title" className="text-5vw">
            <h1 className="font-MinecraftFiveBold flex justify-center items-center text-justify text-slate-200">
              400
            </h1>
            <p className="font-MinecraftTen flex justify-center items-center text-justify text-slate-200">
              Requisição inválida
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
                />
              </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default BadRequest
