### 1. Start a new React project with `create-react-app`

In this lesson, we start a new React project using `create-react-app`. This allows us to not have to worry about tooling like webpack, babel etc. Once installed, we'll remove some of the files we don't need, add some CSS for our project, so we're ready to get started.

### 2. Get familiar with the basics of JSX

In this lesson, we go through the basics of the JSX syntax. We see how JSX removes the need for a templating language, and how it gives you access to the full power of JavaScript.

### 3. Iterate through a JavaScript Array with JSX and the `Array.map()` method

In this lesson, we import an array of objects from a JavaScript file, and iterate through it using the Array.map() method to display each name on the screen.

### 4. Think in components and break down a React application in small UI components

In this lesson, we look at the final form of the application we are building, and identify parts of the UI that can be abstracted as React components. We then create our first component as an example.

### 5. Manage local state in React with the `useState` hook

In this lesson, we create a "Search" component which allows users to filter the names list based on their input. We introduce the `useState` React hook to handle the state of the input field.

### 6. Focus an input field in React with the `useRef` and `useEffect` hooks

In this lesson, we make the Search input field focus on page load. To do this, we keep a reference of the input field with the `useRef` hook, and trigger focus on that field when the component mounts with another React hook, `useEffect`.

### 7. Identify the need to elevate state to a parent component in React

In this lesson, we look at our "component breakdown diagram" again. It becomes apparent that the state for the input field `search` value needs to also be available for the `NamesList` component. We therefore elevate that piece of state to their common parent (App.js).

### 8. Pass state down to children components via props in React

In this lesson, we pass the app "search" state down to two children components, `Search` and `NamesList`. We use React "props" to do so.

### 9. Filter a JavaScript array with JSX and the `Array.filter()` method

In this lesson, we use application state to filter a list of names from a JavaScript array. When users type a search string in the `Search` component, the `NamesList` component re-renders with the updated list of names matching the search.

### 10. Update state in React with the update function provided by the `useState` hook

In this lesson, we implement a "shortlisting" functionality to allow users to click on a name to add it to their shortlist. We use the `useState` hook to maintain that shortlist, and use the update function it provides to amend the list when a user clicks on a name

### 11. Make components reusable in React with a flexible props API

In this lesson, we abstract a reusable `NamesList` component, that will render the same JSX in two different scenarios. We keep the logic of the onClick event outside of the component, and pass it as a callback prop.

### 12. Chain Array methods in JavaScript to break down complex Array manipulation

In this lesson, we amend an already filtered list of names with an additional filter step. We chain an additional `Array.filter()` method to the existing chain. This filter step factors in additional app state, so we can ommit shortlisted names from our displayed list.

### 13. Reduce "prop drilling" in React with the Context API

In this lesson, we approach the concept of "prop drilling" and see how it can lead to maintenance pitfalls. By leveraging the Context API, we implement a context provider for our "search" and "shortlist" states. We then access that context where needed via the `useContext` hook.

### 14. Improve developer experience for accessing context with a custom React hoook

In this lesson, we create a custom hook that wraps the `useContext` hook and returns its value, as well as more useful error messaging if a context provider is missing. This simple addition brings very elegant ergonomics to access context from any component.
