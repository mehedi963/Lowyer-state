import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold my-7 text-center'>All Blogs</h1>
<div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div className="collapse-title font-semibold">1.What is useState and how does it work in React?</div>
  <div className="collapse-content text-sm">
    useState is a React hook that allows functional components to store and manage local state. It returns an array with the current state value and a function to update it.
  </div>
</div>
<div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div className="collapse-title font-semibold">2.What is the purpose of useEffect in React?</div>
  <div className="collapse-content text-sm">
   useEffect lets you perform side effects in functional components, such as fetching data, setting up subscriptions, or manually updating the DOM. It runs after the component renders and can clean up when the component unmounts.
  </div>
</div>
<div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div className="collapse-title font-semibold">3.What is a custom hook in React and when should you use one?</div>
  <div className="collapse-content text-sm">
    A custom hook is a JavaScript function that starts with "use" and allows you to extract and reuse logic that involves React hooks. You should use one when you want to share complex logic across multiple components in a clean and reusable way.
  </div>
</div>
<div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div className="collapse-title font-semibold">4.Difference between controlled and uncontrolled components. Which one is better?</div>
  <div className="collapse-content text-sm">
   Controlled components have their form data managed by React state, giving more control over the UI and validation. Uncontrolled components store form data in the DOM using refs. Controlled components are generally preferred for better control and predictability.
  </div>
</div>
<div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div className="collapse-title font-semibold">5.Tell us something about useFormStatus() in React.</div>
  <div className="collapse-content text-sm">
   useFormStatus() is a React Server Component hook that provides information about the current status of a form, such as whether it's submitting or has been submitted. It's useful for giving feedback like showing loading spinners or disabling buttons during form submission.
  </div>
</div>

        </div>
    );
};

export default Blogs;