export const loadRemoteComponent = async (scope, module) => {
    try {
      await __webpack_init_sharing__("default");
      const container = window[scope]; // Obtiene el contenedor remoto
      await container.init(__webpack_share_scopes__.default);
      const factory = await container.get(module);
      const Module = factory();
      return Module;
    } catch (error) {
      console.error(`Error loading remote component ${scope}/${module}:`, error);
      return null; // o un componente de fallback
    }
  };