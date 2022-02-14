module.exports = {
    siteMetadata: {
        title: "Le Site Gasy Aix en Provence Miray",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
          },
    ]
}