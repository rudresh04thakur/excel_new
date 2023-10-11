//[Dashboard Javascript]

//Project:	Master Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
		
	jQuery('#world-map-markers').vectorMap(
		{
			map: 'world_mill_en',
			backgroundColor: '#ffffff00',
			borderColor: '#818181',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: '#f4f3f0',
			regionStyle : {
				initial : {
				  fill : '#eef0fe'
				}
			  },
			markerStyle: {
			  initial: {
			r: 5,
			'fill': '#EA5455',
			'fill-opacity':1,
			'stroke': '#000',
			'stroke-width' : 1,
			'stroke-opacity': 0.0
						},
						},
			enableZoom: false,
			hoverColor: '#bcc3fb',
			markers : [
				{
				latLng : [43.73, 7.41],
				name : 'Monaco',
				style: {fill: '#7367F0', r:5}
			  	},
				{
				latLng : [3.2, 73.22],
				name : 'Maldives',
				style: {fill: '#28C76F', r:5}
			  	},
				{
				latLng : [7.35, 134.46],
				name : 'Palau',
				style: {fill: '#3699ff', r:5}
			  	},
				{
				latLng : [1.3, 103.8],
				name : 'Singapore',
				style: {fill: '#FF9F43', r:5}
			  	},
				{
				latLng : [13.16, -59.55],
				name : 'Barbados',
				style: {fill: '#EA5455', r:5}
			  	},
				{
				latLng : [35.88, 14.5],
				name : 'Malta',
				style: {fill: '#172b4c', r:5}
			  	},
			],
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: '#c9dfaf',
			selectedRegions: [],
			showTooltip: true,
			onRegionClick: function(element, code, region)
			{
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code.toUpperCase();

				alert(message);
			}
		});

	
}); // End of use strict
