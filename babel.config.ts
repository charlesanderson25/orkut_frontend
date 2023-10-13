/// <reference types="babel-plugin-macros" />

module.exports = function (api) {
  api.cache(true);

  const plugins = ["macros"];

  return {
    plugins,
  };
};
