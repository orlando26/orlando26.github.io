!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{O8rt:function(t,o,e){"use strict";e.r(o),e.d(o,"HomeAsistenciasPageModule",(function(){return x}));var r=e("ofXK"),c=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),b=e("mrSG"),l=e("fXoL"),d=e("nr5L"),u=["slideWithNav"],p=function(n){return["/","home","tabs","home-asistencias",n]};function g(n,i){if(1&n){var t=l.Mb();l.Lb(0,"ion-item-sliding",null,18),l.Lb(2,"ion-item",19),l.Lb(3,"ion-thumbnail",9),l.Jb(4,"ion-img",4),l.Kb(),l.Lb(5,"ion-label"),l.Lb(6,"h2"),l.gc(7),l.Kb(),l.Lb(8,"p"),l.gc(9),l.Kb(),l.Kb(),l.Kb(),l.Lb(10,"ion-item-options",20),l.Lb(11,"ion-item-option",21),l.Tb("click",(function(){l.cc(t);var n=l.bc(1);return l.Vb().onCall(n)})),l.Jb(12,"ion-icon",22),l.Kb(),l.Kb(),l.Kb()}if(2&n){var o=i.$implicit;l.xb(2),l.Yb("routerLink",l.Zb(4,p,o.id)),l.xb(2),l.Yb("src",o.imageUrl),l.xb(3),l.ic(" ",o.name," "),l.xb(2),l.ic(" ",o.description," ")}}function h(n,i){if(1&n&&(l.Lb(0,"ion-slide"),l.Lb(1,"ion-card",23),l.Lb(2,"div",24),l.Jb(3,"ion-img",4),l.Kb(),l.Lb(4,"ion-card-content",25),l.Lb(5,"div",26),l.Lb(6,"ion-card-subtitle",27),l.gc(7),l.Kb(),l.Lb(8,"ion-button",28),l.gc(9,"Visitar"),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb()),2&n){var t=i.$implicit;l.xb(3),l.Yb("src",t.imageUrl),l.xb(4),l.hc(t.msj)}}var m,f,v,C=[{path:"",component:(m=function(){function t(i,o){n(this,t),this.homeService=i,this.actionSheetCtrl=o,this.slideOptsOne={initialSlide:0,slidesPerView:1,autoplay:!0},this.sliderOne={isBeginningSlide:!0,isEndSlide:!1,uplancard:[{slide:this.uplancard}]}}var o,e,r;return o=t,(e=[{key:"ngOnInit",value:function(){this.assists=this.homeService._asistencias,this.homeCard=this.homeService._homeCard,this.uplancard=this.homeService._UplanCard}},{key:"onCall",value:function(n){this.presenActionSheet(),n.close()}},{key:"presenActionSheet",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.actionSheetCtrl.create({header:"Solicitar",backdropDismiss:!0,buttons:[{text:"Llamar",icon:"call-outline"},{text:"Cancelar",role:"destructive",icon:"close-circle-outline",cssClass:"red"}]});case 2:return i=n.sent,n.next=5,i.present();case 5:case"end":return n.stop()}}),n,this)})))}}])&&i(o.prototype,e),r&&i(o,r),t}(),m.\u0275fac=function(n){return new(n||m)(l.Ib(d.a),l.Ib(a.a))},m.\u0275cmp=l.Cb({type:m,selectors:[["home-asistencias"]],viewQuery:function(n,i){var t;1&n&&l.jc(u,!0),2&n&&l.ac(t=l.Ub())&&(i.slideWithNav=t.first)},decls:40,vars:7,consts:[["maincard",""],[1,"sticky"],[1,"ion-no-padding"],[1,"ion-no-margin","h-main-card"],[3,"src"],[1,"row-asist"],["text-center","",1,"ion-no-padding"],[1,"ion-no-margin","rounded"],["lines","none"],["slot","start"],[1,"text-no-wrap"],["text-center",""],[4,"ngFor","ngForOf"],["size","12"],[1,"ion-no-margin","ion-margin-horizontal","border-bottom"],["src","../../../assets/Logo - Oficial.png",2,"width","60px","height","60px","margin","auto"],["pager","true",3,"options"],["slideWithNav",""],["sliding",""],["detail","",1,"ion-padding-bottom","ion-padding-end",3,"routerLink"],["side","end","lines","none"],["color","tertiary",3,"click"],["name","call-outline","slot","icon-only"],[1,"child"],[1,"card-uplan"],["mode","md",1,"ion-padding-horizontal","ion-no-padding","ion-text-left"],[1,"flex-between"],["color","light",1,"py-11","ellipsis"],["size","small","fill","outline","color","light"]],template:function(n,i){1&n&&(l.Lb(0,"ion-content",null,0),l.Lb(2,"ion-row",1),l.Lb(3,"ion-col",2),l.Lb(4,"ion-card",3),l.Jb(5,"ion-img",4),l.Kb(),l.Kb(),l.Kb(),l.Lb(6,"ion-row",5),l.Lb(7,"ion-col",6),l.Lb(8,"ion-card",7),l.Lb(9,"ion-col"),l.Lb(10,"ion-card"),l.Lb(11,"ion-item",8),l.Lb(12,"ion-avatar",9),l.Jb(13,"img",4),l.Kb(),l.Lb(14,"ion-label",10),l.Lb(15,"h2"),l.gc(16),l.Kb(),l.Lb(17,"p"),l.gc(18),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(19,"ion-col"),l.Lb(20,"ion-list"),l.Lb(21,"ion-col",11),l.Lb(22,"ion-list"),l.fc(23,g,13,6,"ion-item-sliding",12),l.Kb(),l.Kb(),l.Jb(24,"br"),l.Jb(25,"br"),l.Kb(),l.Lb(26,"ion-grid"),l.Lb(27,"ion-row"),l.Lb(28,"ion-col",13),l.Lb(29,"ion-card",14),l.Lb(30,"ion-card-content"),l.Lb(31,"ion-title",11),l.Jb(32,"ion-img",15),l.Kb(),l.Lb(33,"ion-card-subtitle"),l.Lb(34,"ion-label"),l.Lb(35,"p"),l.gc(36," Descubre los seguros, servicios y beneficios que puedes cotizar y emitir en tu portal. "),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(37,"ion-slides",16,17),l.fc(39,h,10,2,"ion-slide",12),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb()),2&n&&(l.xb(5),l.Yb("src",i.homeCard[0].imageUrl),l.xb(8),l.Yb("src",i.homeCard[0].avatarUrl,l.dc),l.xb(3),l.hc(i.homeCard[0].name),l.xb(2),l.ic("",i.homeCard[0].msj," "),l.xb(5),l.Yb("ngForOf",i.assists),l.xb(14),l.Yb("options",i.slideOptsOne),l.xb(2),l.Yb("ngForOf",i.uplancard))},directives:[a.p,a.E,a.o,a.j,a.v,a.x,a.e,a.B,a.C,r.h,a.s,a.k,a.M,a.l,a.G,a.A,a.W,s.h,a.L,a.z,a.y,a.u,a.F,a.h],styles:[".rounded[_ngcontent-%COMP%]{border-radius:20px 20px 0 0!important}.card-asistencias[_ngcontent-%COMP%]{height:23vh!important}.card-asistencias[_ngcontent-%COMP%] > ion-img[_ngcontent-%COMP%]{height:23vh;-o-object-fit:cover!important;object-fit:cover!important;-o-object-position:top;object-position:top}.card-uplan[_ngcontent-%COMP%]{height:17vh}.card-uplan[_ngcontent-%COMP%] > ion-img[_ngcontent-%COMP%]{-o-object-fit:initial;object-fit:fill;height:24vh}ion-button[_ngcontent-%COMP%]{--border-radius:12px}.h-main-card[_ngcontent-%COMP%]{margin-top:0}.h-main-card[_ngcontent-%COMP%] > ion-img[_ngcontent-%COMP%]{height:31vh}.sticky[_ngcontent-%COMP%]{position:fixed;width:100%;height:30vh}.sticky[_ngcontent-%COMP%] > ion-col[_ngcontent-%COMP%]{height:100%}.row-asist[_ngcontent-%COMP%]{margin-top:27.5vh;width:100%}.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}ion-card[_ngcontent-%COMP%]{--color:none}ion-avatar[_ngcontent-%COMP%]{width:60px!important;height:60px!important}ion-item-option[_ngcontent-%COMP%]{margin-bottom:23px!important;margin-right:16px!important;border-radius:4px}.custon-nav[_ngcontent-%COMP%]{height:48px;width:20px;cursor:pointer;vertical-align:middle;position:absolute;top:50%;transform:translateY(-50%)}.prev-icon-custom[_ngcontent-%COMP%]{background:url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0 0}.prev-icon-custom.disabled[_ngcontent-%COMP%]{opacity:.4;cursor:default}.next-icon-custom[_ngcontent-%COMP%]{background:url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0}.next-icon-custom.disabled[_ngcontent-%COMP%]{opacity:.4;cursor:default}.slider-nav[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:100%}.slide-text[_ngcontent-%COMP%]{position:absolute;color:#fff;bottom:30px}ion-title[_ngcontent-%COMP%]{position:static}.border-bottom[_ngcontent-%COMP%]{box-shadow:0 1px 0 rgba(0,0,0,.12)!important}ion-slides[_ngcontent-%COMP%]{--bullet-background:#468396;--bullet-background-active:#9ec532}"]}),m)},{path:"asistencias-detail",loadChildren:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"le3k")).then((function(n){return n.AsistenciasDetailPageModule}))}}],L=((v=function i(){n(this,i)}).\u0275mod=l.Gb({type:v}),v.\u0275inj=l.Fb({factory:function(n){return new(n||v)},imports:[[s.i.forChild(C)],s.i]}),v),x=((f=function i(){n(this,i)}).\u0275mod=l.Gb({type:f}),f.\u0275inj=l.Fb({factory:function(n){return new(n||f)},providers:[],imports:[[r.b,c.e,a.P,L]]}),f)}}])}();