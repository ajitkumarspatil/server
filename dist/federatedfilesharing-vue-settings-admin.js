/*! For license information please see federatedfilesharing-vue-settings-admin.js.LICENSE.txt */
!function(){"use strict";var e,r={85242:function(e,r,n){var o=n(20144),a=n(22200),i=n(9944),s=(n(73317),n(79954)),d=n(20571),u=n.n(d),c=n(13299),l=n.n(c),h=n(26932),f=n(4820),v=n(79753),p=n(10128),g=n.n(p);function S(e,r,n,t,o,a,i){try{var s=e[a](i),d=s.value}catch(e){return void n(e)}s.done?r(d):Promise.resolve(d).then(t,o)}function b(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function i(e){S(a,t,o,i,s,"next",e)}function s(e){S(a,t,o,i,s,"throw",e)}i(void 0)}))}}var k={name:"AdminSettings",components:{NcCheckboxRadioSwitch:u(),NcSettingsSection:l()},data:function(){return{outgoingServer2serverShareEnabled:(0,s.j)("federatedfilesharing","outgoingServer2serverShareEnabled"),incomingServer2serverShareEnabled:(0,s.j)("federatedfilesharing","incomingServer2serverShareEnabled"),outgoingServer2serverGroupShareEnabled:(0,s.j)("federatedfilesharing","outgoingServer2serverGroupShareEnabled"),incomingServer2serverGroupShareEnabled:(0,s.j)("federatedfilesharing","incomingServer2serverGroupShareEnabled"),federatedGroupSharingSupported:(0,s.j)("federatedfilesharing","federatedGroupSharingSupported"),lookupServerEnabled:(0,s.j)("federatedfilesharing","lookupServerEnabled"),lookupServerUploadEnabled:(0,s.j)("federatedfilesharing","lookupServerUploadEnabled"),internalOnly:(0,s.j)("federatedfilesharing","internalOnly"),sharingFederatedDocUrl:(0,s.j)("federatedfilesharing","sharingFederatedDocUrl")}},methods:{update:function(e,r){var n=this;return b(regeneratorRuntime.mark((function o(){var a,i,s,d,u,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,g()();case 2:return a=(0,v.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"files_sharing",key:e}),i=r?"yes":"no",o.prev=4,o.next=7,f.default.post(a,{value:i});case 7:u=o.sent,c=u.data,n.handleResponse({status:null===(s=c.ocs)||void 0===s||null===(d=s.meta)||void 0===d?void 0:d.status}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(4),n.handleResponse({errorMessage:t("federatedfilesharing","Unable to update federated files sharing config"),error:o.t0});case 15:case"end":return o.stop()}}),o,null,[[4,12]])})))()},handleResponse:function(e){return b(regeneratorRuntime.mark((function r(){var n,t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.status,t=e.errorMessage,o=e.error,"ok"!==n&&((0,h.x2)(t),console.error(t,o));case 2:case"end":return r.stop()}}),r)})))()}}},m=(0,n(51900).Z)(k,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("NcSettingsSection",{attrs:{title:e.t("federatedfilesharing","Federated Cloud Sharing"),description:e.t("federatedfilesharing","Adjust how people can share between servers. This includes shares between users on this server as well if they are using federated sharing."),"doc-url":e.sharingFederatedDocUrl}},[n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverShareEnabled=r},function(r){return e.update("outgoing_server2server_share_enabled",e.outgoingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to send shares to other servers (this option also allows WebDAV access to public shares)"))+"\n\t")]),e._v(" "),n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverShareEnabled=r},function(r){return e.update("incoming_server2server_share_enabled",e.incomingServer2serverShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to receive shares from other servers"))+"\n\t")]),e._v(" "),e.federatedGroupSharingSupported?n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.outgoingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.outgoingServer2serverGroupShareEnabled=r},function(r){return e.update("outgoing_server2server_group_share_enabled",e.outgoingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to send shares to groups on other servers"))+"\n\t")]):e._e(),e._v(" "),e.federatedGroupSharingSupported?n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.incomingServer2serverGroupShareEnabled},on:{"update:checked":[function(r){e.incomingServer2serverGroupShareEnabled=r},function(r){return e.update("incoming_server2server_group_share_enabled",e.incomingServer2serverGroupShareEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users on this server to receive group shares from other servers"))+"\n\t")]):e._e(),e._v(" "),n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerEnabled},on:{"update:checked":[function(r){e.lookupServerEnabled=r},function(r){return e.update("lookupServerEnabled",e.lookupServerEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Search global and public address book for users"))+"\n\t")]),e._v(" "),n("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.lookupServerUploadEnabled},on:{"update:checked":[function(r){e.lookupServerUploadEnabled=r},function(r){return e.update("lookupServerUploadEnabled",e.lookupServerUploadEnabled)}]}},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Allow users to publish their data to a global and public address book"))+"\n\t")])],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,a.getRequestToken)()),o.ZP.mixin({methods:{t:i.translate}}),(0,s.j)("federatedfilesharing","internalOnly",!1)||(new(o.ZP.extend(m))).$mount("#vue-admin-federated")}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=function(r,n,t,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],t=e[c][1],a=e[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=t();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,t,a]},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,{a:r}),r},o.d=function(e,r){for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.j=7220,function(){o.b=document.baseURI||self.location.href;var e={7220:0};o.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,a,i=n[0],s=n[1],d=n[2],u=0;if(i.some((function(r){return 0!==e[r]}))){for(t in s)o.o(s,t)&&(o.m[t]=s[t]);if(d)var c=d(o)}for(r&&r(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}(),o.nc=void 0;var a=o.O(void 0,[7874],(function(){return o(85242)}));a=o.O(a)}();
//# sourceMappingURL=federatedfilesharing-vue-settings-admin.js.map?v=4dd5651c17d2527ceeb8