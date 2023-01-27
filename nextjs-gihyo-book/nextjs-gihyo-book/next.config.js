/** @type {import('next'). NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponents の 有効 化
      styledComponents: true,
    };

    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        // 本番 環境 では React Testing Library で 使用 する data-testid 属性 を 削除
        reactRemoveProperties: {
          properties: ["^data-testid $"],
        },
      };
    }
    return compilerConfig;
  })(),
};
module.exports = nextConfig;
