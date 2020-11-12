module.exports = {
  siteMetadata: {
    title: `Cain Watson`,
    description: `Portfolio of Cain Watson`,
    author: `@cainwatson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cainwatson.com`,
        short_name: `cainwatson`,
        start_url: `/`,
        background_color: `#FCEFF9`,
        theme_color: `#011627`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@components': `src/components`,
          '@content': `src/content`,
          '@hooks': `src/hooks`,
          '@images': `src/images`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lexend Deca`,
              subsets: [`latin`],
              fontDisplay: `swap`,
              strategy: `cdn`,
            },
            {
              family: `Poppins`,
              variants: [`600`],
              subsets: [`latin`],
              fontDisplay: `swap`,
              strategy: `cdn`,
            },
            {
              family: `Noto Sans SC`,
              variants: [`400`],
              fontDisplay: `swap`,
              strategy: `cdn`,
              text: `我正在学习中文和读的。`,
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-offline`,
  ],
}
