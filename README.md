#Learning React

#Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement = Hot reloading (If we change anuthing in the file after saving the file changes will be reflecting at the same time in the browser.)
- File Watching Algoritham  - written in C++
- Caching - Faster Builds - Its create .pacel-cache so our next build faseter every time it will take less time to build
- Image Optimization
- Minification -Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling - support Older Browser
- Diagnostics - If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Its create different bundle for dev and prod

# Development Build
- npx parcel index.html

# Produciton Build 
- npx parcel build index.html

# Babel
- Babel is a Javascript Compiler. Its converts all JSX code to react code
-

# React Component
 - React Functional Component - Its a normal javascript function which returns JSX code or return a react Element
 - React Component

# Component Composition
- you can add one component another component

# JSX
- same as html
- we can write javascript as well inside html
- it remove mal data. example if any hacker hack our api and send some attacking data if we are displaying reponse in curly braces it remove malacious code from the response. ex {response}

# Props
- Same as passing an arugment to a function 
- Props are an object

# React Hooks


# Default Import Export
- 2 type
- export default // export default Component
- import Header from "../Path" 

# Named Import Export
- export const Compoent //export const LOGO_URL
- import {Compoent} from "../Path" 

# React Hooks
- It is normal Javascript Utility Function
- 2 important Hooks 
- useState() - use for to generate Superpowerfull State Variable - using for update the list in UI - whenever a state variable is updates react will rerender my component
syntax const [list , setList] = useState(listResponse)
- useEffect()

# Reconciliation Algoritham (React Fiber)
- we have a dom resturant container and under here we have 10 resturant card now my ui is changing filtering from 10 card to 5 cards

Virtual Dom is a representation of actual DOM.  It is an Object. If we console.log(<Body/>) then it will print object

# reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# Why React is fast
it is working with Virtual DOM
its having div Algoritham
its having React Fibre algoritham
