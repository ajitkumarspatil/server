/*! For license information please see core-profile.js.LICENSE.txt */
!function(){"use strict";var n,e={91229:function(n,e,a){var r,i=a(20144),o=a(22200),A=a(9944),s=a(34741),l=a(17499),d=null===(r=(0,o.getCurrentUser)())?(0,l.IY)().setApp("core").build():(0,l.IY)().setApp("core").setUid(r.uid).build(),c=a(74854),p=a(79954),C=a(79753),u=a(26932),_=a(75925),v=a.n(_),g=a(12945),f=a.n(g),h=a(76212),m=a.n(h),b=a(93050),x=a(91482),y=a(1203),k={name:"PrimaryActionButton",props:{disabled:{type:Boolean,default:!1},href:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,validator:function(t){return["_self","_blank","_parent","_top"].includes(t)}}},computed:{colorPrimaryText:function(){return getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()}}},w=a(93379),B=a.n(w),E=a(7795),D=a.n(E),P=a(90569),I=a.n(P),S=a(3565),U=a.n(S),z=a(19216),Z=a.n(z),O=a(44589),M=a.n(O),j=a(53155),G={};G.styleTagTransform=M(),G.setAttributes=U(),G.insert=I().bind(null,"head"),G.domAPI=D(),G.insertStyleElement=Z(),B()(j.Z,G),j.Z&&j.Z.locals&&j.Z.locals;var W=a(51900),Y=(0,W.Z)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",t._g({staticClass:"profile__primary-action-button",class:{disabled:t.disabled},attrs:{href:t.href,target:t.target,rel:"noopener noreferrer nofollow"}},t.$listeners),[e("img",{staticClass:"icon",class:[t.icon,{"icon-invert":"#ffffff"===t.colorPrimaryText}],attrs:{src:t.icon}}),t._v(" "),t._t("default")],2)}),[],!1,null,"35d5c4b6",null).exports,q=(0,p.j)("core","status",{}),T=(0,p.j)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),$=T.userId,F=T.displayname,N=T.address,L=T.organisation,R=T.role,K=T.headline,V=T.biography,J=T.actions,H=T.isUserAvatarVisible,Q={name:"Profile",components:{AccountIcon:y.Z,NcActionLink:m(),NcActions:f(),NcAvatar:v(),MapMarkerIcon:b.Z,PencilIcon:x.default,PrimaryActionButton:Y},data:function(){return{status:q,userId:$,displayname:F,address:N,organisation:L,role:R,headline:K,biography:V,actions:J,isUserAvatarVisible:H}},computed:{isCurrentUser:function(){var t;return(null===(t=(0,o.getCurrentUser)())||void 0===t?void 0:t.uid)===this.userId},allActions:function(){return this.actions},primaryAction:function(){return this.allActions.length?this.allActions[0]:null},middleActions:function(){return this.allActions.slice(1,4).length?this.allActions.slice(1,4):null},otherActions:function(){return this.allActions.slice(4).length?this.allActions.slice(4):null},settingsUrl:function(){return(0,C.generateUrl)("/settings/user")},colorMainBackground:function(){return getComputedStyle(document.body).getPropertyValue("--color-main-background").trim()},emptyProfileMessage:function(){return this.isCurrentUser?t("core","You have not added any info yet"):t("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted:function(){document.title="".concat(this.displayname||this.userId," - ").concat(document.title),(0,c.Ld)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy:function(){(0,c.r1)("user_status:status.updated",this.handleStatusUpdate)},methods:{handleStatusUpdate:function(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal:function(){var n=document.querySelector(".user-status-menu-item__toggle");this.isCurrentUser&&(n?n.click():(0,u.x2)(t("core","Error opening the user status modal, try hard refreshing the page")))}}},X=a(52500),tt={};tt.styleTagTransform=M(),tt.setAttributes=U(),tt.insert=I().bind(null,"head"),tt.domAPI=D(),tt.insertStyleElement=Z(),B()(X.Z,tt),X.Z&&X.Z.locals&&X.Z.locals;var nt=a(63350),et={};et.styleTagTransform=M(),et.setAttributes=U(),et.insert=I().bind(null,"head"),et.domAPI=D(),et.insertStyleElement=Z(),B()(nt.Z,et),nt.Z&&nt.Z.locals&&nt.Z.locals;var at=(0,W.Z)(Q,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"profile"},[e("div",{staticClass:"profile__header"},[e("div",{staticClass:"profile__header__container"},[e("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),e("h2",{staticClass:"profile__header__container__displayname"},[t._v("\n\t\t\t\t"+t._s(t.displayname||t.userId)+"\n\t\t\t\t"),t.isCurrentUser?e("a",{staticClass:"primary profile__header__container__edit-button",attrs:{href:t.settingsUrl}},[e("PencilIcon",{staticClass:"pencil-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.status.icon||t.status.message?e("div",{staticClass:"profile__header__container__status-text",class:{interactive:t.isCurrentUser},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.openStatusModal.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__sidebar"},[e("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),e("div",{staticClass:"user-actions"},[t.primaryAction?e("PrimaryActionButton",{staticClass:"user-actions__primary",attrs:{href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"user-actions__other"},[t._l(t.middleActions,(function(n){return e("NcActions",{key:n.id,staticStyle:{"background-position":"14px center","background-size":"16px","background-repeat":"no-repeat"},style:Object.assign({},{backgroundImage:"url("+n.icon+")"},"#181818"===t.colorMainBackground&&{filter:"invert(1)"}),attrs:{"default-icon":n.icon}},[e("NcActionLink",{attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t")])],1)})),t._v(" "),t.otherActions?[e("NcActions",{attrs:{"force-menu":!0}},t._l(t.otherActions,(function(n){return e("NcActionLink",{key:n.id,class:{"icon-invert":"#181818"===t.colorMainBackground},attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t")])})),1)]:t._e()],2)],1)],1),t._v(" "),e("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?e("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?e("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?e("div",{staticClass:"detail"},[e("p",[e("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography?[t.headline?e("div",{staticClass:"profile__blocks-headline"},[e("h3",[t._v(t._s(t.headline))])]):t._e(),t._v(" "),t.biography?e("div",{staticClass:"profile__blocks-biography"},[e("p",[t._v(t._s(t.biography))])]):t._e()]:[e("div",{staticClass:"profile__blocks-empty-info"},[e("AccountIcon",{attrs:{size:60,"fill-color":"var(--color-text-maxcontrast)"}}),t._v(" "),e("h3",[t._v(t._s(t.emptyProfileMessage))]),t._v(" "),e("p",[t._v(t._s(t.t("core","The headline and about sections will show up here")))])],1)]],2)])])}),[],!1,null,"b1ed366c",null),rt=at.exports;a.nc=btoa((0,o.getRequestToken)()),i.ZP.use(s.default),i.ZP.mixin({props:{logger:d},methods:{t:A.translate}});var it=i.ZP.extend(rt);window.addEventListener("DOMContentLoaded",(function(){(new it).$mount("#vue-profile")}))},53155:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,".profile__primary-action-button[data-v-35d5c4b6]{font-size:var(--default-font-size);font-weight:bold;width:188px;height:44px;padding:0 16px;line-height:44px;text-align:center;border-radius:var(--border-radius-pill);color:var(--color-primary-text);background-color:var(--color-primary-element);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.profile__primary-action-button .icon[data-v-35d5c4b6]{display:inline-block;vertical-align:middle;margin-bottom:2px;margin-right:4px}.profile__primary-action-button .icon.icon-invert[data-v-35d5c4b6]{filter:invert(1)}.profile__primary-action-button[data-v-35d5c4b6]:hover,.profile__primary-action-button[data-v-35d5c4b6]:focus,.profile__primary-action-button[data-v-35d5c4b6]:active{background-color:var(--color-primary-element-light)}","",{version:3,sources:["webpack://./core/src/components/Profile/PrimaryActionButton.vue"],names:[],mappings:"AAsEA,iDACC,kCAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,uCAAA,CACA,+BAAA,CACA,6CAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uDACC,oBAAA,CACA,qBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,mEACC,gBAAA,CAIF,sKAGC,mDAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.profile__primary-action-button {\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\twidth: 188px;\n\theight: 44px;\n\tpadding: 0 16px;\n\tline-height: 44px;\n\ttext-align: center;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-primary-text);\n\tbackground-color: var(--color-primary-element);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-bottom: 2px;\n\t\tmargin-right: 4px;\n\n\t\t&.icon-invert {\n\t\t\tfilter: invert(1);\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n}\n"],sourceRoot:""}]),n.Z=o},52500:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,"#header{background-color:rgba(0,0,0,0) !important;background-image:none !important}#content{padding-top:0px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AA+RA,QACC,yCAAA,CACA,gCAAA,CAGD,SACC,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Override header styles\n#header {\n\tbackground-color: transparent !important;\n\tbackground-image: none !important;\n}\n\n#content {\n\tpadding-top: 0px;\n}\n"],sourceRoot:""}]),n.Z=o},63350:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,".profile[data-v-b1ed366c]{width:100%}.profile__header[data-v-b1ed366c]{position:sticky;height:190px;top:-40px;background-color:var(--color-primary);background-image:var(--gradient-primary-background)}.profile__header__container[data-v-b1ed366c]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-b1ed366c]{grid-row:1/3}.profile__header__container__displayname[data-v-b1ed366c],.profile__header__container__status-text[data-v-b1ed366c]{color:var(--color-primary-text)}.profile__header__container__displayname[data-v-b1ed366c]{width:640px;height:45px;margin-top:128px;margin-bottom:0;font-size:30px;display:flex;align-items:center;cursor:text}.profile__header__container__displayname[data-v-b1ed366c]:not(:last-child){margin-top:100px;margin-bottom:4px}.profile__header__container__edit-button[data-v-b1ed366c]{border:none;margin-left:18px;margin-top:2px;color:var(--color-primary-element);background-color:var(--color-primary-text);box-shadow:0 0 0 2px var(--color-primary-text);border-radius:var(--border-radius-pill);padding:0 18px;font-size:var(--default-font-size);height:44px;line-height:44px;font-weight:bold}.profile__header__container__edit-button[data-v-b1ed366c]:hover,.profile__header__container__edit-button[data-v-b1ed366c]:focus,.profile__header__container__edit-button[data-v-b1ed366c]:active{color:var(--color-primary-text);background-color:var(--color-primary-element-light)}.profile__header__container__edit-button .pencil-icon[data-v-b1ed366c]{display:inline-block;vertical-align:middle;margin-top:2px}.profile__header__container__status-text[data-v-b1ed366c]{width:max-content;max-width:640px;padding:5px 10px;margin-left:-12px;margin-top:2px}.profile__header__container__status-text.interactive[data-v-b1ed366c]{cursor:pointer}.profile__header__container__status-text.interactive[data-v-b1ed366c]:hover,.profile__header__container__status-text.interactive[data-v-b1ed366c]:focus,.profile__header__container__status-text.interactive[data-v-b1ed366c]:active{background-color:var(--color-main-background);color:var(--color-main-text);border-radius:var(--border-radius-pill);font-weight:bold;box-shadow:0 3px 6px var(--color-box-shadow)}.profile__sidebar[data-v-b1ed366c]{position:sticky;top:var(--header-height);align-self:flex-start;padding-top:20px;min-width:220px;margin:-150px 20px 0 0}.profile__sidebar[data-v-b1ed366c] .avatar.avatardiv,.profile__sidebar h2[data-v-b1ed366c]{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-b1ed366c] .avatar.avatardiv:not(.avatardiv--unknown){background-color:var(--color-main-background) !important;box-shadow:none}.profile__sidebar[data-v-b1ed366c] .avatar.avatardiv .avatardiv__user-status{right:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__sidebar[data-v-b1ed366c] .avatar.interactive.avatardiv .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-b1ed366c] .avatar.interactive.avatardiv .avatardiv__user-status:hover,.profile__sidebar[data-v-b1ed366c] .avatar.interactive.avatardiv .avatardiv__user-status:focus,.profile__sidebar[data-v-b1ed366c] .avatar.interactive.avatardiv .avatardiv__user-status:active{box-shadow:0 3px 6px var(--color-box-shadow)}.profile__content[data-v-b1ed366c]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-b1ed366c]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-b1ed366c],.profile__blocks h3[data-v-b1ed366c]{overflow-wrap:anywhere}.profile__blocks-details[data-v-b1ed366c]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-b1ed366c]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-b1ed366c]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-b1ed366c]{margin-top:10px}.profile__blocks-headline h3[data-v-b1ed366c]{font-weight:bold;font-size:20px;margin:0}.profile__blocks-biography[data-v-b1ed366c]{white-space:pre-line}.profile__blocks h3[data-v-b1ed366c],.profile__blocks p[data-v-b1ed366c]{cursor:text}.profile__blocks-empty-info[data-v-b1ed366c]{margin-top:80px;margin-right:100px;display:flex;flex-direction:column;text-align:center}.profile__blocks-empty-info h3[data-v-b1ed366c]{font-weight:bold;font-size:18px;margin:8px 0}@media only screen and (max-width: 1024px){.profile__header[data-v-b1ed366c]{height:250px;position:unset}.profile__header__container[data-v-b1ed366c]{grid-template-columns:unset}.profile__header__container__displayname[data-v-b1ed366c]{margin:100px 20px 0px;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-b1ed366c]{width:fit-content;display:block;margin:30px auto}.profile__content[data-v-b1ed366c]{display:block}.profile__blocks[data-v-b1ed366c]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__blocks-empty-info[data-v-b1ed366c]{margin:0}.profile__sidebar[data-v-b1ed366c]{margin:unset;position:unset}}.user-actions[data-v-b1ed366c]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-b1ed366c]{margin:0 auto}.user-actions__other[data-v-b1ed366c]{display:flex;justify-content:center;gap:0 4px}.user-actions__other a[data-v-b1ed366c]{filter:var(--background-invert-if-dark)}.icon-invert[data-v-b1ed366c] .action-link__icon{filter:invert(1)}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AA6SA,0BACC,UAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,qCAAA,CACA,mDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAhBiB,CAiBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,oHACC,+BAAA,CAGD,0DACC,WA/BgB,CAgChB,WAAA,CACA,gBAAA,CAEA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,2EACC,gBAAA,CACA,iBAAA,CAIF,0DACC,WAAA,CACA,gBAAA,CACA,cAAA,CACA,kCAAA,CACA,0CAAA,CACA,8CAAA,CACA,uCAAA,CACA,cAAA,CACA,kCAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CAEA,iMAGC,+BAAA,CACA,mDAAA,CAGD,uEACC,oBAAA,CACA,qBAAA,CACA,cAAA,CAIF,0DACC,iBAAA,CACA,eA7EgB,CA8EhB,gBAAA,CACA,iBAAA,CACA,cAAA,CAEA,sEACC,cAAA,CAEA,qOAGC,6CAAA,CACA,4BAAA,CACA,uCAAA,CACA,gBAAA,CACA,4CAAA,CAOL,mCACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CAGA,2FACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGD,8EACC,wDAAA,CACA,eAAA,CAIA,6EACC,UAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKD,yFACC,cAAA,CAEA,8RAGC,4CAAA,CAMJ,mCACC,gBAtJkB,CAuJlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WA/JkB,CAiKlB,yEACC,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CAEA,8CACC,gBAAA,CACA,cAAA,CACA,QAAA,CAIF,4CACC,oBAAA,CAGD,yEACC,WAAA,CAGD,6CACC,eAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gDACC,gBAAA,CACA,cAAA,CACA,YAAA,CAMJ,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,qBAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAEA,6CACC,QAAA,CAIF,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAGD,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CACA,wCACC,uCAAA,CAMF,iDACC,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$profile-max-width: 1024px;\n$content-max-width: 640px;\n\n.profile {\n\twidth: 100%;\n\n\t&__header {\n\t\tposition: sticky;\n\t\theight: 190px;\n\t\ttop: -40px;\n\t\tbackground-color: var(--color-primary);\n\t\tbackground-image: var(--gradient-primary-background);\n\n\t\t&__container {\n\t\t\talign-self: flex-end;\n\t\t\twidth: 100%;\n\t\t\tmax-width: $profile-max-width;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: max-content max-content;\n\t\t\tgrid-template-columns: 240px 1fr;\n\t\t\tjustify-content: center;\n\n\t\t\t&__placeholder {\n\t\t\t\tgrid-row: 1 / 3;\n\t\t\t}\n\n\t\t\t&__displayname, &__status-text {\n\t\t\t\tcolor: var(--color-primary-text);\n\t\t\t}\n\n\t\t\t&__displayname {\n\t\t\t\twidth: $content-max-width;\n\t\t\t\theight: 45px;\n\t\t\t\tmargin-top: 128px;\n\t\t\t\t// Override the global style declaration\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tfont-size: 30px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: text;\n\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-top: 100px;\n\t\t\t\t\tmargin-bottom: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__edit-button {\n\t\t\t\tborder: none;\n\t\t\t\tmargin-left: 18px;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tcolor: var(--color-primary-element);\n\t\t\t\tbackground-color: var(--color-primary-text);\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-text);\n\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\tpadding: 0 18px;\n\t\t\t\tfont-size: var(--default-font-size);\n\t\t\t\theight: 44px;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-weight: bold;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: var(--color-primary-text);\n\t\t\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t\t\t}\n\n\t\t\t\t.pencil-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\tmargin-top: 2px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__status-text {\n\t\t\t\twidth: max-content;\n\t\t\t\tmax-width: $content-max-width;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tmargin-left: -12px;\n\t\t\t\tmargin-top: 2px;\n\n\t\t\t\t&.interactive {\n\t\t\t\t\tcursor: pointer;\n\n\t\t\t\t\t&:hover,\n\t\t\t\t\t&:focus,\n\t\t\t\t\t&:active {\n\t\t\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__sidebar {\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\talign-self: flex-start;\n\t\tpadding-top: 20px;\n\t\tmin-width: 220px;\n\t\tmargin: -150px 20px 0 0;\n\n\t\t// Specificity hack is needed to override Avatar component styles\n\t\t&::v-deep .avatar.avatardiv, h2 {\n\t\t\ttext-align: center;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding: 8px;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv:not(.avatardiv--unknown) {\n\t\t\tbackground-color: var(--color-main-background) !important;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tright: 14px;\n\t\t\t\tbottom: 14px;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tbackground-size: 28px;\n\t\t\t\tborder: none;\n\t\t\t\t// Styles when custom status icon and status text are set\n\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\tline-height: 34px;\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t}\n\n\t\t&::v-deep .avatar.interactive.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__content {\n\t\tmax-width: $profile-max-width;\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\t&__blocks {\n\t\tmargin: 18px 0 80px 0;\n\t\tdisplay: grid;\n\t\tgap: 16px 0;\n\t\twidth: $content-max-width;\n\n\t\tp, h3 {\n\t\t\toverflow-wrap: anywhere;\n\t\t}\n\n\t\t&-details {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 2px 0;\n\n\t\t\t.detail {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t\tp .map-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&-headline {\n\t\t\tmargin-top: 10px;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&-biography {\n\t\t\twhite-space: pre-line;\n\t\t}\n\n\t\th3, p {\n\t\t\tcursor: text;\n\t\t}\n\n\t\t&-empty-info {\n\t\t\tmargin-top: 80px;\n\t\t\tmargin-right: 100px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttext-align: center;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tmargin: 8px 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: 1024px) {\n\t.profile {\n\t\t&__header {\n\t\t\theight: 250px;\n\t\t\tposition: unset;\n\n\t\t\t&__container {\n\t\t\t\tgrid-template-columns: unset;\n\n\t\t\t\t&__displayname {\n\t\t\t\t\tmargin: 100px 20px 0px;\n\t\t\t\t\twidth: unset;\n\t\t\t\t\tdisplay: unset;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t&__edit-button {\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 30px auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t&__blocks {\n\t\t\twidth: unset;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 20px 50px 50px 50px;\n\n\t\t\t&-empty-info {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__sidebar {\n\t\t\tmargin: unset;\n\t\t\tposition: unset;\n\t\t}\n\t}\n}\n\n.user-actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px 0;\n\tmargin-top: 20px;\n\n\t&__primary {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__other {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0 4px;\n\t\ta {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\t}\n}\n\n.icon-invert {\n\t&::v-deep .action-link__icon {\n\t\tfilter: invert(1);\n\t}\n}\n"],sourceRoot:""}]),n.Z=o}},a={};function r(t){var n=a[t];if(void 0!==n)return n.exports;var i=a[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},n=[],r.O=function(t,e,a,i){if(!e){var o=1/0;for(d=0;d<n.length;d++){e=n[d][0],a=n[d][1],i=n[d][2];for(var A=!0,s=0;s<e.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[s])}))?e.splice(s--,1):(A=!1,i<o&&(o=i));if(A){n.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[e,a,i]},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=9651,function(){r.b=document.baseURI||self.location.href;var t={9651:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,i,o=e[0],A=e[1],s=e[2],l=0;if(o.some((function(n){return 0!==t[n]}))){for(a in A)r.o(A,a)&&(r.m[a]=A[a]);if(s)var d=s(r)}for(n&&n(e);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}(),r.nc=void 0;var i=r.O(void 0,[7874],(function(){return r(91229)}));i=r.O(i)}();
//# sourceMappingURL=core-profile.js.map?v=3b9827401a026a8aa9f7