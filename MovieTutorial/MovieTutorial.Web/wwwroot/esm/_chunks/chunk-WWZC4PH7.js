import{c as t,e as he,f as o,g as x,h as Q,i}from"./chunk-THKE7DQS.js";var _=he((Yt,fe)=>{fe.exports=Serenity.Extensions});var U=o(i(),1);var I=class I extends U.ColumnsBase{};t(I,"GenreColumns"),I.columnsKey="MovieDB.Genre",I.Fields=(0,U.fieldsProxy)();var ee=I;var G=o(i(),1);var l=class l{static getLookup(){return(0,G.getLookup)("MovieDB.Genre")}static getLookupAsync(){return Q(this,null,function*(){return(0,G.getLookupAsync)("MovieDB.Genre")})}};t(l,"GenreRow"),l.idProperty="GenreId",l.nameProperty="Name",l.localTextPrefix="MovieDB.Genre",l.lookupKey="MovieDB.Genre",l.deletePermission="Administration:General",l.insertPermission="Administration:General",l.readPermission="Administration:General",l.updatePermission="Administration:General",l.Fields=(0,G.fieldsProxy)();var X=l;var re=o(i(),1),te;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,re.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(te||(te={}));var oe=o(i(),1);var T,b,C=class{format(s){let e=s.value;if(!e||!e.length)return"";let r=T==null?void 0:T.itemById;return r?e.map(a=>{var n=r[a];return s.escape(n==null?a:n.Name)}).join(", "):(b!=null||(b=X.getLookupAsync().then(a=>{var n;T=a;try{(n=s.grid)==null||n.invalidate()}finally{T=null,b=null}}).catch(()=>b=null)),'<i class="fa fa-spinner"></i>')}};t(C,"GenreListFormatter"),C=x([oe.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")],C);var N=o(i(),1);var ie=o(i(),1),F=(r=>(r[r.Film=1]="Film",r[r.TvSeries=2]="TvSeries",r[r.MiniSeries=3]="MiniSeries",r))(F||{});ie.Decorators.registerEnumType(F,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var w=class w extends N.ColumnsBase{};t(w,"MovieColumns"),w.columnsKey="MovieDB.Movie",w.Fields=(0,N.fieldsProxy)();var se=w;var ae=o(i(),1);var m=class m{};t(m,"MovieRow"),m.idProperty="MovieId",m.nameProperty="Title",m.localTextPrefix="MovieDB.Movie",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,ae.fieldsProxy)();var ne=m;var ce=o(i(),1),pe;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,ce.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(pe||(pe={}));var k=o(i(),1);var le=o(i(),1),K=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(K||{});le.Decorators.registerEnumType(K,"MovieTutorial.MovieDB.Gender");var A=class A extends k.ColumnsBase{};t(A,"PersonColumns"),A.columnsKey="MovieDB.Person",A.Fields=(0,k.fieldsProxy)();var ue=A;var E=o(i(),1);var u=class u{static getLookup(){return(0,E.getLookup)("MovieDB.Person")}static getLookupAsync(){return Q(this,null,function*(){return(0,E.getLookupAsync)("MovieDB.Person")})}};t(u,"PersonRow"),u.idProperty="PersonId",u.nameProperty="FullName",u.localTextPrefix="MovieDB.Person",u.lookupKey="MovieDB.Person",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,E.fieldsProxy)();var Y=u;var me=o(i(),1),de;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,me.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(de||(de={}));var h=o(i(),1);var q=class q extends h.PrefixedContext{constructor(s){if(super(s),!q.init){q.init=!0;var e=h.StringEditor;(0,h.initFormType)(q,["Name",e])}}};t(q,"GenreForm"),q.formKey="MovieDB.Genre";var ve=q;var z=o(i(),1);var O=class O extends z.ColumnsBase{};t(O,"MovieCastColumns"),O.columnsKey="MovieDB.MovieCast",O.Fields=(0,z.fieldsProxy)();var j=O;var D=o(i(),1);var B=class B extends D.PrefixedContext{constructor(s){if(super(s),!B.init){B.init=!0;var e=D.LookupEditor,r=D.StringEditor;(0,D.initFormType)(B,["PersonId",e,"Character",r])}}};t(B,"MovieCastForm"),B.formKey="MovieDB.MovieCast";var H=B;var Re=o(i(),1);var v=class v{};t(v,"MovieCastRow"),v.idProperty="MovieCastId",v.nameProperty="Character",v.localTextPrefix="MovieDB.MovieCast",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,Re.fieldsProxy)();var R=v;var ye=o(i(),1),V;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,ye.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(V||(V={}));var Me=o(i(),1),Se=o(_(),1);var xe=o(i(),1),De=o(_(),1);var M=class extends De.GridEditorDialog{constructor(){super(...arguments);this.form=new H(this.idPrefix)}getFormKey(){return H.formKey}getNameProperty(){return R.nameProperty}getLocalTextPrefix(){return R.localTextPrefix}};t(M,"MovieCastEditDialog"),M=x([xe.Decorators.registerClass("MovieTutorial.MovieDB.MovieCastEditDialog")],M);var S=class extends Se.GridEditorBase{getColumnsKey(){return j.columnsKey}getDialogType(){return M}getLocalTextPrefix(){return R.localTextPrefix}constructor(s){super(s)}getAddButtonCaption(){return"Add"}validateEntity(s,e){if(!super.validateEntity(s,e))return!1;var r=e!=null?e:s[this.getIdProperty()];return Y.getLookupAsync().then(a=>{var p;var n=(p=this.view)==null?void 0:p.getItemById(r);n&&(n.PersonFullName=a.itemById[s.PersonId].FullName,this.view.updateItem(r,n))}),!0}};t(S,"MovieCastEditor"),S=x([Me.Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")],S);var c=o(i(),1);var g=class g extends c.PrefixedContext{constructor(s){if(super(s),!g.init){g.init=!0;var e=c.StringEditor,r=c.TextAreaEditor,a=S,n=c.IntegerEditor,p=c.DateEditor,Ge=c.LookupEditor,Ee=c.EnumEditor;(0,c.initFormType)(g,["Title",e,"Description",r,"CastList",a,"Storyline",r,"Year",n,"ReleaseDate",p,"GenreList",Ge,"Runtime",n,"Kind",Ee])}}};t(g,"MovieForm"),g.formKey="MovieDB.Movie";var Pe=g;var qe=o(i(),1);var y=class y{};t(y,"MovieGenresRow"),y.idProperty="MovieGenreId",y.localTextPrefix="MovieDB.MovieGenres",y.deletePermission="Administration:General",y.insertPermission="Administration:General",y.readPermission="Administration:General",y.updatePermission="Administration:General",y.Fields=(0,qe.fieldsProxy)();var Ce=y;var ge=o(i(),1),Be;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,ge.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(Be||(Be={}));var W=o(i(),1);var P=class extends W.EntityGrid{constructor(e){super(e)}getColumnsKey(){return Z.columnsKey}getRowDefinition(){return R}getService(){return V.baseUrl}getButtons(){return null}getInitialTitle(){return null}usePager(){return!1}getGridCanLoad(){return this.personId!=null}get personId(){return this._personId}set personId(e){this._personId!=e&&(this._personId=e,this.setEquality(R.Fields.PersonId,e),this.refresh())}};t(P,"PersonMovieGrid"),P=x([W.Decorators.registerEditor("MovieTutorial.MovieDB.PersonMovieGrid")],P);var d=o(i(),1);var L=class L extends d.PrefixedContext{constructor(s){if(super(s),!L.init){L.init=!0;var e=d.StringEditor,r=d.DateEditor,a=d.EnumEditor,n=d.IntegerEditor,p=P;(0,d.initFormType)(L,["FirstName",e,"LastName",e,"BirthDate",r,"BirthPlace",e,"Gender",a,"Height",n,"MoviesGrid",p])}}};t(L,"PersonForm"),L.formKey="MovieDB.Person";var Le=L;var $=o(i(),1);var J=class J extends $.ColumnsBase{};t(J,"PersonMovieColumns"),J.columnsKey="MovieTutorial.MovieDB.Columns.PersonMovieColumns",J.Fields=(0,$.fieldsProxy)();var Z=J;export{ee as a,ve as b,X as c,te as d,se as e,Pe as f,ne as g,pe as h,ue as i,Le as j,Y as k,de as l};
//# sourceMappingURL=chunk-WWZC4PH7.js.map
