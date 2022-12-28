require([
	'esri/Map',
	'esri/layers/CSVLayer',
	'esri/views/MapView',
], function (Map, CSVLayer, MapView) {
	const url = 'https://65474621.github.io/webGISData/2021全国高等院综合情况.csv';
	const popup = {
		content: [
			{
				type: 'fields',
				fieldInfos: [
					{
						fieldName: 'univNameCn',
						label: '学校名称',
						isEditable: true,
						tooltip: '',
						visible: true,
						format: null,
						stringFieldOption: 'text-box',
					},
					{
						fieldName: 'univTags',
						label: '办学层次',
						isEditable: true,
						tooltip: '',
						visible: true,
						format: null,
						stringFieldOption: 'text-box',
					},
					{
						fieldName: 'univCategory',
						label: '学校类型',
						isEditable: true,
						tooltip: '',
						visible: true,
						format: null,
						stringFieldOption: 'text-box',
					},
					{
						fieldName: 'province',
						label: '省份',
						isEditable: true,
						tooltip: '',
						visible: true,
						format: null,
						stringFieldOption: 'text-box',
					},

					{
						fieldName: 'ranking',
						label: '软科排名',
						isEditable: true,
						tooltip: '',
						visible: true,
						format: {
							places: 2,
							digitSeparator: true,
						},

						stringFieldOption: 'text-box',
					},
				],
			},
		],
	};
    
	const layer = new CSVLayer({
		url: url,
		title: '2021全国高等院校综合情况',
		copyright: 'ZhangHan',
		latitudeField: 'tlat',
		longitudeField: 'tlng',
		outFields: ['univNameCn', 'univTags', 'univCategory', 'province', 'ranking'],
		popupTemplate: popup,
	});
	layer.renderer = {
		type: 'simple', // autocasts as new SimpleRenderer()
		symbol: {
			type: 'simple-marker',
			color: '#00b7ff',
			outline: null,
			size: 5,
		},
	};
	layer.effect = 'bloom(2.5, 1px, 0.1)';
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
});
