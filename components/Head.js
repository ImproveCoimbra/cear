import Head from 'next/head'

export default ({ children }) => {
  const title = 'Jantarada'
  const description =
    "Os teus restaurantes preferidos estão a passar por tempos difíceis, mas alguns ainda estão a cozinhar para ti. Ajuda-os a pagar as contas nestes meses pedindo take-away de alguns dos melhores restaurantes do país."
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://jantarada.pt/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content="https://jantarada.pt/og-image.jpg" />
      {children}
    </Head>
  )
}
