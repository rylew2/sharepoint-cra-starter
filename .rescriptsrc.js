//prevent tilde character in output 
// (files with this character are invalid for SP2013)
module.exports = (config) => {
  config.optimization.splitChunks.automaticNameDelimiter = "_";
  if (config.optimization.runtimeChunk) {
    config.optimization.runtimeChunk = {
      name: (entrypoint) => `runtime_${entrypoint.name}`,
    };
  }
  return config;
};
