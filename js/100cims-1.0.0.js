/*
 * Desenvolupat per GEOSTART
 * "Fet amb el millor gust possible"
 * Institut Cartogràfic i Geològic de Catalunya (ICGC) Gener 2015
 *
 * http://betaportal.icgc.cat
 */
var west = 2.0;
var south = 42.0;
var east = 2.1;
var north = 42.2;
var comarquesGEOJSON;
var imPro;
var scene;
var camera;
var ellipsoid;
var viewer;
jQuery(document).ready(function () {
	if (supportsWebgl()) {
		/*
		function capa(valor, actiu) {
			if (valor == "ombrejat") {
				ombrejat_lyr.show = actiu;
			} else if (valor == "toponimia") {
				toponimia_lyr.show = actiu;
			} else if (valor == "orto56") {
				orto56_lyr.show = actiu;
			} else if (valor == "rutes") {
				rutes_lyr.show = actiu;
			} else if (valor == "cims") {

				if (actiu) {

					if (!viewer.dataSources.contains(cims_lyr)) {

						viewer.dataSources.add(cims_lyr);
					}
				} else {
					viewer.dataSources.remove(cims_lyr);
				}

			}

		}*/

		Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(west, south, east, north);

		$("#sel_cims").select2({
			placeholder: "Selecciona un cim",
			width: 'off'
		}).on("select2-selecting", function (e) {
			//anarA(e.val);
			var cimName = clearName(e.choice.text);
			selectEntityByName(cimName);
		});

		if (navigator.appVersion.indexOf('Chrome') != -1) {

			imPro = new Cesium.UrlTemplateImageryProvider({
				url: '//cesiumjs.org/tilesets/imagery/naturalearthii',
				maximumLevel: 8
			});

		} else {

			imPro = new Cesium.createOpenStreetMapImageryProvider({
				url: 'http://mapcache.icc.cat/map/bases_noutm/wmts/orto/GRID3857/',
				fileExtension: 'jpeg',
				maximumLevel: 18,
				credit: 'Institut Cartogràfic i Geològic de Catalunya'
			});

		}

		viewer = new Cesium.Viewer('mapa3d', {
			imageryProvider: imPro,
			timeline: false,
			navigationHelpButton: false,
			scene3DOnly: true,
			fullscreenButton: false,
			baseLayerPicker: false,
			homeButton: false,
			infoBox: true,
			sceneModePicker: false,
			animation: false,
			geocoder: false,
			targetFrameRate: 40,
			vrButton: false,
			showRenderLoopErrors: false,
			useDefaultRenderLoop: true,
			sceneMode: Cesium.SceneMode.SCENE3D,
			terrainProvider: new Cesium.CesiumTerrainProvider({
				//url : 'https://cesiumjs.org/stk-terrain/tilesets/world/tiles'
				url: 'http://betaserver.icgc.cat/cesium/terrenys/demextes'
			})
		});

		scene = viewer.scene;
		scene.globe.depthTestingAgainstTerrain = true;
		camera = viewer.scene.camera;
		ellipsoid = scene.globe.ellipsoid;
		viewer.scene.globe.enableLighting = true;
		viewer.scene.fog.enabled = true;
		viewer.scene.fog.density = 0.0002;
		viewer.scene.fog.screenSpaceErrorFactor = 2;
		//scene.frameState.creditDisplay.addDefaultCredit(new Cesium.Credit('ICGC', '/css/img/ICGC_logo_txt.svg', 'http://www.icgc.cat/'));

		viewer.infoBox.viewModel.sanitizer = function (input) {

			return input;
		}

		var layers = viewer.scene.imageryLayers;

		var orto_lyr = layers.addImageryProvider(new Cesium.createOpenStreetMapImageryProvider({
			url: 'http://mapcache.icc.cat/map/bases_noutm/wmts/orto/GRID3857/',
			fileExtension: 'jpeg',
			maximumLevel: 19,
			credit: 'Institut Cartogràfic i Geològic de Catalunya'
		}));

		if (navigator.appVersion.indexOf('Chrome') != -1) {
			orto_lyr.alpha = 1;
			orto_lyr.show = true;
		} else {
			orto_lyr.alpha = 0.3
			orto_lyr.show = false;
		}
		
		/*
		var orto56_lyr = layers.addImageryProvider(new Cesium.createOpenStreetMapImageryProvider({
			url: 'http://mapcache.icc.cat/map/bases_noutm/wmts/topo/GRID3857/',
			fileExtension: 'jpeg'

		}));

		orto56_lyr.show = false;

		var ombrejat_lyr = layers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
			url: 'http://www.instamaps.cat/mapcache/wmts',
			layer: 'ombra3857',
			style: 'default',
			format: 'image/jpeg',
			tileMatrixSetID: 'GMTOT'
		}));

		ombrejat_lyr.show = false;

		var toponimia_lyr = layers.addImageryProvider(new Cesium.createOpenStreetMapImageryProvider({
			url: 'http://betaserver.icgc.cat/tileserver2/tileserver.php?/toponimia1318/',
			fileExtension: 'png',
			credit: ''
		}));

		toponimia_lyr.show = false;

		var rutes_lyr = layers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
			url: 'http://www.instamaps.cat/mapcache/wmts',
			layer: 'dadesobertes3857',
			style: 'default',
			format: 'image/png',
			tileMatrixSetID: 'GMTOT',
			credit: new Cesium.Credit('Dades Obertes Gencat')
		}));

		rutes_lyr.show = false;
		*/

		var cims_lyr = new Cesium.GeoJsonDataSource();
		viewer.dataSources.add(cims_lyr);
		cims_lyr.load('data/geojson/100cims_4326.geojson');

		var camera = viewer.scene.camera;

		var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
			Cesium.Cartesian3.fromDegrees(1.70325, 42.20398, 3000));

		/*
		jQuery("input:checkbox").on('click', function (e) {
			capa(this.value, this.checked);
		});

		jQuery("#a_link").on('click', function (e) {
			$('#link_modal').modal('show');
			generaVincle();
		});
		*/

		/*
		if ($(document).width() < 850) {
			hihaEmbed2();
		}
		*/

		/*
		function reprodueixVincle() {

			var url = $.url().param();

			if (url.embed) {
				hihaEmbed();
			}

			if ($(document).width() < 850) {
				hihaEmbed2();
			}

			if (url.capes) {
				var c = url.capes.split(",");

				if (c.length > 0) {

					$('input[type=checkbox]').each(function () {
						$(this).prop('checked', false);
					});

				}

				for (var i = 0; i < c.length; i++) {

					$('input[type=checkbox]').each(function () {


						if ($(this).val() == c[i]) {

							$(this).prop('checked', true);
							capa(c[i], true);
						}
					});

				}

			}

			if (url.vincle) {

				var v = url.vincle.split(",");

				//_postion
				eye = new Cesium.Cartesian3(parseFloat(v[0]), parseFloat(v[1]), parseFloat(v[2]));

				//directiornWC or direction
				target = Cesium.Cartesian3.add(eye, new Cesium.Cartesian3(parseFloat(v[3]), parseFloat(v[4]), parseFloat(v[5])),
					new Cesium.Cartesian3());

				//UP or upwc
				up = new Cesium.Cartesian3(parseFloat(v[6]), parseFloat(v[7]), parseFloat(v[8]));

				//viewer.camera.lookAt(eye, target, up);

				viewer.camera.flyTo({
					destination: new Cesium.Cartesian3(parseFloat(v[0]), parseFloat(v[1]), parseFloat(v[2])),
					orientation: {
						direction: new Cesium.Cartesian3(parseFloat(v[3]), parseFloat(v[4]), parseFloat(v[5])), //target
						up: new Cesium.Cartesian3(parseFloat(v[6]), parseFloat(v[7]), parseFloat(v[8]))
					},
					duration: 0
				});

			} else if (url.lat && url.lon) {

				var ff = 10000;
				if (url.factor) {
					ff = url.factor;
				}

				camera.lookAt(Cesium.Cartesian3.fromDegrees(url.lon, url.lat, ff),
					Cesium.Cartesian3.fromDegrees(url.lon, url.lat, 0), Cesium.Cartesian3.UNIT_Z);

			} else {

				//var camera = viewer.scene.camera;
				camera.flyTo({
					destination: Cesium.Cartesian3.fromDegrees(1.70632, 42.20390, 16000),
					duration: 0,
					complete: function () {
						setTimeout(function () {
							camera.flyTo({
								destination: Cesium.Cartesian3.fromDegrees(1.70325, 42.20398, 5000),
								orientation: {
									heading: Cesium.Math.toRadians(0.0),
									pitch: Cesium.Math.toRadians(-45.0), //tilt
								},
								easingFunction: Cesium.EasingFunction.LINEAR_NONE
							});
						}, 1000);
					}
				});
			}

		}
		
		reprodueixVincle();
		*/

		camera.flyTo({
			destination: Cesium.Cartesian3.fromDegrees(1.70632, 42.20390, 16000),
			duration: 0,
			complete: function () {
				setTimeout(function () {
					camera.flyTo({
						destination: Cesium.Cartesian3.fromDegrees(1.70325, 42.20398, 5000),
						orientation: {
							heading: Cesium.Math.toRadians(0.0),
							pitch: Cesium.Math.toRadians(-45.0), //tilt
						},
						easingFunction: Cesium.EasingFunction.LINEAR_NONE
					});
				}, 1000);
			}
		});
		
		navigationInitialization('mapa3d', viewer);

		/*
		function generaVincle() {

			var cameraPos = viewer.camera._position.x + ',' + viewer.camera._position.y + ',' + viewer.camera._position.z + ','
				+ viewer.camera._directionWC.x + ',' + viewer.camera._directionWC.y + ',' + viewer.camera._directionWC.z + ','
				+ viewer.camera._up.x + ',' + viewer.camera._up.y + ',' + viewer.camera._up.z;

			var capes = "";
			$('input[type=checkbox]').each(function () {

				if (this.checked) {
					capes += $(this).val() + ",";
				}

			});

			var url = $.url();

			var _url = 'http://' + url.attr('host') + url.attr('path') + '?vincle=' + cameraPos + '&capes=' + capes.substring(0, capes.length - 1) + "&";

			jQuery('#urlMap').val(_url);
			jQuery('#urlVisorMap a').attr('href', _url);
			$('#iframeMap').val('<iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + _url + '&embed=1" ></iframe>');

		}
		*/

		/*
		function hihaEmbed() {
			hihaEmbed2();
			jQuery("#sp_finestra").show();
		}

		function hihaEmbed2() {
			jQuery("#sp_llegenda").removeClass('glyphicon-collapse-up');
			jQuery("#sp_llegenda").addClass('glyphicon-collapse-down');
			jQuery("#llegenda0").hide();
			jQuery("#llegenda").css('width', '75px');
		}
		*/

		/*
		jQuery("#sp_llegenda").on('click', function (e) {

			if (jQuery("#sp_llegenda").hasClass('glyphicon-collapse-up')) {

				jQuery("#sp_llegenda").removeClass('glyphicon-collapse-up');
				jQuery("#sp_llegenda").addClass('glyphicon-collapse-down');
				jQuery("#llegenda").css('width', '75px');

			} else {
				jQuery("#llegenda").css('width', '250px');
				jQuery("#sp_llegenda").addClass('glyphicon-collapse-up');
				jQuery("#sp_llegenda").removeClass('glyphicon-collapse-down');
			}

			jQuery("#llegenda0").toggle();

		});
		*/

		function anarA(valor) {

			var zxy = valor.split("#");
			var al = zxy[0].replace(".", "");

			var alt = parseInt(al.replace(",", "."));

			var fLLuny = (0.07 * (alt / 3143)) + 0.012;

			if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {

				viewer.scene.camera.flyTo({
					destination: Cesium.Cartesian3.fromDegrees(parseFloat(zxy[2]), parseFloat(zxy[1]), parseInt(al.replace(",", ".")) * 3),
					duration: 1,
					complete: function () {
						eye = new Cesium.Cartesian3.fromDegrees(parseFloat(zxy[2]), parseFloat(zxy[1]), alt * 3);

						target = Cesium.Cartesian3.add(eye, new Cesium.Cartesian3(viewer.camera._directionWC.x, viewer.camera._directionWC.y, viewer.camera._directionWC.z), new Cesium.Cartesian3());
						up = new Cesium.Cartesian3(viewer.camera._up.x, viewer.camera._up.y, viewer.camera._up.z);
						angle = 0.15 - viewer.camera.tilt;		

					}
				});

			} else if (viewer.scene.mode === Cesium.SceneMode.COLUMBUS_VIEW) {
				viewer.scene.camera.flyTo({
					destination: Cesium.Cartesian3.fromDegrees(parseFloat(zxy[2]), parseFloat(zxy[1]), parseInt(al.replace(",", ".")) * 5),
					duration: 2

				});
			} else {
				viewer.scene.camera.flyTo({
					destination: Cesium.Cartesian3.fromDegrees(parseFloat(zxy[2]), parseFloat(zxy[1]), parseInt(al.replace(",", ".")) * 5),
					duration: 2
				});
			}

		}

		function clearName(name){
			return name.match(/^[^\(]*/)[0].trim();
		}

		function selectEntityByName(name){

			for(i=0; i < cims_lyr.entities.values.length; i++){
                
				if(cims_lyr.entities.values[i]._name === name){
	
					viewer.selectedEntity = cims_lyr.entities.values[i];
					flyToEntity(cims_lyr.entities.values[i]);
				}
	
			}

		}

		function flyToEntity(entity){
			var cota = entity.properties.Cota;
			cota = cota.match(/^[^,]*/)[0].trim();
			cota = cota.replace(/\./g,'');
			cota = parseInt(cota) * 0.8;
			viewer.flyTo(entity, {
				offset : new Cesium.HeadingPitchRange(Cesium.Math.toRadians(0.0),  Cesium.Math.toRadians(-45.0), cota)
			});
		}

		/*
		function carregaJSONComarques() {
			return jQuery.ajax({
				url: 'capitals_comarcals_4326.geojson',
				dataType: 'json'
			}).promise();
		}
		*/
	}
});
