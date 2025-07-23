"use client";

import CourseCard from "./CourseCard"

const courseData = [
  {
    title: "CSS",
    subtitle: "The Complete Cascading Stylesheet course",
    description:
      "CSS (Cascading Style Sheets) is a stylesheet language responsible for the styling of your web page. It is used to express how HTML elements are styled, positioned and rendered on all of the different screen display and sizes.",
    spanClass: "sm:col-span-4 row-span-1",
  },
  {
    title: "JavaScript",
    subtitle: "The Complete JavaScript course",
    description:
      "JS (JavaScript) is one of the most widely used programming languages in the world. It allows us to add interactivity to our web pages.",
    spanClass: "sm:col-span-2 row-span-1",
  },
  {
    title: "ReactJS",
    subtitle: "The Complete ReactJS course",
    description:
      "ReactJS (A JavaScript library for building user interfaces) is an open-source, declarative and component-based javascript library. It is the most popular Javascript front-end library/framework and is widely used to build single page application and user interfaces.",
    spanClass: "sm:col-span-3 row-span-1",
  },
  {
    title: "NextJS",
    subtitle: "The Complete NextJS course",
    description:
      "NextJS (The React framework for production) is a React framework with all the features you need for production – hybrid, static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed and great developer experience.",
    spanClass: "sm:col-span-3 row-span-1",
  },
];

export default function Courses() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h4 className="uppercase text-slate-400 text-sm font-semibold mb-6">
        Courses
      </h4>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 auto-rows-auto">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            subtitle={course.subtitle}
            description={course.description}
            spanClass={course.spanClass}
          />
        ))}
      </div>
    </section>
  );
}
