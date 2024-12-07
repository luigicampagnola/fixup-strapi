import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async find(ctx) {
      // Llama al servicio predeterminado de Strapi para recuperar los datos
      const { data, meta } = await super.find(ctx);

      console.log('-------->', data, '------->', ctx);

      return await data;
      // Personaliza la respuesta con populate
      // return await strapi.db.query("api::page.page").findMany({
      //   where: ctx.query.filters,
      //   populate: {
      //     modules: {
      //       populate: {
      //         locations: {
      //           populate: {
      //             counties: true,
      //           },
      //         },
      //         financing: true,
      //         projects: true,
      //         'shared.top-section': {
      //           title: true,
      //           subtitle: true,
      //           description: true,
      //           button: {
      //             label: true,
      //             cssSelector: true,
      //           }
      //         },
      //         cards: {
      //           populate: {
      //             link: true, // Asegúrate de incluir `link` dentro de `cards`
      //             image: {
      //               populate: {
      //                 alt: true,
      //                 src: true
      //               }
      //             }, // Incluye el componente `image`
      //             options: true,
      //           },
      //         },
      //       },
      //     },
      //   },
      // });
    },
  })
);
