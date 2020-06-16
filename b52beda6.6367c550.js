(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(239)),i={id:"advanced-features",title:"Advanced usage"},l={id:"version-0.17.0/advanced-features",title:"Advanced usage",description:"In this section we discuss how to use Infer if you wish to make contributions to",source:"@site/versioned_docs/version-0.17.0/01-advanced-features.md",permalink:"/docs/advanced-features",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Infer : Experimental Checkers",permalink:"/docs/experimental-checkers"},next:{title:"Adding models",permalink:"/docs/adding-models"}},c=[{value:"Structure of the results folder",id:"structure-of-the-results-folder",children:[{value:"Captured folder",id:"captured-folder",children:[]}]},{value:"Debug mode",id:"debug-mode",children:[]},{value:"Print the specs",id:"print-the-specs",children:[]},{value:"Run internal tests",id:"run-internal-tests",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we discuss how to use Infer if you wish to make contributions to\nit or just look under the hood to learn more about how it is working. There are,\nfor instance, debug options and ways to obtain the specs from the methods."),Object(o.b)("h2",{id:"structure-of-the-results-folder"},"Structure of the results folder"),Object(o.b)("p",null,"After a successful Infer run, a directory is created to store the results of the\nanalysis. By default this directory is called ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"infer-out\n\u251c\u2500\u2500 captured/\n\u251c\u2500\u2500 log/\n\u251c\u2500\u2500 specs/\n\u251c\u2500\u2500 report.json\n\u251c\u2500\u2500 report.txt\n\u251c\u2500\u2500 toplevel.log\n\u2514\u2500\u2500 ...\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"captured/")," contains information for each file analyzed by Infer. See\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"advanced-features#captured-folder"}),"below")," for more information."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"specs/")," contains the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"advanced-features#print-the-specs"}),"specs")," of each\nfunction that was analyzed, as inferred by Infer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"log/")," and toplevel.log contains logs"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"report.txt")," and ",Object(o.b)("inlineCode",{parentName:"li"},"report.json")," contain the Infer reports in text and JSON\nformats"),Object(o.b)("li",{parentName:"ul"},"there are other folders reserved for Infer's internal workings")),Object(o.b)("h3",{id:"captured-folder"},"Captured folder"),Object(o.b)("p",null,"Inside the folder ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/captured")," there is a folder for each captured file.\nAssume we captured a file called ",Object(o.b)("inlineCode",{parentName:"p"},"example.c"),". Then, Infer creates the following\nfiles inside the folder ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/captured/example.c/"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"example.c.cfg")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"example.c.cg")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"example.c.tenv"))),Object(o.b)("p",null,"The files ",Object(o.b)("inlineCode",{parentName:"p"},".cfg"),", ",Object(o.b)("inlineCode",{parentName:"p"},".cg")," and ",Object(o.b)("inlineCode",{parentName:"p"},".tenv")," contain the intermediate representation of\nthat file. This data is passed to the backend of Infer, which then performs the\nanalysis. The files contain serialized OCaml data structures. The ",Object(o.b)("inlineCode",{parentName:"p"},".cfg")," file\ncontains a control flow graph for each function or method implemented in the\nfile. The file ",Object(o.b)("inlineCode",{parentName:"p"},".cg")," contains the call graph of the functions defined or called\nfrom that file. Finally, the file ",Object(o.b)("inlineCode",{parentName:"p"},".tenv")," contains all the types that are\ndefined or used in the file."),Object(o.b)("h2",{id:"debug-mode"},"Debug mode"),Object(o.b)("p",null,"With the debug option enabled ",Object(o.b)("inlineCode",{parentName:"p"},"infer run --debug -- <build command>"),", Infer\noutputs debug information in infer-out/log/. The option ",Object(o.b)("inlineCode",{parentName:"p"},"--stats")," provides only\nlight debug information, and ",Object(o.b)("inlineCode",{parentName:"p"},"--print-logs")," outputs every message on the console\nas well as in the log files."),Object(o.b)("p",null,"In each captured folder, we obtain the file ",Object(o.b)("inlineCode",{parentName:"p"},"icfg.dot"),", which is the graphical\nrepresentation of the file ",Object(o.b)("inlineCode",{parentName:"p"},".cfg")," and the file ",Object(o.b)("inlineCode",{parentName:"p"},"call_graph.dot"),", that is the\ngraphical representation of the call graph."),Object(o.b)("p",null,"Moreover, we obtain an HTML page for each captured file inside\n",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/captured"),". This HTML file contains the source file. In each line of\nthe file there are links to the nodes of the control flow graph that correspond\nto that line of code. So one can see what the translation looks like. Moreover,\nwhen you click on those links you can see details of the symbolic execution of\nthat particular node."),Object(o.b)("h2",{id:"print-the-specs"},"Print the specs"),Object(o.b)("p",null,"It is also possible to print the specs created by Infer using the subcommand\n",Object(o.b)("inlineCode",{parentName:"p"},"infer report"),". You can print one particular spec that corresponds to one\nmethod, or you can print all the specs in the results directory. Let us look at\nan example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Hello {\n    int x;\n    void setX(int newX) {\n        this.x = newX;\n    }\n}\n")),Object(o.b)("p",null,"We run Infer on this example with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- javac Hello.java\n")),Object(o.b)("p",null,"Infer saves the spec for the method ",Object(o.b)("inlineCode",{parentName:"p"},"setX")," in ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/specs")," and we can print\nit with the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer report infer-out/specs/Hello.setX{98B5}:void.specs\n")),Object(o.b)("p",null,"The convention for method names in Java is ",Object(o.b)("inlineCode",{parentName:"p"},"<class name>.<method name>"),". This\noutputs the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Procedure: void Hello.setX(int)\nvoid void Hello.setX(int)(class Hello *this, int newX)\nTimestamp: 1\nStatus: INACTIVE\nPhase: RE_EXECUTION\nDependency_map:\nTIME:0.006893 s TIMEOUT:N SYMOPS:34 CALLS:0,0\nERRORS:\n--------------------------- 1 of 1 [nvisited: 4 5 6] ---------------------------\nPRE:\nthis = val$1: ;\nnewX = val$3: ;\nthis|->{Hello.x:val$2}:\nPOST 1 of 1:\nthis = val$1: ;\nreturn = val$4: ;\nnewX = val$3: ;\nthis|->{Hello.x:newX}:\n----------------------------------------------------------------\n")),Object(o.b)("p",null,"which expresses the fact that ",Object(o.b)("inlineCode",{parentName:"p"},"this")," needs to be allocated at the beginning of\nthe method, and that at the end of the method the field ",Object(o.b)("inlineCode",{parentName:"p"},"x")," is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"newX"),"."),Object(o.b)("p",null,"Moreover, you can print all the specs in the results directory with the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer report\n")),Object(o.b)("h2",{id:"run-internal-tests"},"Run internal tests"),Object(o.b)("p",null,"There are many tests in the Infer code base that check that Infer behaves\ncorrectly on small program examples. This is how you'd typically run the tests;\nyou can adapt the figure ",Object(o.b)("inlineCode",{parentName:"p"},"8")," depending on the number of cores available on your\nmachine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"make -j8 test\n")))}p.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(h,l({ref:t},s,{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);