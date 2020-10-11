/* Example controller */
export default class exampleController {
    /* Default controller method */
    static async default(ctx) {
        await ctx.render('index', { title: 'Hello :)' });
    }
}
