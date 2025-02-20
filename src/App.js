import "bulma/css/bulma.min.css";
import "./App.css";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Course
              image="/images/angular.jpg"
              title="Angular"
              description="Master Angular and build dynamic web applications with TypeScript! Learn components, services, routing, and state management. Perfect for developers looking to create scalable, modern, and interactive web apps."
            />
          </div>
          <div className="column">
            <Course
              image="/images/bootstrap5.png"
              title="Bootstrap 5"
              description="Enhance your web design skills with Bootstrap 5! Learn responsive layouts, powerful components, and modern UI techniques. Ideal for developers who want to create mobile-friendly websites quickly and efficiently."
            />
          </div>
          <div className="column">
            <Course
              image="/images/ccsharp.png"
              title="C & C#"
              description="Learn C# programming from scratch! Master object-oriented principles, data structures, and .NET framework. Perfect for building desktop apps, web applications, and game development with Unity. Ideal for beginners and experienced coders!"
            />
          </div>
          <div className="column">
            <Course
              image="/images/kompleweb.jpg"
              title="Full Web"
              description="A complete web development journey! Learn HTML, CSS, JavaScript, React, Node.js, and databases. From front-end to back-end, this course covers everything needed to become a full-stack developer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
