import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async find(ctx) {
      // Llama al servicio predeterminado de Strapi para recuperar los datos
      const { data, meta } = await super.find(ctx);

      // Personaliza la respuesta con populate
      return await strapi.db.query("api::page.page").findMany({
        where: ctx.query.filters,
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
              cards: {
                populate: {
                  link: true, // Asegúrate de incluir `link` dentro de `cards`
                  image: true, // Incluye el componente `image`
                  options: true,
                },
              },
            },
          },
        },
      });
    },
  })
);
