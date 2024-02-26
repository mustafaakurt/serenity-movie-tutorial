import{c as e,e as s,f as y,h as n}from"../../../_chunks/chunk-CFICWFWM.js";var q=s(n(),1);var x=s(n(),1);var m=class m extends x.ColumnsBase{};e(m,"MovieColumns"),m.columnsKey="MovieDB.Movie",m.Fields=(0,x.fieldsProxy)();var f=m;var t=s(n(),1);var a=class a extends t.PrefixedContext{constructor(u){if(super(u),!a.init){a.init=!0;var p=t.StringEditor,d=t.TextAreaEditor,R=t.IntegerEditor,S=t.DateEditor;(0,t.initFormType)(a,["Title",p,"Description",d,"Storyline",d,"Year",R,"ReleaseDate",S,"Runtime",R])}}};e(a,"MovieForm"),a.formKey="MovieDB.Movie";var v=a;var g=s(n(),1);var r=class r{};e(r,"MovieRow"),r.idProperty="MovieId",r.nameProperty="Title",r.localTextPrefix="MovieDB.Movie",r.deletePermission="Administration:General",r.insertPermission="Administration:General",r.readPermission="Administration:General",r.updatePermission="Administration:General",r.Fields=(0,g.fieldsProxy)();var c=r;var C=s(n(),1),l;(p=>(p.baseUrl="MovieDB/Movie",p.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(d=>{p[d]=function(R,S,T){return(0,C.serviceRequest)(p.baseUrl+"/"+d,R,S,T)}})))(l||(l={}));var M=s(n(),1);var D=s(n(),1);var o=class extends D.EntityDialog{constructor(){super(...arguments);this.form=new v(this.idPrefix)}getFormKey(){return v.formKey}getRowDefinition(){return c}getService(){return l.baseUrl}};e(o,"MovieDialog"),o=y([D.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],o);var i=class extends M.EntityGrid{getColumnsKey(){return f.columnsKey}getDialogType(){return o}getRowDefinition(){return c}getService(){return l.baseUrl}constructor(u){super(u)}};e(i,"MovieGrid"),i=y([M.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],i);function w(){(0,q.initFullHeightGridPage)(new i($("#GridDiv")).element)}e(w,"pageInit");export{w as default};
//# sourceMappingURL=MoviePage.js.map
