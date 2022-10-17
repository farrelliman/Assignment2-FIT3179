var vg_1 = "map vegalite.json";
vegaEmbed("#map", vg_1). then (function(result) {
// Access the Vega view instance (https://vega.github.io.vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "stacked bar vegalite.json";
vegaEmbed("#stackedbar", vg_2). then (function(result) {
// Access the Vega view instance (https://vega.github.io.vega/docs/api/view/) as result.view 
}).catch(console.error);  

var vg_3 = "heatmap vegalite.json";
vegaEmbed("#heatmap", vg_3). then (function(result) {
// Access the Vega view instance (https://vega.github.io.vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_4 = "table bubble plot vegalite.json";
vegaEmbed("#bubbleplot", vg_4). then (function(result) {
// Access the Vega view instance (https://vega.github.io.vega/docs/api/view/) as result.view 
}).catch(console.error);  