# Course Registration System

## Introduction

This Course Registration System is a simple web application which is built using react and styled with tailwind CSS. It provides user friendly interface for students to select course and to calculate total credit hour and total price. This README contains project setup details and guide you how to use the the project.

## Features

- Select Course: Student can select course
- Remaining Hours: Students can show the remaining hours after subtracting from default hour 20
- Calculation of Total Credit Hour: Students can show total credit hours of all selected courses
- Total Price: Students can also show the total price of all selected courses

## Technologies Used

- React: A JavaScript library for building user interface.
- Tailwind CSS: A utility-first CSS framework for designing modern web application.
- prop-types: Runtime type checking for React props and similar objects
- react-icons: A small library for adding icons to react
- react-toastify: A small library for showing different toast

## State Management Process Used In The Project
* In my project, I have achieved state management using react built-in useState() hook and props. These two fundamental concepts are used to share data and manage state within my application. useState() hook allows to manage local component state and a function of this hook is to update the state. There are two states in my application. I have lifted my states to the common parents of the child components so that all child components can access to the states easily. I have passed my state to the child components using props. 

#### example:
There are four components like App, Course, Courses and SelectedCourses. App is the common parent component of all other components.  Besides, I have two states which are selectedCourses, creditHour. Course, Courses, selectedCourses components don't have any state but these components can access to it's parent componet's state. So, I have placed the necessary two states to their parent component "App". Then the states are passed through props to the child components. When a state is updated, parent component and all it's child componets are re-rendered. Finally, UI shows the result of updated component's state.
