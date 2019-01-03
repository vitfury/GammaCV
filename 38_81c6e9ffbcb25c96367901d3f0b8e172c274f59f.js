webpackJsonp([38],{543:function(e,t){e.exports=[{license:"MIT",author:"Mihail Zachepilo(mihailzachepilo@gmail.com)\nCopyright 2018 Peculiar Ventures and Pentatonica.\nAll rights reserved."},{type:"class",name:"Tensor",description:[{type:"paragraph",children:["N Dimensional data view, that helps create, store, manipulate data."]}],params:[{name:"dtype",description:[{type:"paragraph",children:["the data type for tensor instance"]}],type:[{type:"string"}]},{name:"shape",description:[{type:"paragraph",children:["the list of integers,"]}],type:[{applications:[{type:"number"}],type:"Array"}]},{name:"data",description:[{type:"paragraph",children:["initial data to store"]}],type:[{type:"TypedArray"},{type:"Array"}],optional:!0},{name:"stride",description:[{type:"paragraph",children:["custom mapping from plain to NDArray"]}],type:[{applications:[{type:"number"}],type:"Array"}],optional:!0},{name:"offset",description:[{type:"paragraph",children:["number of data elements to skip"]}],type:[{type:"number"}],optional:!0}],methods:[{name:"get",type:"method",description:[{type:"paragraph",children:["Get data element by coordinates"]}],params:[{name:"x",description:[{type:"paragraph",children:["coordinates"]},{type:"space",children:[]},{type:"paragraph",children:["Require N number arguments, where n - dimention of a tensor."]}],type:[{type:"number"}],rest:!0}],return:{description:null,type:[{type:"number"}],optional:!1},examples:[{title:"example",description:"const t = new gm.Tensor('uint8', [2, 3], new Uint8Array([1, 2, 3, 4, 5, 6]));\nt.get(0, 0); // 1\nt.get(0, 1); // 2\nt.get(1, 2); // 6"}]},{name:"Tensor.assign",params:[{name:"data",description:[],type:[{type:"TypedArray"},{type:"Array"}]}],return:{description:"self",type:[{type:"Tensor"}],optional:!1},type:"method"},{description:[{type:"paragraph",children:["Write zeros into tensor's data"]}],return:{description:"self",type:[{type:"Tensor"}],optional:!1},name:"relese",params:[],type:"method"},{return:{description:"a shallow copy, new instance",type:[{type:"Tensor"}],optional:!1},name:"clone",params:[],type:"method"},{static:!0,params:[{name:"shape",description:[],type:[{applications:[{type:"number"}],type:"Array"}]},{name:"index",description:[],type:[{type:"number"}]}],return:{description:"coordinets that maps to the entered index",type:[{applications:[{type:"number"}],type:"Array"}],optional:!1},name:"IndexToCoord",type:"method"},{static:!0,params:[{name:"shape",description:[],type:[{applications:[{type:"number"}],type:"Array"}]},{name:"coords",description:[],type:[{applications:[{type:"number"}],type:"Array"}]}],return:{description:"index that mapped from entered coords",type:[{type:"number"}],optional:!1},name:"CoordToIndex",type:"method"},{static:!0,params:[{name:"dtype",description:[],type:[{type:"string"}]},{name:"size",description:[],type:[{type:"number"}]}],return:{description:null,type:[{type:"Tensor"}],optional:!1},name:"Malloc",type:"method"},{static:!0,description:[{type:"paragraph",children:["Define data type of an argument"]}],params:[{name:"data",description:[],type:[{type:"TypedArray"},{type:"Array"}]}],return:{description:null,type:[{type:"string"}],optional:!1},examples:[{title:"example",description:"gm.Tensor.DefineType(new Float32Array()); // float32"}],name:"DefineType",type:"method"},{static:!0,description:[{type:"paragraph",children:["Generate TypedArray"]}],params:[{name:"dtype",description:[{type:"paragraph",children:["data type of view"]}],type:[{type:"string"}]},{name:"data",description:[{type:"paragraph",children:["initial data"]}],type:[{type:"TypedArray"},{type:"Array"}]}],return:{description:null,type:[{type:"TypedArray"},{type:"Array"}],optional:!1},name:"GetTypedArray",type:"method"},{static:!0,params:[{name:"shape",description:[],type:[{applications:[{type:"number"}],type:"Array"}]}],return:{description:"Number of elements that described by shape",type:[{type:"number"}],optional:!1},name:"GetSize",type:"method"}]}]}});