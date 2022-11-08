/**
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 */

var html_renderer = function() {};
window.org = { ekstep: {} }
org.ekstep.renderer = new html_renderer();
window.org.ekstep.renderer.html = window.top;

/**
 * Interface to access canvas underscore lib 
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html._ = window.top._;

/**
 * Interface to access canvas jquery lib
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.jQuery = window.top.$;

/**
 *  Interface to access canvas angular lib
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.angular = window.top.angular;

/**
 * Interface to access canvas underscore lib 
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.EventBus = window.top.EventBus;

/**
 *  Interface to navigate to endPage
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.showEndPage = function() {
	org.ekstep.renderer.html.EkstepRendererAPI.showEndPage();
};

/**
 * Interface to Access Canvas Renderer API's
 * @memberof org.ekstep.renderer.html
 */
 org.ekstep.renderer.html.api  = org.ekstep.renderer.html.EkstepRendererAPI;

/**
 * Interface to enable Overlay on top of game
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.enableOverlay = function(){
	org.ekstep.renderer.html.api.showOverlay();
};

/**
 * Interface to disable Overlay from top of game
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.disableOverlay = function(){
	org.ekstep.renderer.html.api.hideOverlay();
};

/**
 * Interface to Hide the canvas endpage
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.hideEndPage = function(){
	org.ekstep.renderer.html.EkstepRendererAPI.hideEndPage();
};

/**
 * Interface to Access HTML Service
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.service = function(){
	return org.ekstep.renderer.html.org.ekstep.service.html;
};

/*
 * Interface to Access Telemetry service
 * @memberof org.ekstep.renderer.html
 */
 
org.ekstep.renderer.html.telemetryService = org.ekstep.renderer.html.TelemetryService;

/**
 *  Interface to exit the game 
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.contentService = function(){
	return EkstepRendererAPI.getService();
};

/**
 * Interface to Access Content Metadata
 * @param  {String} contentId identifier of the game
 * @memberof org.ekstep.renderer.html 
 */

org.ekstep.renderer.html.getcontentMetadata = function(contentId, cb){
	org.ekstep.renderer.html.org.ekstep.contentrenderer.getContentMetadata(contentId, function(){
		if(cb) cb();
	});
};

/**
 * Interface is to verify the env of game is running 
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.isCordovaEnv = function(){
	return window.cordova ? true : false ;
};

/**
 * Interface is to exit the game 
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.exit = function(){
	org.ekstep.renderer.html.exitApp();
};

/**
 * Interface to enable or disable the progress bar
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.ProgressBar = function(flag){
	org.ekstep.contentrenderer.progressbar(flag);
}

/**
 * Interface to show custom toast message
 * @param  {String} errorType type of the error (eg: warn, error)
 * @param  {String} message message to show in the toast
 * @param  {obj} customStyle obj to show the toaster
 * @memberof org.ekstep.renderer.html
 */
org.ekstep.renderer.html.showToastMessage = function(errorType, message, customStyleObj){
	org.ekstep.renderer.html.showToaster(errorType, message, customStyleObj)
}

