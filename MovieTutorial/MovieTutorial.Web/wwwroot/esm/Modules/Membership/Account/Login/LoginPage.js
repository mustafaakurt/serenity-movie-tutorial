import{a as l,c as y,d as e,e as h}from"../../../../_chunks/chunk-NOZO2FUZ.js";import{a as v}from"../../../../_chunks/chunk-5PD7ORQI.js";import{c,f as m,i as g}from"../../../../_chunks/chunk-THKE7DQS.js";var w=m(g(),1),o=m(g(),1);function p(i){var a=new d($("#LoginPanel"));i!=null&&i.activated&&(a.form.Username.value=i.activated,a.form.Password.element.focus())}c(p,"pageInit");var s=class s extends w.PropertyPanel{constructor(t,r){super(t,r);this.form=new l(this.idPrefix)}getFormKey(){return l.formKey}loginClick(){if(this.validateForm()){var t=this.getSaveEntity();(0,o.serviceCall)({url:(0,o.resolveUrl)("~/Account/Login"),request:t,onSuccess:()=>{this.redirectToReturnUrl()},onError:r=>{var n,u,f;if(((n=r==null?void 0:r.Error)==null?void 0:n.Code)==="RedirectUserTo"){window.location.href=r.Error.Arguments;return}if((f=(u=r==null?void 0:r.Error)==null?void 0:u.Message)!=null&&f.length){(0,o.notifyError)(r.Error.Message),this.form.Password.element.focus();return}o.ErrorHandling.showServiceError(r.Error)}})}}getReturnUrl(){var t=(0,o.parseQueryString)();return t.returnUrl||t.ReturnUrl}redirectToReturnUrl(){var t=this.getReturnUrl();if(t&&/^\//.test(t)){var r=window.location.hash;r!=null&&r!="#"&&(t+=r),window.location.href=t}else window.location.href=(0,o.resolveUrl)("~/")}renderContents(){let t=this.useIdPrefix(),r=v.Forms.Membership.Login;this.element.empty().append(e(y,{children:[e(h,{}),e("div",{class:"s-Panel p-4",children:[e("h5",{class:"text-center my-4",children:r.LoginToYourAccount}),e("form",{id:t.Form,action:"",children:[e("div",{id:t.PropertyGrid}),e("div",{class:"px-field",children:e("a",{class:"float-end text-decoration-none",href:(0,o.resolveUrl)("~/Account/ForgotPassword"),children:r.ForgotPassword})}),e("div",{class:"px-field",children:e("button",{id:t.LoginButton,type:"submit",class:"btn btn-primary my-3 w-100",onClick:n=>{n.preventDefault(),this.loginClick()},children:r.SignInButton})})]})]}),e("div",{class:"text-center mt-2",children:e("a",{class:"text-decoration-none",href:(0,o.resolveUrl)("~/Account/SignUp"),children:r.SignUpButton})})]}))}};c(s,"LoginPanel");var d=s;export{p as default};
//# sourceMappingURL=LoginPage.js.map
