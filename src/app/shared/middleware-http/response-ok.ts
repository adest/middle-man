export const respondHttpOk = async (ctx, next) => {
  ctx.response.status = 200;
  await next();
};
