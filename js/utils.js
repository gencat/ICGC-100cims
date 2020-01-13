
function obterColorMARIE(codi) {
var colorMARIE = {
		"codis" : [{
				color:"#C0FCA4",
				codi0:"CULTURAL",				
				text: "CULTURAL"
				
			}, {						
				color:"#ffccdd",
				text:"EDUCATIU",
				codi0:"EDUCATIU",
				
			}, {						
				color:"#00ccff",
				text:"HOTELS",
				codi0:"HOTELS",			
				
			}, {						
				color:"#ff0000",
				text:"SOCIOSANITARI",
				codi0:"SOCIOSANITARI",			
				
			}, {						
				color:"#00ff00",
				text:"ADMINISTRATIU",
				codi0:"ADMINISTRATIU",			
				
			}
		]
	};
																							
for (var i = 0; i < colorMARIE.codis.length; i++) {
		if ((colorMARIE.codis[i].codi0 == codi)) {
			return {"color":colorMARIE.codis[i].color,"text":colorMARIE.codis[i].text};
		}
	}
	return {"color":"#FFFFFF","text":"RESIDENCIAL"};
}


function obterColorLOM(codi) {
var colorLOM = {
		"codis" : [{
				color:"#00ff40",							
				text: "2014",
				codi0:"14"
				
			}, {						
				color:"#0800ff",
				text:"2015",
				codi0:"15",
				
			}, {						
				color:"#fb0404",
				text:"No resolta",
				codi0:"NR",			
				
			}
		]
	};
																							
for (var i = 0; i < colorLOM.codis.length; i++) {
		if ((colorLOM.codis[i].codi0 == codi)) {
			return {"color":colorLOM.codis[i].color,"text":colorLOM.codis[i].text};
		}
	}
	return  {"color":"#FFFFFF","text":codi};
}

function obterColorCadastre(codi) {
var colorCadastre = {
		"codis" : [{
				color:"#909895",
				text: "1949 <",
				codi0:0,
				codi1:1949
				
				
			}, {						
				color:"#edf8b1",
				text:"1950 - 1959",
				codi0:1950,
				codi1:1959
			}, {						
				color:"#c7e9b4",
				text:"1960 - 1969",
				codi0:1960,				
				codi1:1969
			}, {						
				color:"#7fcdbb",
				text:"1970 - 1979",
				codi0:1970,
				codi1:1979
			}, {						
				color:"#41b6c4",
				text:"1980 - 1989",
				codi0:1980,
				codi1:1989
			}, {						
				color:"#1d91c0",
				text:"1990 - 1999",
				codi0:1990,
				codi1:1999
			}, {						
				color:"#225ea8",
				text:"2000 - 2009",
				codi0:2000,
				codi1:2009
			}, {						
				color:"#0c2c84",
				text:"2009 >",
				codi0:2009,
				codi1:2015
			}	
		]
	};
																							
for (var i = 0; i < colorCadastre.codis.length; i++) {
	console.info(colorCadastre.codis[i].codi0 +" >= "+parseInt(codi)+" && "+colorCadastre.codis[i].codi1+" <= "+parseInt(codi));
	if (( parseInt(codi) >=colorCadastre.codis[i].codi0) && (parseInt(codi) <= colorCadastre.codis[i].codi1 )) {
	
		//if ((colorCadastre.codis[i].codi0 >= parseInt(codi)) && (colorCadastre.codis[i].codi1 <= parseInt(codi))) {
			console.info(codi);
			return {"color":colorCadastre.codis[i].color,"text":colorCadastre.codis[i].text};
		}
	}
	return {"color":"#FFFFFF","text":codi};
}

function obterColorPGOU(codi) {
var colorPGOU = {
		"codis" : [{
				codi : "Casc Antic",
				color : "#FCFCFC"
			}, {
				codi : "Conservaci&oacute; de l'Estructura Urbana i Edificat&ograve;ria",
				color : "#DBDBDB"
			}, {
				codi : "Densificaci&oacute; Urbana",
				color : "#DBDBDB"
			}, {
				codi : "Equipaments Comunitaris i Dotacions",
				color : "#DBDBDB"
			}, {
				codi : "Ordenaci&oacute; Volum&egrave;trica Espec&iacute;fica",
				color : "#E5FDE5"
			}, {
				codi : "SH",
				color : "#ACE9FC"
			}, {
				codi : "Remodelaci&oacute; F&iacute;sica",
				color : "#D1FCEE"
			}, {
				codi : "Parcs i Jardins Urbans",
				color : "#C0FCA4"
			}, {
				codi : "Transformaci&oacute; de l'&uacute;s existent (EQUIPAMENT)",
				color : "#E49797"
			}, {
				codi : "Transformaci&oacute; de l'&uacute;s existent (PARC)",
				color : "#87CDE7"
			}, {
				codi : "N4",
				color : "#EDFDD0"
			}
		]
	};
	for (var i = 0; i < colorPGOU.codis.length; i++) {
		if (colorPGOU.codis[i].codi == codi) {
			return {"color":colorPGOU.codis[i].color,"text":colorPGOU.codis[i].codi};
		}
	}
	return  {"color":"#FFFFFF","text":codi};
}

function obteColorMuc(codi) {
	var colorMuc = {
		"codis" : [{
				codi : "SX",
				color : "#FCFCFC"
			}, {
				codi : "SF",
				color : "#DBDBDB"
			}, {
				codi : "SA",
				color : "#DBDBDB"
			}, {
				codi : "SP",
				color : "#DBDBDB"
			}, {
				codi : "SS",
				color : "#E5FDE5"
			}, {
				codi : "SH",
				color : "#ACE9FC"
			}, {
				codi : "SC",
				color : "#D1FCEE"
			}, {
				codi : "SV",
				color : "#C0FCA4"
			}, {
				codi : "SD",
				color : "#E49797"
			}, {
				codi : "SE",
				color : "#87CDE7"
			}, {
				codi : "ST",
				color : "#88CCCB"
			}, {
				codi : "R1",
				color : "#856762"
			}, {
				codi : "R2",
				color : "#A3857C"
			}, {
				codi : "R3",
				color : "#C59895"
			}, {
				codi : "R4",
				color : "#BF9F76"
			}, {
				codi : "R5",
				color : "#EDE7AB"
			}, {
				codi : "R6",
				color : "#FDFCE5"
			}, {
				codi : "A1",
				color : "#AAB2F9"
			}, {
				codi : "A2",
				color : "#D3BBD3"
			}, {
				codi : "A3",
				color : "#C9BEF6"
			}, {
				codi : "M1",
				color : "#C2C2C2"
			}, {
				codi : "M2",
				color : "#C5C27C"
			}, {
				codi : "M3",
				color : "#E0AC9A"
			}, {
				codi : "D1",
				color : "#DDD1C1"
			}, {
				codi : "D2",
				color : "#E4E0F7"
			}, {
				codi : "D3",
				color : "#F1D4B3"
			}, {
				codi : "D4",
				color : "#FDE1DE"
			}, {
				codi : "D5",
				color : "#F7F8D0"
			}, {
				codi : "N1",
				color : "#DEFCB4"
			}, {
				codi : "N2",
				color : "#D7E5D9"
			}, {
				codi : "N3",
				color : "#B9D6B8"
			}, {
				codi : "N4",
				color : "#EDFDD0"
			}
		]
	};
	for (var i = 0; i < colorMuc.codis.length; i++) {
		if (colorMuc.codis[i].codi == codi) {
			return colorMuc.codis[i].color;
		}
	}
	return "#FFFFFF";
}
var handler;
function activaEvents(div) {
	handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.WHEEL);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.LEFT_UP);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.PINCH_END);
	handler.setInputAction(function (movement) {
		miraPosicio(div);
	}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

}

function miraPosicio(div) {

	var pos = viewer.scene.camera.positionCartographic;
	var x = parseFloat(pos.longitude * (180.0 / Math.PI));
	var y = parseFloat(pos.latitude * (180.0 / Math.PI));
	var z = pos.height;
	document.getElementById(div).innerHTML = '<div>Longitud:' + x.toFixed(5) + '</div><div>Latitud:' + y.toFixed(5) + '</div><div>Altitud de la càmera:' + z.toFixed(0) + ' m</div>';

}
