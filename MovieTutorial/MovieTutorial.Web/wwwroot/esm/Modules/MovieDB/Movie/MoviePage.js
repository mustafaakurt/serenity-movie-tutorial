import{d,f as u,g as n,h as s}from"../../../_chunks/chunk-XC3B3H2D.js";import{c as r,e as a,f as l,h as p}from"../../../_chunks/chunk-CFICWFWM.js";var f=a(p(),1);var c=a(p(),1);var m=a(p(),1);var e=class extends m.EntityDialog{constructor(){super(...arguments);this.form=new u(this.idPrefix)}getFormKey(){return u.formKey}getRowDefinition(){return n}getService(){return s.baseUrl}};r(e,"MovieDialog"),e=l([m.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],e);var t=class extends c.EntityGrid{getColumnsKey(){return d.columnsKey}getDialogType(){return e}getRowDefinition(){return n}getService(){return s.baseUrl}getQuickSearchFields(){let o=r(g=>(0,c.localText)(`Db.${n.localTextPrefix}.${g}`),"txt"),i=n.Fields;return[{name:"",title:"All"},{name:i.Description,title:o(i.Description)},{name:i.Storyline,title:o(i.Storyline)},{name:i.Year,title:o(i.Year)}]}constructor(o){super(o)}};r(t,"MovieGrid"),t=l([c.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],t);function y(){(0,f.initFullHeightGridPage)(new t($("#GridDiv")).element)}r(y,"pageInit");export{y as default};
//# sourceMappingURL=MoviePage.js.map
