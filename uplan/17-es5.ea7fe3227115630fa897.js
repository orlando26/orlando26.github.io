!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{LZsL:function(o,t,i){"use strict";i.r(t),i.d(t,"RegisterPersonalPageModule",(function(){return f}));var a,r,b,l=i("ofXK"),s=i("3Pt+"),c=i("TEn/"),u=i("tyNb"),m=i("fXoL"),d=[{path:"",component:(a=function(){function o(e,t){n(this,o),this.navCtrl=e,this.route=t}var t,i,a;return t=o,(i=[{key:"ngOnInit",value:function(){var n=this;this.route.queryParams.subscribe((function(e){n.cardFolio=e.cardFolio})),this.form=new s.c({name:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(2)]}),lastname:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(2)]}),birth:new s.a(null,{updateOn:"change",validators:[s.k.required]}),age:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(1)]}),curp:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(18),s.k.maxLength(18)]}),email:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]}),password:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(8)]}),repeatPassword:new s.a(null,{updateOn:"change",validators:[s.k.required,s.k.minLength(8)]})})}},{key:"onBack",value:function(){this.navCtrl.navigateForward("/register/tabs/register-card")}},{key:"onContinue",value:function(){this.navCtrl.navigateForward("/register/tabs/register-address",{queryParams:{personalData:this.form.value,cardFolio:this.cardFolio}})}}])&&e(t.prototype,i),a&&e(t,a),o}(),a.\u0275fac=function(n){return new(n||a)(m.Ib(c.T),m.Ib(u.a))},a.\u0275cmp=m.Cb({type:a,selectors:[["app-register-personal"]],decls:48,vars:1,consts:[[1,"ion-padding"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating","color","secondary"],["type","text","formControlName","name"],["type","text","formControlName","lastname"],["size-sm","6","size-md","8"],["position","stacked","color","secondary"],["max","2002-12-31","formControlName","birth"],["size-sm","2","size-md","4"],["type","number","formControlName","age"],["type","text","formControlName","curp"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","repeatPassword"],[1,"ion-padding-top"],["size-sm","3","offset-sm","3"],["type","button","color","secondary","expand","block",3,"click"],["size-sm","3"],["type","button","color","tertiary","expand","block",3,"click"]],template:function(n,e){1&n&&(m.Lb(0,"ion-content",0),m.Lb(1,"form",1),m.Lb(2,"ion-grid"),m.Lb(3,"ion-row"),m.Lb(4,"ion-col",2),m.Lb(5,"ion-list"),m.Lb(6,"ion-item"),m.Lb(7,"ion-label",3),m.gc(8,"Nombre"),m.Kb(),m.Jb(9,"ion-input",4),m.Kb(),m.Lb(10,"ion-item"),m.Lb(11,"ion-label",3),m.gc(12,"Apellidos"),m.Kb(),m.Jb(13,"ion-input",5),m.Kb(),m.Lb(14,"ion-row"),m.Lb(15,"ion-col",6),m.Lb(16,"ion-item"),m.Lb(17,"ion-label",7),m.gc(18,"Fecha de Nacimiento"),m.Kb(),m.Jb(19,"ion-datetime",8),m.Kb(),m.Kb(),m.Lb(20,"ion-col",9),m.Lb(21,"ion-item"),m.Lb(22,"ion-label",3),m.gc(23,"Edad"),m.Kb(),m.Jb(24,"ion-input",10),m.Kb(),m.Kb(),m.Kb(),m.Lb(25,"ion-item"),m.Lb(26,"ion-label",3),m.gc(27,"Curp"),m.Kb(),m.Jb(28,"ion-input",11),m.Kb(),m.Lb(29,"ion-item"),m.Lb(30,"ion-label",3),m.gc(31,"Correo"),m.Kb(),m.Jb(32,"ion-input",12),m.Kb(),m.Lb(33,"ion-item"),m.Lb(34,"ion-label",3),m.gc(35,"Contrase\xf1a"),m.Kb(),m.Jb(36,"ion-input",13),m.Kb(),m.Lb(37,"ion-item"),m.Lb(38,"ion-label",3),m.gc(39,"Repetir Contrase\xf1a"),m.Kb(),m.Jb(40,"ion-input",14),m.Kb(),m.Kb(),m.Kb(),m.Kb(),m.Lb(41,"ion-row",15),m.Lb(42,"ion-col",16),m.Lb(43,"ion-button",17),m.Tb("click",(function(){return e.onBack()})),m.gc(44," Regresar "),m.Kb(),m.Kb(),m.Lb(45,"ion-col",18),m.Lb(46,"ion-button",19),m.Tb("click",(function(){return e.onContinue()})),m.gc(47," Continuar "),m.Kb(),m.Kb(),m.Kb(),m.Kb(),m.Kb(),m.Kb()),2&n&&(m.xb(1),m.Yb("formGroup",e.form))},directives:[c.p,s.l,s.i,s.d,c.s,c.E,c.o,c.C,c.x,c.B,c.w,c.Y,s.h,s.b,c.q,c.X,c.U,c.h],styles:[""]}),a)}],p=((b=function e(){n(this,e)}).\u0275mod=m.Gb({type:b}),b.\u0275inj=m.Fb({factory:function(n){return new(n||b)},imports:[[u.i.forChild(d)],u.i]}),b),f=((r=function e(){n(this,e)}).\u0275mod=m.Gb({type:r}),r.\u0275inj=m.Fb({factory:function(n){return new(n||r)},imports:[[l.b,s.j,c.P,p]]}),r)}}])}();