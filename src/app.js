// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

//normalize.css allows you to build cross functional apps that run on different os and browsers
//it does so by allowing you to build off of the same default styles

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  


// const Layout = (props) => {
//     //        {props.content}

//     return(
//         <div>
//         <p>header</p>
//         {props. children}
//         <p>footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     </div>
// );

// ReactDOM.render(<Layout content = {template}/>, document.getElementById('app'));
// ReactDOM.render((
//     <Layout>
//     <p>This is Inline</p>
//     <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     </div>
//     </Layout>
    
//     ), document.getElementById('app'));
// class OldSyntax {
//     constructor(){
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting()
//     {
//         return `Hi. My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// console.log(oldSyntax.getGreeting());
// //the following breaks the this binding:
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //-----------

// class NewSyntax {
//     name = 'Jen';
//     //arrow functions dont have theri own this binding
//     //they just use whatever binding is in the parent scope and for classes this is the class instance
//     //so getGreetings will always be bound to the class instance
//     getGreeting = () =>
//     {
//         return `Hi. My name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);

// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

// //app.js should just bootstrap everything

//   // const User = (props) => {
//   //   return (
//   //     <div>
//   //       <p>Name: {props.name}</p>
//   //       <p>Age: {props.age}</p>
//   //     </div>
//   //   );
//   // };

// /*
// const template = <p>THIS IS JSX FROM WEBPACK</p>;
// ReactDOM.render(template, document.getElementById('app'));
// */