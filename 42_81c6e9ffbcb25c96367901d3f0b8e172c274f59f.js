webpackJsonp([42],{539:function(e,t){e.exports=[{license:"MIT",author:"Mihail Zachepilo(mihailzachepilo@gmail.com)\nCopyright 2018 Peculiar Ventures and Pentatonica.\nAll rights reserved."},{name:"StrokeWidthTransform",description:[{type:"paragraph",children:["Find text on image, using stroke width transform.\n ",{type:"link",href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/1509.pdf",title:"https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/1509.pdf",children:["Paper"]},"."]}],examples:[{title:"example",description:"// this line reduces an input image in 3x\n swt(inputImage, 3, 0);"}],params:[{name:"tSobel",description:[{type:"paragraph",children:["The output from ",{type:"link",href:"/docs/sobel_operator",title:"/docs/sobel_operator",children:["SobelOperator"]}]}],type:[{type:"Tensor"}]},{name:"tCanny",description:[{type:"paragraph",children:["The output from ",{type:"link",href:"/docs/canny_edges",title:"/docs/canny_edges",children:["CannyEdges"]}]}],type:[{type:"Tensor"}]},{name:"min",description:[{type:"paragraph",children:["Minimum stroke width"]}],type:[{type:"number"}],optional:!0},{name:"max",description:[{type:"paragraph",children:["Maximum stroke width"]}],type:[{type:"number"}],optional:!0},{name:"steps",description:[{type:"paragraph",children:["How much pixels count between min and max to determine"]}],type:[{type:"number"}],optional:!0},{name:"retrunCoords",description:[{type:"paragraph",children:["Pass coordinates as output"]}],type:[{type:"boolean"}],optional:!0},{name:"invert",description:[{type:"paragraph",children:["Find black text on white backgound when true,\n and white on black when false."]}],type:[{type:"boolean"}],optional:!0}]}]}});