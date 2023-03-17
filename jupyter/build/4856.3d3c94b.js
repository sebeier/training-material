"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4856],{74856:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N,toggleHeader:()=>$});var n,o,s=a(12867),r=a(47343),i=a(96801),l=a(53979),c=a(64176),d=a(61345),u=a(99729),p=a(26169),m=a(21743),g=a(61313),h=a(43892),y=a(90375),v=a(86098);!function(e){e.activate="apputils:activate-command-palette"}(n||(n={}));class f{constructor(e,t){this.translator=t||d.nullTranslator;const a=this.translator.load("jupyterlab");this._palette=e,this._palette.title.label="",this._palette.title.caption=a.__("Command Palette")}set placeholder(e){this._palette.inputNode.placeholder=e}get placeholder(){return this._palette.inputNode.placeholder}activate(){this._palette.activate()}addItem(e){const t=this._palette.addItem(e);return new m.DisposableDelegate((()=>{this._palette.removeItem(t)}))}}!function(e){e.activate=function(t,a,s){const{commands:i,shell:l}=t,c=a.load("jupyterlab"),d=o.createPalette(t,a),u=new r.ModalCommandPalette({commandPalette:d});let p=!1;if(d.node.setAttribute("role","region"),d.node.setAttribute("aria-label",c.__("Command Palette Section")),l.add(d,"left",{rank:300}),s){const e=s.load("@jupyterlab/apputils-extension:palette"),a=e=>{const t=e.get("modal").composite;p&&!t?(d.parent=null,u.detach(),l.add(d,"left",{rank:300})):!p&&t&&(d.parent=null,u.palette=d,d.show(),u.attach()),p=t};Promise.all([e,t.restored]).then((([e])=>{a(e),e.changed.connect((e=>{a(e)}))})).catch((e=>{console.error(e.message)}))}const m=()=>{const e=(0,h.find)(t.commands.keyBindings,(e=>e.command===n.activate));if(e){const t=e.keys.map(y.CommandRegistry.formatKeystroke).join(", ");d.title.caption=c.__("Commands (%1)",t)}else d.title.caption=c.__("Commands")};return m(),t.commands.keyBindingChanged.connect((()=>{m()})),i.addCommand(n.activate,{execute:()=>{p?u.activate():l.activateById(d.id)},label:c.__("Activate Command Palette")}),d.inputNode.placeholder=c.__("SEARCH"),new e(d,a)},e.restore=function(e,t,a){const n=o.createPalette(e,a);t.add(n,"command-palette")}}(f||(f={})),function(e){let t;e.createPalette=function(e,a){if(!t){t=new v.CommandPalette({commands:e.commands,renderer:u.CommandPaletteSvg.defaultRenderer}),t.id="command-palette",t.title.icon=u.paletteIcon;const n=a.load("jupyterlab");t.title.label=n.__("Commands")}return t}}(o||(o={}));class b extends c.DataConnector{constructor(e){super(),this._throttlers=Object.create(null),this._connector=e}fetch(e){const t=this._throttlers;return e in t||(t[e]=new g.Throttler((()=>this._connector.fetch(e)),100)),t[e].invoke()}async list(e="all"){const{isDeferred:t,isDisabled:a}=i.PageConfig.Extension,{ids:n,values:o}=await this._connector.list();return"all"===e?{ids:n,values:o}:{ids:n.filter((e=>!t(e)&&!a(e))),values:o.filter((({id:e})=>!t(e)&&!a(e)))}}async save(e,t){await this._connector.save(e,t)}}const w={id:"@jupyterlab/apputils-extension:settings",activate:async e=>{const{isDisabled:t}=i.PageConfig.Extension,a=new b(e.serviceManager.settings),n=new l.SettingRegistry({connector:a,plugins:(await a.list("active")).values});return e.restored.then((async()=>{const e=await a.list("all");e.ids.forEach((async(a,o)=>{if(!t(a)&&!(a in n.plugins))try{await n.load(a)}catch(t){console.warn(`Settings failed to load for (${a})`,t),e.values[o].schema["jupyter.lab.transform"]&&console.warn(`This may happen if {autoStart: false} in (${a}) or if it is one of the deferredExtensions in page config.`)}}))})),n},autoStart:!0,provides:l.ISettingRegistry};var _,S=a(55101);!function(e){e.changeTheme="apputils:change-theme",e.themeScrollbars="apputils:theme-scrollbars",e.changeFont="apputils:change-font",e.incrFontSize="apputils:incr-font-size",e.decrFontSize="apputils:decr-font-size"}(_||(_={}));const k={id:"@jupyterlab/apputils-extension:themes",requires:[l.ISettingRegistry,s.JupyterFrontEnd.IPaths,d.ITranslator],optional:[r.ISplashScreen],activate:(e,t,a,n,o)=>{const s=n.load("jupyterlab"),l=e.shell,c=e.commands,d=i.URLExt.join(i.PageConfig.getBaseUrl(),a.urls.themes),u=k.id,p=new r.ThemeManager({key:u,host:l,settings:t,splash:null!=o?o:void 0,url:d});let m;return p.themeChanged.connect(((e,t)=>{m=t.newValue,document.body.dataset.jpThemeLight=String(p.isLight(m)),document.body.dataset.jpThemeName=m,document.body.dataset.jpThemeScrollbars!==String(p.themeScrollbars(m))&&(document.body.dataset.jpThemeScrollbars=String(p.themeScrollbars(m))),c.notifyCommandChanged(_.changeTheme)})),c.addCommand(_.changeTheme,{label:e=>{const t=e.theme,a=p.getDisplayName(t);return e.isPalette?s.__("Use Theme: %1",a):a},isToggled:e=>e.theme===m,execute:e=>{const t=e.theme;if(t!==p.theme)return p.setTheme(t)}}),c.addCommand(_.themeScrollbars,{label:s.__("Theme Scrollbars"),isToggled:()=>p.isToggledThemeScrollbars(),execute:()=>p.toggleThemeScrollbars()}),c.addCommand(_.changeFont,{label:e=>e.enabled?`${e.font}`:s.__("waiting for fonts"),isEnabled:e=>e.enabled,isToggled:e=>p.getCSS(e.key)===e.font,execute:e=>p.setCSSOverride(e.key,e.font)}),c.addCommand(_.incrFontSize,{label:e=>{switch(e.key){case"code-font-size":return s.__("Increase Code Font Size");case"content-font-size1":return s.__("Increase Content Font Size");case"ui-font-size1":return s.__("Increase UI Font Size");default:return s.__("Increase Font Size")}},execute:e=>p.incrFontSize(e.key)}),c.addCommand(_.decrFontSize,{label:e=>{switch(e.key){case"code-font-size":return s.__("Decrease Code Font Size");case"content-font-size1":return s.__("Decrease Content Font Size");case"ui-font-size1":return s.__("Decrease UI Font Size");default:return s.__("Decrease Font Size")}},execute:e=>p.decrFontSize(e.key)}),p},autoStart:!0,provides:r.IThemeManager},C={id:"@jupyterlab/apputils-extension:themes-palette-menu",requires:[r.IThemeManager,d.ITranslator],optional:[r.ICommandPalette,S.IMainMenu],activate:(e,t,a,n,o)=>{const s=a.load("jupyterlab");o&&e.restored.then((()=>{var e;const a=null===(e=o.settingsMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-settings-apputilstheme"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===e?void 0:e.submenu;a&&t.themes.forEach(((e,t)=>{a.insertItem(t,{command:_.changeTheme,args:{isPalette:!1,theme:e}})}))})),n&&e.restored.then((()=>{const e=s.__("Theme"),a=_.changeTheme;t.themes.forEach((t=>{n.addItem({command:a,args:{isPalette:!0,theme:t},category:e})})),n.addItem({command:_.themeScrollbars,category:e}),n.addItem({command:_.incrFontSize,args:{key:"code-font-size"},category:e}),n.addItem({command:_.decrFontSize,args:{key:"code-font-size"},category:e}),n.addItem({command:_.incrFontSize,args:{key:"content-font-size1"},category:e}),n.addItem({command:_.decrFontSize,args:{key:"content-font-size1"},category:e}),n.addItem({command:_.incrFontSize,args:{key:"ui-font-size1"},category:e}),n.addItem({command:_.decrFontSize,args:{key:"ui-font-size1"},category:e})}))},autoStart:!0},I={id:"@jupyterlab/apputils-extension:toolbar-registry",autoStart:!0,provides:r.IToolbarWidgetRegistry,activate:e=>new r.ToolbarWidgetRegistry({defaultFactory:(0,r.createDefaultFactory)(e.commands)})};var x,T=a(87442),j=a(88983);!function(e){e.saveWorkspace="workspace-ui:save",e.saveWorkspaceAs="workspace-ui:save-as"}(x||(x={}));const E="jupyterlab-workspace",F="."+E,P="workspace-ui:lastSave",W={id:"@jupyterlab/apputils-extension:workspaces",autoStart:!0,requires:[j.IFileBrowserFactory,r.IWindowResolver,c.IStateDB,d.ITranslator,s.JupyterFrontEnd.IPaths],optional:[s.IRouter],activate:(e,t,a,n,o,s,r)=>{const i=new R.WorkspaceFactory({workspaces:e.serviceManager.workspaces,router:r,state:n,translator:o,paths:s}),l=o.load("jupyterlab");e.docRegistry.addFileType({name:E,contentType:"file",fileFormat:"text",displayName:l.__("JupyterLab workspace File"),extensions:[F],mimeTypes:["text/json"],iconClass:"jp-JupyterIcon"}),e.docRegistry.addWidgetFactory(i),e.commands.addCommand(x.saveWorkspaceAs,{label:l.__("Save Current Workspace As…"),execute:async()=>{const s=e.serviceManager.workspaces.fetch(a.name);await R.saveAs(t.defaultBrowser,e.serviceManager.contents,s,n,o)}}),e.commands.addCommand(x.saveWorkspace,{label:l.__("Save Current Workspace"),execute:async()=>{const{contents:s}=e.serviceManager,r=e.serviceManager.workspaces.fetch(a.name),i=await n.fetch(P);void 0===i?await R.saveAs(t.defaultBrowser,s,r,n,o):await R.save(i,s,r,n)}})}};var R,z;!function(e){async function t(e,t,a,n){let o=e.split("/").pop();void 0!==o&&o.includes(".")?o=o.split(".")[0]:e+=F,await n.save(P,e);const s=await a;s.metadata.id=`${o}`,await t.save(e,{type:"file",format:"text",content:JSON.stringify(s)})}e.save=t,e.saveAs=async function(e,a,o,s,i){var l;i=i||d.nullTranslator;const c=await s.fetch(P);let u;u=void 0===c?"new-workspace":null===(l=c.split("/").pop())||void 0===l?void 0:l.split(".")[0];const p=e.model.path+"/"+u+F,m=await async function(e,t){const a=(t=t||d.nullTranslator).load("jupyterlab"),o=r.Dialog.okButton({label:a.__("Save")}),s=await(0,r.showDialog)({title:a.__("Save Current Workspace As…"),body:new n(e),buttons:[r.Dialog.cancelButton({label:a.__("Cancel")}),o]});return s.button.label===a.__("Save")?s.value:null}(p,i);m&&await t(m,a,o,s)};class a extends T.ABCWidgetFactory{constructor(e){super({name:(e.translator||d.nullTranslator).load("jupyterlab").__("Workspace loader"),fileTypes:[E],defaultFor:[E],readOnly:!0}),this._application=e.paths.urls.app,this._router=e.router,this._state=e.state,this._workspaces=e.workspaces}createNewWidget(e){return e.ready.then((async()=>{const t=e.model.toJSON(),a=e.path,n=t.metadata.id;await this._workspaces.save(n,t),await this._state.save(P,a);const o=i.URLExt.join(this._application,"workspaces",n);this._router?this._router.navigate(o,{hard:!0}):document.location.href=o})),function(e){const t=new T.DocumentWidget({content:new v.Widget,context:e});return t.content.dispose(),t}(e)}}e.WorkspaceFactory=a;class n extends v.Widget{constructor(e){super({node:o(e)})}getValue(){return this.node.value}}function o(e){const t=document.createElement("input");return t.value=e,t}}(R||(R={})),function(e){e.loadState="apputils:load-statedb",e.print="apputils:print",e.reset="apputils:reset",e.resetOnLoad="apputils:reset-on-load",e.runFirstEnabled="apputils:run-first-enabled",e.runAllEnabled="apputils:run-all-enabled",e.toggleHeader="apputils:toggle-header"}(z||(z={}));const D={id:"@jupyterlab/apputils-extension:palette",autoStart:!0,requires:[d.ITranslator],provides:r.ICommandPalette,optional:[l.ISettingRegistry],activate:(e,t,a)=>f.activate(e,t,a)},A={id:"@jupyterlab/apputils-extension:palette-restorer",autoStart:!0,requires:[s.ILayoutRestorer,d.ITranslator],activate:(e,t,a)=>{f.restore(e,t,a)}},L={id:"@jupyterlab/apputils-extension:resolver",autoStart:!0,provides:r.IWindowResolver,requires:[s.JupyterFrontEnd.IPaths,s.IRouter],activate:async(e,t,a)=>{const{hash:n,search:o}=a.current,s=i.URLExt.queryStringToObject(o||""),l=new r.WindowResolver,c=i.PageConfig.getOption("workspace"),d=i.PageConfig.getOption("treePath"),u="multiple-document"===i.PageConfig.getOption("mode")?"lab":"doc",p=c||i.PageConfig.defaultWorkspace,m=d?i.URLExt.join("tree",d):"";try{return await l.resolve(p),l}catch(e){return new Promise((()=>{const{base:e}=t.urls,o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=o[Math.floor(Math.random()*o.length)];let l=i.URLExt.join(e,u,"workspaces",`auto-${r}`);l=m?i.URLExt.join(l,i.URLExt.encodeParts(m)):l,s.reset="";const c=l+i.URLExt.objectToQueryString(s)+(n||"");a.navigate(c,{hard:!0})}))}}},O={id:"@jupyterlab/apputils-extension:splash",autoStart:!0,requires:[d.ITranslator],provides:r.ISplashScreen,activate:(e,t)=>{const a=t.load("jupyterlab"),{commands:n,restored:o}=e,s=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");let c;s.id="jupyterlab-splash",i.id="galaxy",l.id="main-logo",u.jupyterFaviconIcon.element({container:l,stylesheet:"splash"}),i.appendChild(l),["1","2","3"].forEach((e=>{const t=document.createElement("div"),a=document.createElement("div");t.id=`moon${e}`,t.className="moon orbit",a.id=`planet${e}`,a.className="planet",t.appendChild(a),i.appendChild(t)})),s.appendChild(i);const d=new g.Throttler((async()=>{if(!c){c=new r.Dialog({title:a.__("Loading…"),body:a.__("The loading screen is taking a long time.\nWould you like to clear the workspace or keep waiting?"),buttons:[r.Dialog.cancelButton({label:a.__("Keep Waiting")}),r.Dialog.warnButton({label:a.__("Clear Workspace")})]});try{const e=await c.launch();if(c.dispose(),c=null,e.button.accept&&n.hasCommand(z.reset))return n.execute(z.reset);requestAnimationFrame((()=>{d.invoke().catch((e=>{}))}))}catch(e){}}}),{limit:12e3,edge:"trailing"});let p=0;return{show:(e=!0)=>(s.classList.remove("splash-fade"),s.classList.toggle("light",e),s.classList.toggle("dark",!e),p++,document.body.appendChild(s),d.invoke().catch((e=>{})),new m.DisposableDelegate((async()=>{await o,0==--p&&(d.stop(),c&&(c.dispose(),c=null),s.classList.add("splash-fade"),window.setTimeout((()=>{document.body.removeChild(s)}),200))})))}}},U={id:"@jupyterlab/apputils-extension:print",autoStart:!0,requires:[d.ITranslator],activate:(e,t)=>{const a=t.load("jupyterlab");e.commands.addCommand(z.print,{label:a.__("Print…"),isEnabled:()=>{const t=e.shell.currentWidget;return null!==r.Printing.getPrintFunction(t)},execute:async()=>{const t=e.shell.currentWidget,a=r.Printing.getPrintFunction(t);a&&await a()}})}},$={id:"@jupyterlab/apputils-extension:toggle-header",autoStart:!0,requires:[d.ITranslator],optional:[r.ICommandPalette],activate:(e,t,a)=>{const n=t.load("jupyterlab"),o=n.__("Main Area");e.commands.addCommand(z.toggleHeader,{label:n.__("Show Header Above Content"),isEnabled:()=>e.shell.currentWidget instanceof r.MainAreaWidget&&e.shell.currentWidget.contentHeader.widgets.length>0,isToggled:()=>{const t=e.shell.currentWidget;return t instanceof r.MainAreaWidget&&!t.contentHeader.isHidden},execute:async()=>{const t=e.shell.currentWidget;t instanceof r.MainAreaWidget&&t.contentHeader.setHidden(!t.contentHeader.isHidden)}}),a&&a.addItem({command:z.toggleHeader,category:o})}},M={id:"@jupyterlab/apputils-extension:state",autoStart:!0,provides:c.IStateDB,requires:[s.JupyterFrontEnd.IPaths,s.IRouter,d.ITranslator],optional:[r.IWindowResolver],activate:(e,t,a,n,o)=>{const s=n.load("jupyterlab");if(null===o)return new c.StateDB;let r=!1;const{commands:l,name:d,serviceManager:u}=e,{workspaces:m}=u,h=o.name,y=new p.PromiseDelegate,v=new c.StateDB({transform:y.promise}),f=new g.Debouncer((async()=>{const e=h,t={id:e},a=await v.toJSON();await m.save(e,{data:a,metadata:t})}));return v.changed.connect((()=>{f.invoke()}),v),v.changed.connect((()=>async function(e,t,a){var n,o;const s=await t.toJSON();if(void 0===(null===(o=null===(n=s["layout-restorer:data"])||void 0===n?void 0:n.main)||void 0===o?void 0:o.current))document.title=`${i.PageConfig.getOption("appName")||"JupyterLab"}${e.startsWith("auto-")?` (${e})`:""}`;else{let t=i.PathExt.basename(window.location.href);t=t.length>15?t.slice(0,12).concat("…"):t;const n=Object.keys(s).filter((e=>e.startsWith("notebook")||e.startsWith("editor"))).length;e.startsWith("auto-")?document.title=`${t} (${e}${n>1?` : ${n}`:""}) - ${a}`:document.title=`${t}${n>1?` (${n})`:""} - ${a}`}}(h,v,d))),l.addCommand(z.loadState,{execute:async e=>{if(r)return;const{hash:t,path:n,search:o}=e,s=i.URLExt.queryStringToObject(o||""),l="string"==typeof s.clone?""===s.clone?i.PageConfig.defaultWorkspace:s.clone:null,c=l||h||null;if(null!==c){try{const e=await m.fetch(c);r||(r=!0,y.resolve({type:"overwrite",contents:e.data}))}catch({message:e}){console.warn(`Fetching workspace "${h}" failed.`,e),r||(r=!0,y.resolve({type:"cancel",contents:null}))}if(c===l){delete s.clone;const e=n+i.URLExt.objectToQueryString(s)+t,o=f.invoke().then((()=>a.stop));return o.then((()=>{a.navigate(e)})),o}await f.invoke()}else console.error(`${z.loadState} cannot load null workspace.`)}}),l.addCommand(z.reset,{label:s.__("Reset Application State"),execute:async({reload:e})=>{await v.clear(),await f.invoke(),e&&a.reload()}}),l.addCommand(z.resetOnLoad,{execute:e=>{const{hash:t,path:n,search:o}=e,s=i.URLExt.queryStringToObject(o||""),l="clone"in s;if(!("reset"in s))return;if(r)return a.reload();r=!0,y.resolve({type:"clear",contents:null}),delete s.reset;const c=n+i.URLExt.objectToQueryString(s)+t,d=v.clear().then((()=>f.invoke()));return l?d.then((()=>{a.navigate(c,{hard:!0})})):d.then((()=>{a.navigate(c)})),d}}),a.register({command:z.loadState,pattern:/.?/,rank:30}),a.register({command:z.resetOnLoad,pattern:/(\?reset|\&reset)($|&)/,rank:20}),v}},B={id:"@jupyterlab/apputils-extension:sessionDialogs",provides:r.ISessionContextDialogs,autoStart:!0,activate:()=>r.sessionContextDialogs},q={id:"@jupyterlab/apputils-extension:utilityCommands",requires:[d.ITranslator],autoStart:!0,activate:(e,t)=>{const a=t.load("jupyterlab"),{commands:n}=e;n.addCommand(z.runFirstEnabled,{label:a.__("Run First Enabled Command"),execute:t=>{const a=t.commands,n=t.args,o=Array.isArray(t);for(let t=0;t<a.length;t++){const s=a[t],r=o?n[t]:n;if(e.commands.isEnabled(s,r))return e.commands.execute(s,r)}}}),n.addCommand(z.runAllEnabled,{label:a.__("Run All Enabled Commands Passed as Args"),execute:async t=>{const a=t.commands,n=t.args,o=Array.isArray(t),s=t.errorIfNotEnabled;for(let t=0;t<a.length;t++){const r=a[t],i=o?n[t]:n;e.commands.isEnabled(r,i)?await e.commands.execute(r,i):s&&console.error(`${r} is not enabled.`)}}})}},N=[D,A,U,L,{id:"@jupyter/apputils-extension:sanitizer",autoStart:!0,provides:r.ISanitizer,activate:()=>r.defaultSanitizer},w,M,O,B,k,C,$,I,q,W]}}]);
//# sourceMappingURL=4856.3d3c94b.js.map