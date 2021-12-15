var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test14_1 = new ol.format.GeoJSON();
var features_test14_1 = format_test14_1.readFeatures(json_test14_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test14_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test14_1.addFeatures(features_test14_1);
var lyr_test14_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test14_1, 
                style: style_test14_1,
                interactive: true,
                title: '<img src="styles/legend/test14_1.png" /> test14'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_test14_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_test14_1];
lyr_test14_1.set('fieldAliases', {'自然村名稱': '自然村名稱', });
lyr_test14_1.set('fieldImages', {'自然村名稱': '', });
lyr_test14_1.set('fieldLabels', {'自然村名稱': 'header label', });
lyr_test14_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});