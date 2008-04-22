defineStructure(
"MethodInterceptorFilter",function(factory){with(factory) { typeTable(["java.lang.reflect.Method","cl"],["net.sf.cglib.proxy.MethodProxy","cl"],["org.mockito.internal.creation.MethodInterceptorFilter","cl"],["org.mockito.internal.creation.MockFactoryTest$MockAwareStub","cl"],["java.lang.SuppressWarnings","an"],["org.mockito.internal.creation.MockAwareInterceptor","it"],["java.lang.Class","cl"],["java.lang.Object","cl"],["java.lang.String","cl"],["java.lang.NoSuchMethodException","cl"],["java.lang.RuntimeException","cl"],["java.lang.Throwable","cl"],["java.lang.Boolean","cl"],["java.lang.Integer","cl"],["java.lang.System","cl"]),methodTable([2,"MethodInterceptorFilter",[6,5],"co"],[6,"isInterface",[],"me"],[6,"getMethod",[8,"java.lang.Class[]"],"me"],[10,"RuntimeException",[8],"co"],[2,"intercept",[7,0,"java.lang.Object[]",1],"me"],[5,"intercept",[7,0,"java.lang.Object[]",1],"me"],[0,"isBridge",[],"me"],[1,"invokeSuper",[7,"java.lang.Object[]"],"me"],[0,"equals",[7],"me"],[12,"valueOf",["boolean"],"st me"],[2,"hashCodeForMock",[7],"me"],[13,"Integer",["int"],"co"],[14,"identityHashCode",[7],"st me"],[2,"getDelegate",[],"me"],[2,"setMock",[7],"me"],[5,"setMock",[7],"me"],[3,"setMock",[7],"me"]),localVariableTable(["toMock","<init>(java.lang.Class,org.mockito.internal.creation.MockAwareInterceptor)-toMock"],["delegate","<init>(java.lang.Class,org.mockito.internal.creation.MockAwareInterceptor)-delegate"],["e","<init>(java.lang.Class,org.mockito.internal.creation.MockAwareInterceptor)-e"],["proxy","intercept(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],net.sf.cglib.proxy.MethodProxy)-proxy"],["method","intercept(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],net.sf.cglib.proxy.MethodProxy)-method"],["args","intercept(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],net.sf.cglib.proxy.MethodProxy)-args"],["methodProxy","intercept(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],net.sf.cglib.proxy.MethodProxy)-methodProxy"],["mock","hashCodeForMock(java.lang.Object)-mock"],["mock","setMock(java.lang.Object)-mock"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.creation;",nl,nl,ip," java.lang.reflect.",T(0),";",nl,nl,ip," net.sf.cglib.proxy.",T(1),";",nl,nl,C(2,[3],$("@",T(4),P(L("\"unchecked\"")),nl,pu,_,c,_,I("MethodInterceptorFilter"),"&lt;T ",ex,_,T(5),"> ",im,_,T(5),_,B(nl,w(4),nl,w(4),F(pi,_,f,_,T(0),_,I("equalsMethod"),";"),nl,w(4),F(pi,_,f,_,T(0),_,I("hashCodeMethod"),";"),nl,nl,w(4),F(pi,_,f," T ",I("delegate"),";"),nl,nl,w(4),M(0,[],[],$("@",T(4),P(L("\"unchecked\"")),nl,w(4),pu," MethodInterceptorFilter",P(V(0,$(T(6),_,I("toMock"))),", ",V(1,$("T ",I("delegate")))),_,B(nl,w(8),tr,_,B(nl,w(12),i,_,P(W(0),".",N(1),P()),_,B(nl,w(16),W(0)," = ",T(7),".",c,";",nl,w(12)),nl,w(12),G(2,"fi","equalsMethod")," = ",W(0),".",N(2),P(L("\"equals\""),", ",n,_,T(6),"[] ",B(_,T(7),".",c,_)),";",nl,w(12),G(2,"fi","hashCodeMethod")," = ",W(0),".",N(2),P(L("\"hashCode\""),", ",P(T(6),"[]"),_,L("null")),";",nl,w(8)),_,ct,_,P(V(2,$(T(9),_,I("e")))),_,B(nl,w(12),tw,_,n,_,N(3),P(L("\"An Object method could not be found!\"")),";",nl,w(8)),nl,w(8),t,".",G(2,"fi","delegate")," = ",W(1),";",nl,w(4)))),nl,nl,w(4),M(4,[5],[],$(pu,_,T(7),_,I("intercept"),P(V(3,$(T(7),_,I("proxy"))),", ",V(4,$(T(0),_,I("method"))),", ",V(5,$(T(7),"[] ",I("args"))),", ",V(6,$(T(1),_,I("methodProxy")))),nl,w(12),ts,_,T(11),_,B(nl,w(8),i,_,P(W(4),".",N(6),P()),_,B(nl,w(12),r,_,W(6),".",N(7),P(W(3),", ",W(5)),";",nl,w(8)),nl,w(8),nl,w(8),i,_,P(G(2,"fi","equalsMethod"),".",N(8),P(W(4))),_,B(nl,w(12),r,_,T(12),".",N(9),P(W(3)," == ",W(5),"[",L("0"),"]"),";",nl,w(8)),_,e,_,i,_,P(G(2,"fi","hashCodeMethod"),".",N(8),P(W(4))),_,B(nl,w(12),r,_,N(10),P(W(3)),";",nl,w(8)),nl,w(8),nl,w(8),r,_,G(2,"fi","delegate"),".",N(5),P(W(3),", ",W(4),", ",W(5),", ",L("null")),";",nl,w(4)))),nl,nl,w(4),M(10,[],[],$(pi,_,j,_,I("hashCodeForMock"),P(V(7,$(T(7),_,I("mock")))),_,B(nl,w(8),r,_,n,_,N(11),P(T(14),".",N(12),P(W(7))),";",nl,w(4)))),nl,nl,w(4),M(13,[],[],$(pu," T ",I("getDelegate"),P(),_,B(nl,w(8),r,_,G(2,"fi","delegate"),";",nl,w(4)))),nl,nl,w(4),M(14,[15],[16],$(pu,_,v,_,I("setMock"),P(V(8,$(T(7),_,I("mock")))),_,B(nl,w(8),G(2,"fi","delegate"),".",N(15),P(W(8)),";",nl,w(4)))),nl))));}});