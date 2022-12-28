require([
	'esri/Map',
	'esri/layers/CSVLayer',
	'esri/views/MapView',
	'esri/widgets/Legend'
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

    const colors = ["#0010d9", "#0040ff", "#0080ff", "#00bfff", "#00ffff"];

	layer.renderer = {
		type: 'class-breaks',
		field: 'ranking',
		defaultSymbol: {
			type: 'simple-marker',
			color: '#fff',
			outline: {
				color: "rgba(0, 0, 0, 0.3)",
				width: 1, 
			},
			size: 6,
		},
		classBreakInfos: [
			{
				minValue: 0,
				maxValue: 50,
				symbol: {
                    type: 'simple-marker',
                    color: colors[4],
                    outline: null,
                    size: 12,
                },
				label: '软科排名前50',
			},
			{
				minValue: 51,
				maxValue: 100,
				symbol: {
                    type: 'simple-marker',
                    color: colors[3],
                    outline: null,
                    size: 10,
                },
				label: '软科排名50-100',
			},
			{
				minValue: 101,
				maxValue: 200,
				symbol: {
                    type: 'simple-marker',
                    color: colors[2],
                    outline: null,
                    size: 8,
                },
				label: '软科排名100-200',
			},
			{
				minValue: 201,
				maxValue: 400,
				symbol: {
                    type: 'simple-marker',
                    color: colors[1],
                    outline: null,
                    size: 6,
                },
				label: '软科排名200-400',
			},
			{
				minValue: 400,
				maxValue: 600,
				symbol: {
                    type: 'simple-marker',
                    color: colors[0],
                    outline: null,
                    size: 4,
                },
				label: '软科排名400+',
			},
		],
		defaultLabel: 'no data', // legend label for features that don't match a class break
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
