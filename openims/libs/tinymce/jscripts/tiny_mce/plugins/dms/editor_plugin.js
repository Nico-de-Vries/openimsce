(function(){tinymce.PluginManager.requireLangPack("dms");tinymce.create("tinymce.plugins.DmsPlugin",{init:function(a,b){var c=new RegExp("shielddummy=([^&#]*)");var d=c.exec(document.location.href)[1];a.addCommand("mceDms",function(){a.windowManager.open({file:b+"/bin/dms.php?shielddummy="+d,width:640+a.getLang("dms.delta_width",0),height:680+a.getLang("dms.delta_height",0),inline:1},{plugin_url:b,some_custom_arg:"custom arg"})});a.addButton("dms",{title:"dms.desc",cmd:"mceDms",image:b+"/img/dms.gif"})},createControl:function(a,b){return null},getInfo:function(){return{longname:"DMS plugin",author:"OpenSesame ICT",authorurl:"http://www.osict.com",infourl:"http://www.osict.com",version:"1.0"}}});tinymce.PluginManager.add("dms",tinymce.plugins.DmsPlugin)})()