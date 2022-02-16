module.exports = {
    siteMetadata: {
        title: "Le Site Gasy Aix en Provence Miray G.A.M",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`, `webp`],
            placeholder: `dominantColor`,
            quality: 50,
            breakpoints: [750, 1080, 1366, 1920],
            backgroundColor: `transparent`,
            tracedSVGOptions: {},
            blurredOptions: {},
            jpgOptions: {},
            pngOptions: {},
            webpOptions: {},
            avifOptions: {},
          },
        }
      
      },
      {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            },
          },
          "gatsby-plugin-mdx",
          "gatsby-transformer-sharp",
          "gatsby-plugin-image",
          
    ]
}