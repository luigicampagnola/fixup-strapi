import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::page.page", ({ strapi }) => ({
  async findMany(params) {
    return await strapi.db.query("api::page.page").findMany({
      ...params,
      populate: {
        modules: {
          populate: {
            locations: {
              populate: {
                counties: true,
              },
            },
            financing: true,
            projects: true,
          },
        },
      },
    });
  },
}));
