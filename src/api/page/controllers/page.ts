import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);

      // Personaliza el query para manejar slugs
      const results = await strapi.db.query("api::page.page").findMany({
        where: ctx.query.filters,
        populate: {
          modules: {
            populate: {
              button: {
                populate: {
                  label: true,
                  cssSelector: true,
                },
              },
              options: {
                populate: {
                  label: true,
                  description: true,
                },
              },
              benefits: {
                populate: {
                  values: true,
                  position: true,
                },
              },
              phone: {
                populate: {
                  label: true,
                  href: true,
                },
              },
              countyOptions: {
                populate: {
                  image: true,
                  title: true,
                  description: true,
                  link: true,
                },
              },
              image: {
                populate: {
                  url: true,
                },
              },
              rates: {
                populate: {
                  label: true,
                  subLabel: true,
                  googleLogo: true,
                  comments: true,
                },
              },
              contactForm: {
                populate: {
                  title: true,
                  warning: true,
                  name: {
                    populate: {
                      label: true,
                      type: true,
                      placeholder: true,
                      required: true,
                      warning: true,
                      formatWarning: true,
                    },
                  },
                  phone: {
                    populate: {
                      label: true,
                      type: true,
                      placeholder: true,
                      required: true,
                      warning: true,
                      formatWarning: true,
                    },
                  },
                  email: {
                    populate: {
                      label: true,
                      type: true,
                      placeholder: true,
                      required: true,
                      warning: true,
                      formatWarning: true,
                    },
                  },
                  street: {
                    populate: {
                      label: true,
                      type: true,
                      placeholder: true,
                      required: true,
                      warning: true,
                      formatWarning: true,
                    },
                  },
                  captcha: {
                    populate: {
                      label: true,
                      type: true,
                      placeholder: true,
                      required: true,
                      warning: true,
                      formatWarning: true,
                    },
                  },
                  button: {
                    populate: {
                      label: true,
                      url: true,
                    },
                  },
                  sponsors: {
                    populate: {
                      files: true,
                    },
                  },
                  backgroundImage: {
                    populate: {
                      alt: true,
                      backgroundImage: true,
                    },
                  },
                },
              },
              blogCards: {
                populate: {
                  title: true,
                  date: true,
                  description: true,
                  image: true,
                  link: true,
                },
              },
              slider: true,
              mapsData: {
                populate: {
                  label: true,
                  mapLocations: true,
                  zoom: true,
                  center: true,
                  link: true,
                },
              },
              cards: {
                populate: {
                  link: true,
                  image: {
                    populate: {
                      alt: true,
                      src: true,
                    },
                  },
                  options: true,
                },
              },
              backgroundImage: {
                populate: {
                  alt: true,
                  backgroundImage: true,
                },
              },
            },
          },
        },
      });

      console.log(results, "results");

      return results;
    },
  })
);
