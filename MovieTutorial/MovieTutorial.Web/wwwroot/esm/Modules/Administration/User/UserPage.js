import{a as I}from"../../../_chunks/chunk-Y7YY6BR3.js";import{a as f}from"../../../_chunks/chunk-7235USRK.js";import{h as x,k as C,l as y,m as g,n as e,o as h}from"../../../_chunks/chunk-WVIEH3MS.js";import{c as m,f as n,g as c,i as a}from"../../../_chunks/chunk-THKE7DQS.js";var T=n(a(),1);var v=n(a(),1),U=n(a(),1);var R=n(a(),1),t=n(a(),1);var w=class w extends R.TemplatedDialog{constructor(r){super(r);this.permissions=new I(this.byId("Permissions"),{showRevoke:!0}),g.List({UserID:this.options.userID},s=>{this.permissions.value=s.Entities}),g.ListRolePermissions({UserID:this.options.userID},s=>{this.permissions.rolePermissions=s.Entities}),this.permissions.implicitPermissions=(0,t.getRemoteData)("Administration.ImplicitPermissions"),this.dialogTitle=(0,t.format)((0,t.localText)("Site.UserPermissionDialog.DialogTitle"),this.options.username)}getDialogButtons(){return[{text:(0,t.localText)("Dialogs.OkButton"),cssClass:"btn btn-primary",click:r=>{g.Update({UserID:this.options.userID,Permissions:this.permissions.value},s=>{this.dialogClose(),window.setTimeout(()=>(0,t.notifySuccess)((0,t.localText)("Site.UserPermissionDialog.SaveSuccess")),0)})}},{text:(0,t.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}]}getTemplate(){return'<div id="~_Permissions"></div>'}};m(w,"UserPermissionDialog");var P=w;var p=n(a(),1),d=n(a(),1);var i=class extends p.EntityDialog{constructor(){super();this.form=new y(this.idPrefix);this.form.Password.change(()=>{p.EditorUtils.setRequired(this.form.PasswordConfirm,this.form.Password.value.length>0)}),this.form.Password.addValidationRule(this.uniqueName,r=>{if(this.form.Password.value.length<6)return(0,d.format)((0,d.localText)(f.Validation.MinRequiredPasswordLength),6)}),this.form.PasswordConfirm.addValidationRule(this.uniqueName,r=>{if(this.form.Password.value!=this.form.PasswordConfirm.value)return(0,d.localText)(f.Validation.PasswordConfirmMismatch)})}getFormKey(){return y.formKey}getIdProperty(){return e.idProperty}getIsActiveProperty(){return e.isActiveProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return h.baseUrl}getToolbarButtons(){let r=super.getToolbarButtons();return r.push({title:(0,d.localText)(f.Site.UserDialog.EditPermissionsButton),cssClass:"edit-permissions-button",icon:"fa-lock text-green",onClick:()=>{new P({userID:this.entity.UserId,username:this.entity.Username}).dialogOpen()}}),r}updateInterface(){super.updateInterface(),this.toolbar.findButton("edit-permissions-button").toggleClass("disabled",this.isNewOrDeleted())}afterLoadEntity(){super.afterLoadEntity(),this.form.Password.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew()),this.form.PasswordConfirm.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew())}};m(i,"UserDialog"),i=c([p.Decorators.registerClass()],i);var o=class extends v.EntityGrid{getColumnsKey(){return C.columnsKey}getDialogType(){return i}getIdProperty(){return e.idProperty}getIsActiveProperty(){return e.isActiveProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return h.baseUrl}constructor(l){super(l)}getDefaultSortBy(){return[e.Fields.Username]}createIncludeDeletedButton(){}getColumns(){var l=super.getColumns(),r=(0,U.tryFirst)(l,u=>u.field==e.Fields.Roles);if(r){var s;x.getLookupAsync().then(u=>{s=u,this.slickGrid.invalidate()}),r.format=u=>{if(!s)return'<i class="fa fa-spinner"></i>';var D=(u.value||[]).map(b=>(s.itemById[b]||{}).RoleName||"");return D.sort(),D.join(", ")}}return l}};m(o,"UserGrid"),o=c([v.Decorators.registerClass()],o);$(function(){(0,T.initFullHeightGridPage)(new o($("#GridDiv")).element)});
//# sourceMappingURL=UserPage.js.map
