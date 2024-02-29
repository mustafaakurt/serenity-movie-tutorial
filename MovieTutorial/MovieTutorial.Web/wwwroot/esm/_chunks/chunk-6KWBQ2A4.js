import{c as t,e as Te,f as o,g as x,h as J,i}from"./chunk-THKE7DQS.js";var te=Te((zt,De)=>{De.exports=Serenity.Extensions});var Q=o(i(),1);var h=class h extends Q.ColumnsBase{};t(h,"GenreColumns"),h.columnsKey="MovieDB.Genre",h.Fields=(0,Q.fieldsProxy)();var re=h;var I=o(i(),1);var c=class c{static getLookup(){return(0,I.getLookup)("MovieDB.Genre")}static getLookupAsync(){return J(this,null,function*(){return(0,I.getLookupAsync)("MovieDB.Genre")})}};t(c,"GenreRow"),c.idProperty="GenreId",c.nameProperty="Name",c.localTextPrefix="MovieDB.Genre",c.lookupKey="MovieDB.Genre",c.deletePermission="Administration:General",c.insertPermission="Administration:General",c.readPermission="Administration:General",c.updatePermission="Administration:General",c.Fields=(0,I.fieldsProxy)();var X=c;var ie=o(i(),1),oe;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,l){return(0,ie.serviceRequest)(e.baseUrl+"/"+r,a,n,l)}})))(oe||(oe={}));var se=o(i(),1);var T,U,S=class{format(s){let e=s.value;if(!e||!e.length)return"";let r=T==null?void 0:T.itemById;return r?e.map(a=>{var n=r[a];return s.escape(n==null?a:n.Name)}).join(", "):(U!=null||(U=X.getLookupAsync().then(a=>{var n;T=a;try{(n=s.grid)==null||n.invalidate()}finally{T=null,U=null}}).catch(()=>U=null)),'<i class="fa fa-spinner"></i>')}};t(S,"GenreListFormatter"),S=x([se.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")],S);var N=o(i(),1);var ne=o(i(),1),F=(r=>(r[r.Film=1]="Film",r[r.TvSeries=2]="TvSeries",r[r.MiniSeries=3]="MiniSeries",r))(F||{});ne.Decorators.registerEnumType(F,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var b=class b extends N.ColumnsBase{};t(b,"MovieColumns"),b.columnsKey="MovieDB.Movie",b.Fields=(0,N.fieldsProxy)();var ae=b;var le=o(i(),1);var u=class u{};t(u,"MovieRow"),u.idProperty="MovieId",u.nameProperty="Title",u.localTextPrefix="MovieDB.Movie",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,le.fieldsProxy)();var pe=u;var ce=o(i(),1),de;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,l){return(0,ce.serviceRequest)(e.baseUrl+"/"+r,a,n,l)}})))(de||(de={}));var k=o(i(),1);var me=o(i(),1),K=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(K||{});me.Decorators.registerEnumType(K,"MovieTutorial.MovieDB.Gender");var w=class w extends k.ColumnsBase{};t(w,"PersonColumns"),w.columnsKey="MovieDB.Person",w.Fields=(0,k.fieldsProxy)();var ue=w;var E=o(i(),1);var m=class m{static getLookup(){return(0,E.getLookup)("MovieDB.Person")}static getLookupAsync(){return J(this,null,function*(){return(0,E.getLookupAsync)("MovieDB.Person")})}};t(m,"PersonRow"),m.idProperty="PersonId",m.nameProperty="FullName",m.localTextPrefix="MovieDB.Person",m.lookupKey="MovieDB.Person",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,E.fieldsProxy)();var Y=m;var Re=o(i(),1),ve;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,l){return(0,Re.serviceRequest)(e.baseUrl+"/"+r,a,n,l)}})))(ve||(ve={}));var G=o(i(),1);var C=class C extends G.PrefixedContext{constructor(s){if(super(s),!C.init){C.init=!0;var e=G.StringEditor;(0,G.initFormType)(C,["Name",e])}}};t(C,"GenreForm"),C.formKey="MovieDB.Genre";var ye=C;var z=o(i(),1);var A=class A extends z.ColumnsBase{};t(A,"MovieCastColumns"),A.columnsKey="MovieDB.MovieCast",A.Fields=(0,z.fieldsProxy)();var j=A;var D=o(i(),1);var q=class q extends D.PrefixedContext{constructor(s){if(super(s),!q.init){q.init=!0;var e=D.LookupEditor,r=D.StringEditor;(0,D.initFormType)(q,["PersonId",e,"Character",r])}}};t(q,"MovieCastForm"),q.formKey="MovieDB.MovieCast";var O=q;var fe=o(i(),1);var v=class v{};t(v,"MovieCastRow"),v.idProperty="MovieCastId",v.nameProperty="Character",v.localTextPrefix="MovieDB.MovieCast",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,fe.fieldsProxy)();var R=v;var xe=o(i(),1),V;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,l){return(0,xe.serviceRequest)(e.baseUrl+"/"+r,a,n,l)}})))(V||(V={}));var Pe=o(i(),1),Se=o(te(),1);var Me=o(i(),1),ge=o(te(),1);var M=class extends ge.GridEditorDialog{constructor(){super(...arguments);this.form=new O(this.idPrefix)}getFormKey(){return O.formKey}getNameProperty(){return R.nameProperty}getLocalTextPrefix(){return R.localTextPrefix}};t(M,"MovieCastEditDialog"),M=x([Me.Decorators.registerClass("MovieTutorial.MovieDB.MovieCastEditDialog")],M);var g=class extends Se.GridEditorBase{getColumnsKey(){return j.columnsKey}getDialogType(){return M}getLocalTextPrefix(){return R.localTextPrefix}constructor(s){super(s)}getAddButtonCaption(){return"Add"}validateEntity(s,e){if(!super.validateEntity(s,e))return!1;var r=e!=null?e:s[this.getIdProperty()];return Y.getLookupAsync().then(a=>{var l;var n=(l=this.view)==null?void 0:l.getItemById(r);n&&(n.PersonFullName=a.itemById[s.PersonId].FullName,this.view.updateItem(r,n))}),!0}};t(g,"MovieCastEditor"),g=x([Pe.Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")],g);var p=o(i(),1);var B=class B extends p.PrefixedContext{constructor(s){if(super(s),!B.init){B.init=!0;var e=p.StringEditor,r=p.TextAreaEditor,a=g,n=p.IntegerEditor,l=p.DateEditor,_=p.LookupEditor,ee=p.EnumEditor,Ge=p.ImageUploadEditor,he=p.MultipleImageUploadEditor;(0,p.initFormType)(B,["Title",e,"Description",r,"CastList",a,"Storyline",r,"Year",n,"ReleaseDate",l,"GenreList",_,"Runtime",n,"Kind",ee,"PrimaryImage",Ge,"GalleryImages",he])}}};t(B,"MovieForm"),B.formKey="MovieDB.Movie";var Ce=B;var Be=o(i(),1);var y=class y{};t(y,"MovieGenresRow"),y.idProperty="MovieGenreId",y.localTextPrefix="MovieDB.MovieGenres",y.deletePermission="Administration:General",y.insertPermission="Administration:General",y.readPermission="Administration:General",y.updatePermission="Administration:General",y.Fields=(0,Be.fieldsProxy)();var qe=y;var Ie=o(i(),1),Le;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,l){return(0,Ie.serviceRequest)(e.baseUrl+"/"+r,a,n,l)}})))(Le||(Le={}));var W=o(i(),1);var P=class extends W.EntityGrid{constructor(e){super(e)}getColumnsKey(){return Z.columnsKey}getRowDefinition(){return R}getService(){return V.baseUrl}getButtons(){return null}getInitialTitle(){return null}usePager(){return!1}getGridCanLoad(){return this.personId!=null}get personId(){return this._personId}set personId(e){this._personId!=e&&(this._personId=e,this.setEquality(R.Fields.PersonId,e),this.refresh())}};t(P,"PersonMovieGrid"),P=x([W.Decorators.registerEditor("MovieTutorial.MovieDB.PersonMovieGrid")],P);var d=o(i(),1);var L=class L extends d.PrefixedContext{constructor(s){if(super(s),!L.init){L.init=!0;var e=d.StringEditor,r=d.DateEditor,a=d.EnumEditor,n=d.IntegerEditor,l=P,_=d.ImageUploadEditor,ee=d.MultipleImageUploadEditor;(0,d.initFormType)(L,["FirstName",e,"LastName",e,"BirthDate",r,"BirthPlace",e,"Gender",a,"Height",n,"MoviesGrid",l,"PrimaryImage",_,"GalleryImages",ee])}}};t(L,"PersonForm"),L.formKey="MovieDB.Person";var Ee=L;var $=o(i(),1);var H=class H extends $.ColumnsBase{};t(H,"PersonMovieColumns"),H.columnsKey="MovieTutorial.MovieDB.Columns.PersonMovieColumns",H.Fields=(0,$.fieldsProxy)();var Z=H;export{re as a,ye as b,X as c,oe as d,ae as e,Ce as f,pe as g,de as h,ue as i,Ee as j,Y as k,ve as l};
//# sourceMappingURL=chunk-6KWBQ2A4.js.map
