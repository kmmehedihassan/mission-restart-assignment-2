# CS — Ticket System (Assignment 2)

## Overview

CS — Ticket System is a React practice project built to explore and understand core React concepts such as components, props, state, hooks, and event handling.

## Questions and Answers

### 1. What is JSX, and why is it used?

JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write UI code in a structure similar to HTML inside JavaScript files. In React, JSX makes the code easier to read and helps clearly describe how the user interface should look.

### 2. What is the difference between State and Props?

Both **Props** and **State** are used to manage data in React, but they serve different purposes:

- **Props** are used to pass data from a parent component to a child component.
- **Props** are read-only and cannot be modified by the child component.
- **State** is used to store data that can change over time inside a component.
- When the **State** changes, the component re-renders automatically.

### 3. What is the `useState` hook, and how does it work?

`useState` is a built-in React Hook that allows functional components to manage state.

It returns two values:

- The current state value
- A function to update that state value

When the state update function is called, React updates the state and re-renders the component.

### 4. How can you share state between components in React?

In React, state is usually shared by lifting it up to the nearest common parent component. The parent component stores the state and passes both the state value and the update function to child components through props.

### 5. How is event handling done in React?

Event handling in React is done using JavaScript functions. Instead of using HTML attributes like `onclick`, React uses camelCase event names such as `onClick`.

For example, a button click event is handled using `onClick` with a function.

## Live Demo

Visit the live site here:

- https://ticket-system-react.netlify.app/

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- DaisyUI