(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,l,d,u,b=n(1),p=n.n(b),h=n(14),m=n.n(h),f=(n(25),n(18)),j=n(8),x=n(9),O=n(11),g=n(10),v=n(31),C=n(15),y=n(2),w=n(3),S=w.a.main(a||(a=Object(y.a)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: space-between;\ntext-align: center;\nmargin: 20px auto;\npadding: 20px;\nbackground-color: #fff;\nwidth: 900px;\n"]))),k=w.a.section(r||(r=Object(y.a)(["\n  "]))),z=n(17),A=w.a.form(c||(c=Object(y.a)(["\n"]))),I=w.a.label(o||(o=Object(y.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 400px;\nmargin-bottom: 20px;\n"]))),E=w.a.input(i||(i=Object(y.a)(["\nheight: 40px;\nborder: 1px solid #000000;\nborder-radius: 4px;\nfont-size: 16px;\nmargin-top: 10px;\n&:focus {\n    outline: none;\n    border: 1px solid #04125e;\n}\n"]))),F=w.a.button(s||(s=Object(y.a)(["\n  min-width: 100px;\n  height: 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #9ccdf5;\n  border: none;\n"]))),D=n(0),J=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e.nameId=Object(v.a)(),e.telId=Object(v.a)(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(z.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(D.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(D.jsxs)(I,{htmlFor:this.nameId,children:[" Name",Object(D.jsx)(E,{id:this.nameId,type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter contact name",required:!0})]}),Object(D.jsxs)(I,{htmlFor:this.telId,children:[" Phone Number",Object(D.jsx)(E,{id:this.telId,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter phone number",required:!0})]}),Object(D.jsx)(F,{type:"submit",children:"Add contact"})]})}}]),n}(b.Component),L=w.a.ul(l||(l=Object(y.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 800px;\n"]))),N=w.a.li(d||(d=Object(y.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-bottom: 25px;\nfont-size: 24px;\n"]))),V=w.a.button(u||(u=Object(y.a)(["\n  min-width: 100px;\n  height: 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #9ccdf5;\n  border: none;\n \n"])));function Z(e){var t=e.contacts,n=e.onDelete;return Object(D.jsx)(L,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(D.jsxs)(N,{children:[a,": ",r,Object(D.jsx)(V,{onClick:function(){return n(t)},children:"Delete"})]},t)}))})}var q=n(7);var B,M=Object(q.a)("input",{target:"e1yx8mpy1"})({name:"1ox6bb0",styles:"border:1px solid #000000;border-radius:4px;font-size:16px;height:40px;margin-top:10px;&:focus{outline:none;border:1px solid #04125e;}"}),P=Object(q.a)("label",{target:"e1yx8mpy0"})({name:"hfle0f",styles:"display:flex;flex-direction:column;width:400px;margin-bottom:20px"});function T(e){var t=e.filterValue,n=e.onChange;return Object(D.jsxs)(P,{children:["Find contacts by name",Object(D.jsx)(M,{type:"text",filterValue:t,onChange:n,placeholder:"Enter contact name"})]})}var H=w.a.h2(B||(B=Object(y.a)(["\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #04125e;\n"])));function K(e){var t=e.title;return Object(D.jsx)(H,{children:t})}var R=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:C,filter:""},e.addContact=function(t){var n=t.name,a=t.number;if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts"));else{var r={id:Object(v.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(f.a)(t))}}))}},e.checkContact=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.filterContact=function(t){e.setState({filter:t.currentTarget.value})},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(D.jsxs)(S,{children:[Object(D.jsxs)(k,{children:[Object(D.jsx)(K,{title:"Phonebook"}),Object(D.jsx)(J,{onSubmit:this.addContact})]}),Object(D.jsxs)(k,{children:[Object(D.jsx)(K,{title:"Search contact"}),Object(D.jsx)(T,{filterValue:this.state.filter,onChange:this.filterContact})]}),Object(D.jsxs)(k,{children:[Object(D.jsx)(K,{title:"Contacts"}),Object(D.jsx)(Z,{contacts:this.checkContact(),onDelete:this.removeContact})]})]})}}]),n}(b.Component);m.a.render(Object(D.jsx)(p.a.StrictMode,{children:Object(D.jsx)(R,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.36ea3b70.chunk.js.map