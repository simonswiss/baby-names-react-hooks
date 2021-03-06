### LESSON_01

- create new app with create-react-app baby-names
- cd into baby-names
- open vscode
- yarn start -> look at the app
- look at src folder
- remove everything except App.js and index.js
- App.js is our app, but index.js is where that app is imported and rendered to the DOM
- open public/index.html and show the `<div id="root"></div>`
- replace the render of App.js with:

`<p>Hello World</p>`

- look at the page. We have live reload going
- We'll add a bit of CSS for our app so we can then focus on React
- yarn add normalize-css for CSS reset

### LESSON_02

- show the App.js function.
- looks like HTML, but is actually JavaScript
- open the Babel REPL
- show a simple paragraph tag, to show the React.createElement signature
- 3 arguments:

  - 1. element name (string that matches a DOM element)
  - 2. properties or "props" object, null if empty
  - 3. "children", aka what is contained between opening and closing tag

- add a classname as a prop
- add some="thing"
- add number={42}
- add data={['string', 33, {id: "09ek09k3e", active: true]}
- show the output

- copy the App() function from App.js
- show how the 3rd argument, "children", is a nested call to React.createElement.

- talk about some of the "gotchas" of JSX:
  - only one top level element. Used to use div - now use React.Fragment or empty tag <></>
  - each tag needs to be closed. Show image without self closing tag. Would work in HTML, but not in JSX!
  - React Components start with an uppercase letter. Note how lowercase will have element as a "string", but but uppercase will reference a Component.
  - Example with Shoutout component and difference between <shoutout></shoutout> and <Shoutout></Shoutout> (or <Shoutout />)

### LESSON_03

- add a file called `data/index.js` and export a `names` array with all the names.
- `import { name } from './data`
- console.log it in the App() function
- type desired HTML markup (ul, then 3-4 li elements with class of boy/girl, and name)
- no `ng-for`, `v-for` {% each name in names %}...
- use JavaScript!
- Array.map() method lets you iterate through an array and return another array with what you want.
- we can return some JSX for each index of the array!
- show `names.map(entry => <li>{entry.name}</li>)`
- show all names listed on page.
- missing "key"
- add `entry.id` as the key
- add className and use `entry.sex` to handle the styling for girl/boy
- we also need to wrap the name in a "button" element, since we are going to let people click on the names.
- remove the console log. Done!

### LESSON_04

- Open the final app in browser
- Take a screenshot and open in Skitch/figma
- Identify UI components that could be broken down
- Draw rectangles around it
- Go back to the app in its current state
- Let's build a component for the list of names!
- in the `/src` folder, create a `components` folder
- create a `name-picker.js` file in there
- import react
- also `import { names } from "../data"` (be sure to update the import path!)
- export a function called NamePicker
- grab the JSX from `App.js` and copy it in there
- remove the JSX from `App.js`, import `NamePicker` instead
- The app still works, but we have now extracted our JSX to a component.
- Explain we'll do this for other components, and our `App.js` will be a clean, declarative description of the app.
- Add comments for:
  /\*
  <App>
  <Search />
  <ShortList />
  <NamePicker />
  <Footer />
  </App>
  */

### LESSON_05

- look at final app, demo search component
- create a new component file, `search.js`
- export a function called Search, return an input type text
- import it in `App.js` and add it in render
- remind need for single parent level component by not adding fragment
- show error
- add fragment
- back in component, add "header" wrapper for styling
- type in field. Discuss "uncontrolled component", where state lives in DOM.
- In react, most of the time, we want React to take control of the state.
- DOM should not be source of truth
- add a <pre> tag that says `search value: xxx`
- we want React to keep that state value, so it updates when user types
- To control the state in React, let's inport the "useState()" hook
- useState gives us an array with two things: a state value, and an updater. You can name them as you please, but a good convention is that if your state value is named "thing", then the updater is called "setThing".
- in our case, let's go with `[searchValue, setSearchValue]`
- we can set the default value in the useState call
- as an example, let's use "simon" here for now
- add a "value" prop to the input field set to `searchValue`, and update the `<pre>` tag to use `searchValue` as well
- show that it works - our state value is in input - but now we cannot change it when typing
- we are using the value, but not the updater.
- add `onChange` prop. `onChange` is a SyntheticEvent, which behaves very similarly to the onchange browser event
- let's call a function called "handleChange" when this happens
- create `function handleChange(event)` which takes an event, and we will `setSearchValue(event.target.value)`
- We have now taken over control of the input field state, as you can see in the `pre` tag.
- We can cleanup teh pre tag here, don't need it anymore

### LESSON_06

- currently, the user has to click in input field before typing a search
- search sounds like a fairly common way to use the app
- would be nice to have the input field focused on load, so user can just start typing.
- to do this, we need to get hold of a DOM element - the input field - and keep a reference of it
- we'll use another React hook for this - useRef
- we will also import { useRef } from React
- we will create an `inputRef` - `const inputRef = useRef()`
- and add a `ref` prop to our input, with the value of `inputRef`
- console.log inputRef and show it has a `current` property which is the input
- we want to focus that input immediately when the page is loaded
- for that we'll use yet another React hook - useEffect
- import useEffect from react
- useEffect, which takes a function..
- and we'll do `inputRef.current.focus()`
- we want this to only happen once, so we pass an empty array of dependencies to useEffect, which means it won't run again until the component unmounts.
- now, when we reload the page, the input field is focused, and we can start typing right away!

### LESSON_07

- The state value we are holding in the `Search` component needs to also be available in the `NamePicker` component
- One way to share a piece of state across multiple components is to "elevate" it to a common parent component.
- In our case, we're going to elevate the `searchValue` state to the App.js component, which is the common parent.
- Let's import `useState` in our App.js file, and define our `searchValue` and `setSearchValue` here in the App component. This App component will now be responsible to keep track of the search field value. The next step will be to pass this state to the children component

### LESSON_08

- We have a `searchValue` state here, and we need to share it with the `Search` and `NamePicker` components.
- The way you pass state down in React is via props.
- Let's start with the `Search` component
- We will add a searchValue props, and a setSearchValue prop
- Now, in the search component, we can receive these props, and use them instead of the local state defined earlier
- Let's remove the useState hook call and import.
- The input field still works, but the state for this search value now lives in the App component.
- Let's handle the NamePicker component next
- This one only needs the value, not the updater: `searchValue equals searchValue`
- in the `names-list` component, we can now receive this prop.
- Let's verify that we can read the value with a quick extra <li> tag
- it works!

### LESSON_09

- Let's filter through the names array with the Array.filter() method
- names.filter() and for each entry, we'll check if the entry name includes the search value, and skip the entry otherwise.
- now I can use this new `filteredNames` array in my Array.map() here, let's give it a try
- it works, but... as you can see, if I search for Logan with a lowercase L, it won't match the string.
- We probably don't want that to work this way
- To mitigate this, we can normalize the strings to lowercase on both sides
- now serch with both uppercase or lowercase match. Nice!

### LESSON_10

- Look at final app for the shortlist functionality
- We'll want another piece of state that maintains a "shortlist"
- Since it will be shared beteen the `NamePicker` and the `ShortList`, we'll maintain this state in our `App` component.
- I'll create a new piece of state - `const [shortList, setShortList] = useState()
- This state will be an array of `ids` for the `names`, and we'll default this to an empty array.
- We'll pass the state value and the updater to the `NamePicker` component via props.
- Let's receive these props in `NamePicker`.
- We'll also create a new component. Let's make a new file in `/components` called `short-list.js`
- We'll import React, and export a function called `ShortList()`
- for now, we'll have some placeholder text here
- I'll go and import this file in our App, import { ShortList } from './components/short-list'
- and place it here between the `Search` and the `NamePicker`
- We'll also pass the shortlist state to this component.
- Let's go in our shortlist component, and receive the props.
- As a test, let's output the value of the `shortList` array in a `<pre>` tag.
- `JSON.stringify(shortList)`
- As expected, we have an empty array. Now, we want to add a name ID to the shortlist when a user clicks on it.
- in our `NamePicker`, we'll listen to the `click` event with an `onClick` prop.
- We COULD put the onClick on the `li` item, and it would totally work, but...
- please let's be semantically correct, and use a `button` element for that!
- I will wrap the `entry name` in a `button` tag, and `onClick`.. we will call an `addToShortList` method
- let's create it up here - function `addToShortList`
- for now, let's try and log the name ID for the name we click.
- to do so, I'll pass the prop as a function which passes the id as an argument.
- now, let's receive that parameter, and log it in the function
- try it, show it works.
- so, now let's remove the console.log, and instead, when a user clicks on a name, we'll add the ID to our shortlist array
- We'll call `setShortList` here, and use the spread syntax to create an array that takes the existing shortlist, dot dot dot shortList, as well as the new name ID.
- now, when we click on names, we can see their id added to the shortlist
- there is an obvious problem though - if we click again on the same name, it gets added to the shortlist again.
- we could check if that ID exists in the array before adding it, but we'll handle this issue otherwise in this app: when a name is clicked on the NamesList, it should disappear from the list, and therefore can't be clicked again :)
- OK, let's display actual names instead of the shortlist array here.
- But wait a minute - it looks like we want to reuse the JSX from our `NamesList`, but perhaps with slightly different props - for example a different `onClick` behaviour..
- Sounds like it's time to create a new, reusable component!

### LESSON_11

- Turns out we want to take that list of names present in the `NamePicker` component, and use it somewhere else as well.
- We'll need a different behaviour when we click on a name though, so let's think of what props this component should receive, to be flexible enough to work in both cases.
- If we think about it, this is an unordered list that takes a "list of names", iterates over them, and then outputs each name in a list item.
- What happens when a user clicks on these names should probably be passed to that component, instead of living inside of it.
- Sounds like we need two props here: a `names` prop for the array of names, and an `onItemClick` to handle the logic to follow when a user clicks on a name.
- Let's create a new component called `names-list.js`
- import React
- `export function NamesList({names, onItemClick})` which takes these two arguments
- We'll copy over the JSX from the `NamePicker` in the return statement
- Instead of `filteredNames`, we can use our `names` prop here to iterate over
- Instead of `addToShortList`, we'll use our `onItemClick` callback.
- We'll need the `ID` of the name clicked to update the shortlist, so we'll pass that as an arrow function, and pass the `entry.id` as an argument
- Finally, let's clean things up a bit - we keep reaching for the `entry`, so I'll destructure the `id, name, sex` out of it, and i can remove the four `entry.` like so.
- Now we can go back in our `NamePicker` component and import our NamesList component
- We can now replace the unordered list with a call to `NamesList`, and we'll pass `names={filteredNames}` and `onItemClick={addToShortList}`
- Nice, it still works!
- Let's tackle the ShortList component now.
- We'll import the `NamesList` component here too
- In the return statement, we'll actually wrap our JSX in a `div` with the className of `short-list` for styling purposes.
- Now, we need a list of names, and a callback function to call on click.
- We need the list of names here to - so I'll import `{names}` from parent folder / data.
- Note that I just import the data like this here because it's never going to change, it's static.
- If this data was to change, or was coming from an API, we would probably get it in one place, and pass it down via props like we do for the search and shortlist state.
- To get our shortlisted names, we take the shortList array, and for each ID, we return the corresponding name in our names list.
- we can then pass this array of names to the `NamesList` component
- We will also create a `removeFromShortList` function here, `function removeFromShortList(){}`, that can be passed as an `onItemClick` prop.
- this function will receive the id, and then update the shortList accordingly
- `setShortList`, and the array we want to set it to is the current shortList, minus the id that was passed.
- we can achieve that with `shortList.filter(i => i !== id)`
- Nice - it all works! We now are using the same UI component in two different places, without duplication
- As a quick aside - this makes the assumption that the `NamesList` component **needs** to receive a names props with an array of Objects of the correct syntax, as well as a callback funciton as `onItemClick`.
- In this situation, you would typically look into using something like `prop-types` or a Type system like flow or TypeScript, to guard against implementation errors in your application.
- We won't do that here, but THAT would be a good place to consider making things a bit more robust.
- Soo.. our add to and remove from shortlist works, but we still have that problem where the same name can get added more than once, which then leads to issues with duplicated React keys. We should fix that!

### LESSON_12

- If we look at our `NamePicker` component, we can see that the `filteredNamesList` is already, well.. filtered.
- A nice thing about Array methods is you can chain them together, allowing you to perform transformations in a sequence.
- For example, here, we'll want to take our list of names, after it's been filtered by search string, and chain another .filter(), which will check if the shortList includes the entry id. We want to only keep the entries that are **not** in the shortlist.
- That way, when an entry is shortlisted, it gets removed from the list of names to pick from, and that solves our problem!

### LESSON_13
