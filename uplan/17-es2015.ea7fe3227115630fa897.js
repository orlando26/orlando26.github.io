(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{LZsL:function(e,n,o){"use strict";o.r(n),o.d(n,"RegisterPersonalPageModule",(function(){return c}));var t=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),b=o("fXoL");const s=[{path:"",component:(()=>{class e{constructor(e,n){this.navCtrl=e,this.route=n}ngOnInit(){this.route.queryParams.subscribe(e=>{this.cardFolio=e.cardFolio}),this.form=new i.c({name:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(2)]}),lastname:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(2)]}),birth:new i.a(null,{updateOn:"change",validators:[i.k.required]}),age:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(1)]}),curp:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(18),i.k.maxLength(18)]}),email:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]}),password:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(8)]}),repeatPassword:new i.a(null,{updateOn:"change",validators:[i.k.required,i.k.minLength(8)]})})}onBack(){this.navCtrl.navigateForward("/register/tabs/register-card")}onContinue(){this.navCtrl.navigateForward("/register/tabs/register-address",{queryParams:{personalData:this.form.value,cardFolio:this.cardFolio}})}}return e.\u0275fac=function(n){return new(n||e)(b.Ib(r.T),b.Ib(a.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-register-personal"]],decls:48,vars:1,consts:[[1,"ion-padding"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating","color","secondary"],["type","text","formControlName","name"],["type","text","formControlName","lastname"],["size-sm","6","size-md","8"],["position","stacked","color","secondary"],["max","2002-12-31","formControlName","birth"],["size-sm","2","size-md","4"],["type","number","formControlName","age"],["type","text","formControlName","curp"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","repeatPassword"],[1,"ion-padding-top"],["size-sm","3","offset-sm","3"],["type","button","color","secondary","expand","block",3,"click"],["size-sm","3"],["type","button","color","tertiary","expand","block",3,"click"]],template:function(e,n){1&e&&(b.Lb(0,"ion-content",0),b.Lb(1,"form",1),b.Lb(2,"ion-grid"),b.Lb(3,"ion-row"),b.Lb(4,"ion-col",2),b.Lb(5,"ion-list"),b.Lb(6,"ion-item"),b.Lb(7,"ion-label",3),b.gc(8,"Nombre"),b.Kb(),b.Jb(9,"ion-input",4),b.Kb(),b.Lb(10,"ion-item"),b.Lb(11,"ion-label",3),b.gc(12,"Apellidos"),b.Kb(),b.Jb(13,"ion-input",5),b.Kb(),b.Lb(14,"ion-row"),b.Lb(15,"ion-col",6),b.Lb(16,"ion-item"),b.Lb(17,"ion-label",7),b.gc(18,"Fecha de Nacimiento"),b.Kb(),b.Jb(19,"ion-datetime",8),b.Kb(),b.Kb(),b.Lb(20,"ion-col",9),b.Lb(21,"ion-item"),b.Lb(22,"ion-label",3),b.gc(23,"Edad"),b.Kb(),b.Jb(24,"ion-input",10),b.Kb(),b.Kb(),b.Kb(),b.Lb(25,"ion-item"),b.Lb(26,"ion-label",3),b.gc(27,"Curp"),b.Kb(),b.Jb(28,"ion-input",11),b.Kb(),b.Lb(29,"ion-item"),b.Lb(30,"ion-label",3),b.gc(31,"Correo"),b.Kb(),b.Jb(32,"ion-input",12),b.Kb(),b.Lb(33,"ion-item"),b.Lb(34,"ion-label",3),b.gc(35,"Contrase\xf1a"),b.Kb(),b.Jb(36,"ion-input",13),b.Kb(),b.Lb(37,"ion-item"),b.Lb(38,"ion-label",3),b.gc(39,"Repetir Contrase\xf1a"),b.Kb(),b.Jb(40,"ion-input",14),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(41,"ion-row",15),b.Lb(42,"ion-col",16),b.Lb(43,"ion-button",17),b.Tb("click",(function(){return n.onBack()})),b.gc(44," Regresar "),b.Kb(),b.Kb(),b.Lb(45,"ion-col",18),b.Lb(46,"ion-button",19),b.Tb("click",(function(){return n.onContinue()})),b.gc(47," Continuar "),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&e&&(b.xb(1),b.Yb("formGroup",n.form))},directives:[r.p,i.l,i.i,i.d,r.s,r.E,r.o,r.C,r.x,r.B,r.w,r.Y,i.h,i.b,r.q,r.X,r.U,r.h],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(n){return new(n||e)},imports:[[a.i.forChild(s)],a.i]}),e})(),c=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(n){return new(n||e)},imports:[[t.b,i.j,r.P,l]]}),e})()}}]);