webpackJsonp([61],{520:function(e,i){e.exports=[{license:"MIT",author:"Mihail Zachepilo(mihailzachepilo@gmail.com)\nCopyright 2018 Peculiar Ventures and Pentatonica.\nAll rights reserved."},{name:"Convolution",description:[{type:"paragraph",children:["Doing convlolution between a kernel and an image,\n see ",{type:"link",href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)",title:"https://en.wikipedia.org/wiki/Kernel_(image_processing)",children:["wiki"]},"."]}],examples:[{title:"example",description:"gm.conv2d(inputImage, gm.kernels.boxBlur());"}],params:[{name:"tSrc",description:[{type:"paragraph",children:["The source image to be convolved."]}],type:[{type:"Tensor"}]},{name:"tKernel",description:[{type:"paragraph",children:["Kernel body, tensor with shape ","[","n, m, 4],\n where alpha component of each pixel is kernel cell value."]}],type:[{type:"Tensor"}]},{name:"factor",description:[{type:"paragraph",children:["a scaling quantity that is multiplied by the result"]}],type:[{type:"number"}],optional:!0},{name:"bias",description:[{type:"paragraph",children:["is added on after the factor has been accounted for"]}],type:[{type:"number"}],optional:!0}]}]}});