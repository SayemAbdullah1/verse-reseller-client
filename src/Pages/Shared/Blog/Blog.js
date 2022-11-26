import React from 'react';

const Blog = () => {
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 center lg:w-75'>
            <div className="card w-99 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>The Four Kinds of React State to Manage <br />
                        Local (UI) state – Local state is data we manage in one or another component.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                    
                </div>
            </div>
            <div className="card w-99 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    
                </div>
            </div>
            <div className="card w-99 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    
                </div>
            </div>
            <div className="card w-99 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;