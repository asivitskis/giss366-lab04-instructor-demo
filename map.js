// Build your map here!
// 1. Create the map, centered on your chosen location and zoom level.
let map = L.map("map", {center: [44.021899090595724, -123.70910659957326], zoom: 10});

// 2. Add a basemap tile layer
let osm = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {attribution: '&copy; OpenStreetMap contributors'}
).addTo(map);

let alt_base = L.tileLayer.provider("Esri.WorldTopoMap").addTo(map);

// 3. Add at least one marker, line, or polygon
let delta = L.marker([44.080924901226695, -123.10872315295353]).addTo(map);
delta.bindPopup("This is an important urban wetland.");

let threemile = L.marker([44.00941429668687, -124.11241734873248]).addTo(map);
threemile.bindPopup("This is a 3-mile dune area, an important coastal habitat.");

let wms = L.tileLayer.wms('https://www.mrlc.gov/geoserver/mrlc_display/wms', {
      layers: 'mrlc_display:NLCD_2021_Land_Cover_L48',
      format: 'image/png',
      transparent: true
    });

// 4. Add Layer controls
let baseMaps = { "Streets": osm, "Alt_Base": alt_base };
let overlayMaps = { "Delta Ponds": delta, "3-Mile Dune Area": threemile, "NLCD Land Cover": wms };
L.control.layers(baseMaps, overlayMaps).addTo(map);