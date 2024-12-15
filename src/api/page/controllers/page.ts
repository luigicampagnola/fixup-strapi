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
              cards: {
                populate: {
                  link: true,
                  image: true,
                  options: true,
                },
              },
            },
          },
        },
      });

      console.log(results, 'results')

      return results;
    },
  })
);