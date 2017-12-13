function supportsWebgl() {
  
    if (!window.WebGLRenderingContext) {
      
var iDiv = document.createElement('div');		
iDiv.id = 'webgl_test';
iDiv.style.backgroundColor= '#d5d5d5';
iDiv.style.height= '99%';
iDiv.style.left= '0';
iDiv.style.opacity= '1';
iDiv.style.position= 'absolute';
iDiv.style.textAlign= 'center';
iDiv.style.top= '0';
iDiv.style.width= '100%';
iDiv.style.zIndex= '1000';
iDiv.style.verticalAlign='middle';
iDiv.style.lineHeight='30px';
//iDiv.style.padding='15%';

document.getElementsByTagName('body')[0].appendChild(iDiv);
iDiv.innerHTML='<h1>Ups!  Ho sentim, no es pot inicialitzar el mapa en 3D </h1>'+
'<h3>Aquest prototip utilitza <a href="http://cesiumjs.org/" target="_blank" >Cesium JS</a>, una llibreria per a la creació de mapes en 3D -basada amb WebGL- que per funcionar correctament necessita que tingueu la darrera versió del navegador web i que la tarja gràfica del vostre ordinador tingui carregats els drivers més actuals</h3>'+		
'<h3><a target="_self" href="http://betaportal.icgc.cat/?noWebgl">http://betaportal.icgc.cat</a></h3>';			
		

ga('send', 'event', 'noWebGL', 'Navegador_vell');
		
        return false;
    }
    var canvas = document.createElement( 'canvas' );

    var webglOptions = {
        alpha : false,
        stencil : false,
        failIfMajorPerformanceCaveat : true
    };

    var gl = canvas.getContext("webgl", webglOptions) || canvas.getContext("experimental-webgl", webglOptions);
    if (!gl) {
       
		var iDiv = document.createElement('div');
iDiv.id = 'webgl_test';
iDiv.style.backgroundColor= '#d5d5d5';
iDiv.style.height= '99%';
iDiv.style.left= '0';
iDiv.style.opacity= '0.95';
iDiv.style.position= 'absolute';
iDiv.style.textAlign= 'center';
iDiv.style.top= '0';
iDiv.style.width= '100%';
iDiv.style.zIndex= '1000';
iDiv.style.verticalAlign='middle';
iDiv.style.lineHeight='30px';
//iDiv.style.padding='15%';






document.getElementsByTagName('body')[0].appendChild(iDiv);
iDiv.innerHTML='<h1 style="color:red">Ups!  Ho sentim, no es pot inicialitzar el mapa en 3D.</h1>'+
 '<h3>Aquest prototip utilitza <a href="http://cesiumjs.org/" target="_blank" >Cesium JS</a>, una llibreria per a la creació de mapes en 3D - basada amb WebGL - que per funcionar correctament necessita que tingueu la darrera versió del navegador web i que la tarja gràfica del vostre ordinador tingui carregats els drivers més actuals</h3>'+		
 '<h3><a target="_self" href="http://betaportal.icgc.cat/?noWebgl">http://betaportal.icgc.cat</a></h3>';		
		
		
		
		
ga('send', 'event', 'noWebGL', 'Drivers_o_navegador');		
		
        return false;
    }
	
	ga('send', 'event', 'siWebGL', 'ok');
    return true;
}