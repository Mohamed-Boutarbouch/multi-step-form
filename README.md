# Frontend Mentor - Multi-step form

This challenge is about creating a form that collects user information in multiple steps, making it more manageable and user-friendly.

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React.js
- TypeScript
- Vite
- Tailwindcss for styling

### What I learned

One piece of code that I'm particularly proud of is a reusable input components that I built. This component takes in a set of input fields as props and renders them in a single step of the form. Here's an example of how it's used:

```tsx
const PersonalInfoStep = () => {
  const { formInputs, changeHandler } = useFormContext();

  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        {personalInfoInputData.map((inputData) => {
          return (
            <PersonalInfoUserInput
              key={inputData.id}
              {...inputData}
              value={formInputs[inputData.inputName as keyof TextInputProps]}
              onChange={changeHandler}
            />
          );
        })}
      </section>
    </FormHeaderContainer>
  );
};
```

This component greatly simplifies the process of building steps in the form and makes the code much more readable. However, it should be noted that rendering too many of these components can have a performance impact. If the form has a large number of steps, it may be necessary to optimize the rendering process.

In addition to the reusable form components, I've also usd the React Context API to centralize the app state and make the code more maintainable. By using a single context provider to manage the state, it becomes much easier to pass data between components and keep track of the user's progress through the form. This also makes it easier to add new features to the form in the future, as any changes to the state can be made in one centralized location.

However, while the React Context API can be powerful, I've also found it to be unnecessarily complex for smaller projects like this one. For larger, more complex applications, it may be necessary to use a state management library like Redux Toolkit to better handle the app state. That being said, for this project, the React Context API was sufficient and provided a lean and maintainable solution.

### Continued development

While building this project, I've identified several areas that I want to continue focusing on in future projects:

#### Testing
Although I was able to manually test the form and catch errors during development, I did not write any automated tests. In the future, I would like to focus on writing comprehensive test suites to ensure that my code is robust and free of bugs.

#### Accessibility
As a front-end developer, it's important to ensure that the applications I build are accessible to all users. While I made some efforts to follow best practices and use accessible components, there is always room for improvement. In the future, I want to focus on learning more about accessibility and making it a priority in all of my projects.

#### Performance optimization
As mentioned earlier, the Step component that I built may have performance issues if too many are rendered. While this project did not require any complex optimizations, I want to focus on learning more about performance profiling and optimization techniques to ensure that my code is as fast and efficient as possible.

By continuing to focus on these areas, I hope to improve my skills as a front-end developer and build better and more robust applications.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
