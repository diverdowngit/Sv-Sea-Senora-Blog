/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SV-Seasenorablog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{ resolve: `gatsby-plugin-google-gtag`,
  options: {
    // You can add multiple tracking ids and a pageview event will be fired for all of them.
    trackingIds: [
      "G-VM8E9LJHKB", // Google 
    ],
    // This object gets passed directly to the gtag config command
    // This config will be shared across all trackingIds
    gtagConfig: {
      optimize_id: "OPT_CONTAINER_ID",
      anonymize_ip: true,
      cookie_expires: 0,
    },
    // This object is used for configuration specific to this plugin
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Defaults to https://www.googletagmanager.com
      origin: "YOUR_SELF_HOSTED_ORIGIN",
      // Delays processing pageview events on route update (in milliseconds)
      delayOnRouteUpdate: 0,
    },
  },
},{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "t_FP-1XF6DOLw8XU_gPiL68YAFZAdkwaQie00zJNjHU",
      "spaceId": "i7dexyvjdff2"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};