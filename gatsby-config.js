module.exports = {
  siteMetadata: {
    url: 'https://beomyeonandrewkim.github.io',
    title: "Andrea's Devlog",
    subtitle:
      "I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",
    copyright: 'powerd by Gatsby, theme by lumen',
    disqusShortname: 'beomyeonandrewkim',
    menu: [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'CS',
        path: '/categories/cs/',
      },
      {
        label: 'JavaScript',
        path: '/categories/java-script/',
      },
      {
        label: 'TypeScript',
        path: '/categories/type-script/',
      },
      {
        label: 'Functional',
        path: '/categories/functional/',
      },
      {
        label: 'Algorithm',
        path: '/categories/algorithm/',
      },
      {
        label: 'React',
        path: '/categories/react/',
      },
      {
        label: 'ETC',
        path: '/categories/etc/',
      },
    ],
    author: {
      name: 'Andrea',
      email: 'beom911@gmail.com',
      instagram: 'kim.andrea.by',
      linkedin: 'beomyeon-kim-a9b453128',
      github: 'beomyeonandrewkim',
      rss: '/rss.xml',
      facebook: 'beom911',
    },
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/img`,
    //     name: 'uploads',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // {
          //   resolve: 'gatsby-remark-relative-images',
          //   options: { name: 'img' },
          // },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 960 },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-copy-images',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-112057755-2' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: { fonts: ['roboto:400,400i,500,700'] },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: 'daily',
              priority: 0.7,
            };
          }),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass',
  ],
};
