(async () => {
    try {
      await import("barchart/BarchartIndex");
    } catch (error) {
      console.error("Failed to load remote: barchart", error);
    }
  
    try {
      await import("linechart/LinechartIndex");
    } catch (error) {
      console.error("Failed to load remote: linechart", error);
    }
  
    try {
      await import("piechart/PiechartIndex");
    } catch (error) {
      console.error("Failed to load remote: piechart", error);
    }
    
    console.log("All remotes attempted to load.");
  })();