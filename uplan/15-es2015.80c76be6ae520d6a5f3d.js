(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ANwO:function(o,t,n){"use strict";n.r(t),n.d(t,"RegisterAddressPageModule",(function(){return u}));var e=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("/ksZ"),l=n("fXoL");const b=[{path:"",component:(()=>{class o{constructor(o,t){this.navCtrl=o,this.route=t}ngOnInit(){this.route.queryParams.subscribe(o=>{this.personalData=o.personalData,this.cardFolio=o.cardFolio}),this.form=new i.c({colonia:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(2)]}),street:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(2)]}),number:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(1)]}),zipCode:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(4)]}),state:new i.a(null,{updateOn:"change",validators:[i.k.required]}),town:new i.a(null,{updateOn:"change",validators:[i.k.required]})})}onSubmit(){}onBack(){this.navCtrl.navigateBack("/register/tabs/register-personal")}onAccept(){new s.a(this.personalData.name,this.personalData.lastname,this.personalData.birth,this.personalData.age,this.personalData.curp,this.personalData.email,this.personalData.password,this.form.controls.colonia.value,this.form.controls.street.value,this.form.controls.number.value,this.form.controls.zipCode.value,this.form.controls.state.value,this.form.controls.town.value,this.cardFolio),this.navCtrl.navigateForward("/home")}}return o.\u0275fac=function(t){return new(t||o)(l.Ib(r.T),l.Ib(a.a))},o.\u0275cmp=l.Cb({type:o,selectors:[["app-register-address"]],decls:39,vars:1,consts:[[1,"ion-padding"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating","color","secondary"],["type","text","formControlName","colonia"],["type","text","formControlName","street"],["size-sm","6"],["type","number","formControlName","number"],["type","number","formControlName","zipCode"],["type","text","formControlName","state"],["type","text","formControlName","town"],[1,"ion-padding-top"],["size-sm","3","offset-sm","3"],["type","button","color","secondary","expand","block",3,"click"],["size-sm","3"],["type","button","color","tertiary","expand","block",3,"click"]],template:function(o,t){1&o&&(l.Lb(0,"ion-content",0),l.Lb(1,"form",1),l.Lb(2,"ion-grid"),l.Lb(3,"ion-row"),l.Lb(4,"ion-col",2),l.Lb(5,"ion-item"),l.Lb(6,"ion-label",3),l.gc(7,"Colonia"),l.Kb(),l.Jb(8,"ion-input",4),l.Kb(),l.Lb(9,"ion-item"),l.Lb(10,"ion-label",3),l.gc(11,"Calle"),l.Kb(),l.Jb(12,"ion-input",5),l.Kb(),l.Lb(13,"ion-row"),l.Lb(14,"ion-col",6),l.Lb(15,"ion-item"),l.Lb(16,"ion-label",3),l.gc(17,"No. Exterior"),l.Kb(),l.Jb(18,"ion-input",7),l.Kb(),l.Kb(),l.Lb(19,"ion-col",6),l.Lb(20,"ion-item"),l.Lb(21,"ion-label",3),l.gc(22,"Codigo Postal"),l.Kb(),l.Jb(23,"ion-input",8),l.Kb(),l.Kb(),l.Kb(),l.Lb(24,"ion-item"),l.Lb(25,"ion-label",3),l.gc(26,"Estado"),l.Kb(),l.Jb(27,"ion-input",9),l.Kb(),l.Lb(28,"ion-item"),l.Lb(29,"ion-label",3),l.gc(30,"Municipio"),l.Kb(),l.Jb(31,"ion-input",10),l.Kb(),l.Kb(),l.Kb(),l.Lb(32,"ion-row",11),l.Lb(33,"ion-col",12),l.Lb(34,"ion-button",13),l.Tb("click",(function(){return t.onBack()})),l.gc(35," Regresar "),l.Kb(),l.Kb(),l.Lb(36,"ion-col",14),l.Lb(37,"ion-button",15),l.Tb("click",(function(){return t.onAccept()})),l.gc(38," Aceptar "),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb()),2&o&&(l.xb(1),l.Yb("formGroup",t.form))},directives:[r.p,i.l,i.i,i.d,r.s,r.E,r.o,r.x,r.B,r.w,r.Y,i.h,i.b,r.U,r.h],styles:[""]}),o})()}];let c=(()=>{class o{}return o.\u0275mod=l.Gb({type:o}),o.\u0275inj=l.Fb({factory:function(t){return new(t||o)},imports:[[a.i.forChild(b)],a.i]}),o})(),u=(()=>{class o{}return o.\u0275mod=l.Gb({type:o}),o.\u0275inj=l.Fb({factory:function(t){return new(t||o)},imports:[[e.b,i.j,r.P,c]]}),o})()}}]);