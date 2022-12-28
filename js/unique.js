require([
	'esri/Map',
	'esri/layers/CSVLayer',
	'esri/views/MapView',
	'esri/widgets/Legend',
], function (Map, CSVLayer, MapView, Legend) {
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
	const colors = ['#dc4b00', '#3c6ccc', '#d9dc00', '#91d900', '#986ba1'];
	layer.renderer = {
		type: 'unique-value',
		legendOptions: {
			title: '学校类型',
		},
		field: 'univCategory',
		uniqueValueInfos: [
			{
				value: '综合',
				label: '综合类',
				symbol: {
					type: 'simple-marker',
					color: colors[0],
					outline: null,
					size: 6,
				},
			},
			{
				value: '理工',
				label: '理工类',
				symbol: {
					type: 'simple-marker',
					color: colors[1],
					outline: null,
					size: 6,
				},
			},
			{
				value: '师范',
				label: '师范类',
				symbol: {
					type: 'simple-marker',
					color: colors[2],
					outline: null,
					size: 6,
				},
			},
			{
				value: '农业',
				label: '农业类',
				symbol: {
					type: 'simple-marker',
					color: colors[3],
					outline: null,
					size: 6,
				},
			},
			{
				value: '林业',
				label: '林业类',
				symbol: {
					type: 'simple-marker',
					color: colors[4],
					outline: null,
					size: 6,
				},
			},
		],
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
			view: view,
		}),
		'bottom-left'
	);
});
