// ==UserScript==
// @id             iitc-plugin-arc-toolbox-frame
// @name           IITC plugin: Arc Toolbox Frame
// @category       Layer
// @version      1.0
// @description  Combines Arc menu buttons in a frame.
// @author       YET ANOTHER ENLIGHTENED AGENT
// @match          https://intel.ingress.com/*
// @grant        none
// @downloadURL https://github.com/Heistergand/arc-toolbox-frame/raw/master/arc-toolbox-frame.user.js
// @updateURL https://github.com/Heistergand/arc-toolbox-frame/raw/master/arc-toolbox-frame.meta.js
// ==/UserScript==



function wrapper(plugin_info) {
    // ensure plugin framework is there, even if iitc is not yet loaded
    if(typeof window.plugin !== 'function') window.plugin = function() {};

    //PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
    //(leaving them in place might break the 'About IITC' page or break update checks)
    plugin_info.buildName = 'iitc';
    plugin_info.dateTimeVersion = '20170108.21732';
    plugin_info.pluginId = 'draw-tools';
    //END PLUGIN AUTHORS NOTE



    // PLUGIN START ////////////////////////////////////////////////////////

    // ensure plugin framework is there, even if iitc is not yet loaded
    if(typeof window.plugin !== 'function') window.plugin = function() {};

    // PLUGIN START ////////////////////////////////////////////////////////


    // use own namespace for plugin
    window.plugin.arctoolboxframe = function() {};
    window.plugin.arctoolboxframe.load = function() {
        try { console.log('Loading Arc Toolbox Frame'); } catch(e) {}


        $("<style>").prop("type", "text/css").html('a.plugin_arcs_toolbox_nolink:hover {text-decoration: none; cursor:initial;}').appendTo("head");

        $("#toolbox > [onclick^='window.plugin.arcs.']").wrapAll("<fieldset id='plugin_arcs_toolbox' style='margin: 5px; padding: 3px; border: 1px solid rgb(255, 206, 0); box-shadow: black 3px 3px 5px; color: rgb(255, 206, 0);'></fieldset>");
        $("#plugin_arcs_toolbox").prepend("<legend>Arcs</legend>");
        $("#plugin_arcs_toolbox > a").css({
            "margin-left": "5px",
            "white-space": "nowrap"
        });
        $("#plugin_arcs_toolbox > a").after("<a class='plugin_arcs_toolbox_nolink' id='plugin_arcs_toolbox_wrapper' style='white-space: normal; margin: 0px;letter-spacing: 0px;'> </a>");

    };

    var setup =  window.plugin.arctoolboxframe.load;

    // PLUGIN END //////////////////////////////////////////////////////////


    setup.info = plugin_info; //add the script info data to the function as a property
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);

