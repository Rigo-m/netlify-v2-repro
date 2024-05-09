export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: getGeneratorString(nitro),
  path: "/*",
  preferStatic: true,
};