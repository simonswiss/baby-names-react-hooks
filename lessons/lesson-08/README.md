# 8. Identify the need to elevate state to a parent component in React

In this lesson, we look at our "component breakdown diagram" again. It becomes apparent that the state for the input field `search` value needs to also be available for the `NamePicker` component. We therefore elevate that piece of state to their common parent (App.js), and pass it down to both components via props.

## How to run this lesson?

To run this lesson, go to the root of the project, and run

`yarn start:08`
