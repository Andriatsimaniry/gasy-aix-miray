module.exports = {
    siteMetadata: {
        title: "Le Site Gasy Aix en Provence Miray G.A.M",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            },
          },
          "gatsby-plugin-mdx",
    ]
}