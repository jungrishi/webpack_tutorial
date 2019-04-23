// webpack: maintain the order of the files to load; talks about the dependencies
// also for better performance loading many files- drawback of splitting files
// webpack merges many small js files into a single file called bundle.js and 
// ensure each module execute in right order. 

// it is the entry point in our project
/*first webpack looks at the entry file to import the module it
depend to run then it check the dependencies for it to run 
so basically (required)look in heirarchical order from the entry point */


// dependent on sum.js to run since sum.js needs to load first before index.js can use it

//const sum = require('./sum'); //relative file reference
//ES2015
// import sum from './sum';
// import './image_viewer';//no import code; only run 
// const total = sum(2,3);
// console.log(total);

//starting code splitting
const button = document.createElement('button');
button.innerText = 'click me';
button.onclick = () => {
    //system call: global var in js(es2015)
    //asyn call: takes some time to find and exe the module
    //return promises
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);
