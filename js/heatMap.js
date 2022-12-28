require([
    'esri/Map',
    'esri/layers/CSVLayer',
    'esri/views/MapView',
    'esri/widgets/Legend'
], function (Map, CSVLayer, MapView, Legend) {
    const url = 'https://65474621.github.io/webGISData/2021全国高等院综合情况.csv';

    const layer = new CSVLayer({
        url: url,
        title: '2021全国高等院校综合情况',
        copyright: 'ZhangHan',
        latitudeField: 'tlat',
        longitudeField: 'tlng',
    });
    layer.renderer = {
        type: "heatmap",
        colorStops: [
          { color: "rgba(63, 40, 102, 0)", ratio: 0 },
          { color: "#472b77", ratio: 0.083 },
          { color: "#4e2d87", ratio: 0.166 },
          { color: "#563098", ratio: 0.249 },
          { color: "#5d32a8", ratio: 0.332 },
          { color: "#6735be", ratio: 0.415 },
          { color: "#7139d4", ratio: 0.498 },
          { color: "#7b3ce9", ratio: 0.581 },
          { color: "#853fff", ratio: 0.664 },
          { color: "#a46fbf", ratio: 0.747 },
          { color: "#c29f80", ratio: 0.83 },
          { color: "#e0cf40", ratio: 0.913 },
          { color: "#ffff00", ratio: 1 }
        ],
        maxDensity: 0.01,
        minDensity: 0
    };
    const map = new Map({
        basemap: 'dark-gray',
        layers: [layer],
    });

    const view = new MapView({
        container: 'viewDiv',
        center: [108, 32],
        zoom: 4,
        map: map,
    });
    view.ui.add(
        new Legend({
          view: view
        }),
        "bottom-left"
      );
});