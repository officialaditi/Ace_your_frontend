// Complete Questions with Answers by Topic

export const Theory_Questions = [
  {
    id: 34,
    question: "Explain about hooks, and why we use them?",
    answer:
      "Hooks are functions like useState, useEffect that let you use React features in functional components.",
    topic: "react",
  },
  {
    id: 11,
    question: "what is the difference between if/else and ternary operator?",
    answer:
      "Ternary is a shorthand for if/else: `condition ? expr1 : expr2`. Suitable for simple conditions.",
    topic: "javascript",
  },
  {
    id: 6,
    question: "difference between svg and canvas?",
    answer:
      "SVG is vector-based, scalable and DOM-accessible. Canvas is raster-based, pixel-by-pixel drawing, better for performance-heavy graphics like games.",
    topic: "html",
  },
  {
    id: 19,
    question: "Why do we need react?",
    answer:
      "React builds dynamic UIs efficiently using components, virtual DOM, and a declarative approach.",
    topic: "react",
  },
  {
    id: 25,
    question:
      "Can you give me some examples of properties that are not in the Virtual DOM but in the real DOM?",
    answer:
      "Real DOM has properties like 'value' of input elements, which React controls separately.",
    topic: "react",
  },
  {
    id: 1,
    question: "what is semantic elements in html?",
    answer:
      "Semantic elements clearly describe their meaning to both the browser and developer. Examples include <header>, <article>, <section>. They improve SEO and accessibility.",
    topic: "html",
  },
  {
    id: 36,
    question: "Can you write a custom hook for an API call?",
    answer:
      "Yes. Example:\n```js\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(url).then(res => res.json()).then(setData);\n  }, [url]);\n  return data;\n}\n```",
    topic: "react",
  },
  {
    id: 13,
    question: "what is type conversion in js?",
    answer:
      "Changing a value's type: explicit (e.g., Number('123')) or implicit (e.g., '5' * 2 → 10).",
    topic: "javascript",
  },
  {
    id: 15,
    question: "what fixed and absolute position properties work in css?",
    answer:
      "Both remove the element from normal flow. 'absolute' is positioned relative to nearest positioned ancestor. 'fixed' is relative to the viewport.",
    topic: "css",
  },
  {
    id: 35,
    question: "Can you tell one example when do we use custom hooks?",
    answer:
      "Custom hooks are useful for logic reuse. Example: useFetch for API calls.",
    topic: "react",
  },
  {
    id: 3,
    question: "what is ordered list?",
    answer:
      "An ordered list <ol> displays items in a numbered format. Each item is inside an <li> element.",
    topic: "html",
  },
  {
    id: 26,
    question: "What is the difference between State and Props?",
    answer:
      "Props are read-only and passed from parent. State is internal and mutable within the component.",
    topic: "react",
  },
  {
    id: 40,
    question: "What is the difference between throttle and debounce?",
    answer:
      "Throttle limits a function to run at most once every interval. Debounce delays execution until inactivity.",
    topic: "javascript",
  },
  {
    id: 5,
    question: "what is doctype in html?",
    answer:
      "The <!DOCTYPE html> declaration defines the document type and version of HTML. It ensures consistent rendering across browsers.",
    topic: "html",
  },
  {
    id: 39,
    question: "What does an async function return?",
    answer:
      "It always returns a Promise, resolved with the return value or rejected with an error.",
    topic: "javascript",
  },
  {
    id: 22,
    question: "Have you ever seen how a Virtual DOM looks like?",
    answer:
      "It looks like a nested JavaScript object representing the structure of a UI component tree.",
    topic: "react",
  },
  {
    id: 16,
    question: "what is difference between inline and block element?",
    answer:
      "Inline elements don’t start on a new line and only take needed width. Block elements start on a new line and span full width.",
    topic: "html",
  },
  {
    id: 12,
    question: "what is difference between == and === ?",
    answer:
      "'==' compares values with type coercion. '===' checks for both value and type equality.",
    topic: "javascript",
  },
  {
    id: 30,
    question: "What is the way to track our state changes?",
    answer:
      "Use useEffect or console.log. In dev, React DevTools helps track state changes.",
    topic: "react",
  },
  {
    id: 33,
    question: "Do you know Source Maps?",
    answer:
      "Source maps map minified or compiled code to the original source, helping in debugging.",
    topic: "javascript",
  },
  {
    id: 24,
    question: "Why can't React do comparison with the real DOM?",
    answer:
      "Real DOM operations are slow. React compares virtual DOMs to minimize real DOM access.",
    topic: "react",
  },
  {
    id: 4,
    question: "what is use of head tag? (other links)",
    answer:
      "The <head> tag contains metadata like title, links to CSS, scripts, and other resources used by the HTML document.",
    topic: "html",
  },
  {
    id: 38,
    question:
      "Why don't we make the useEffect callback function an async function?",
    answer:
      "Because useEffect expects the callback to return either nothing or a cleanup function, not a promise.",
    topic: "react",
  },
  {
    id: 21,
    question: "What is Virtual DOM? Can you explain that?",
    answer:
      "Virtual DOM is a lightweight copy of the real DOM. React updates the virtual DOM and syncs changes efficiently.",
    topic: "react",
  },
  {
    id: 20,
    question: "Why do we need React?",
    answer:
      "React builds dynamic UIs efficiently using components, virtual DOM, and a declarative approach.",
    topic: "react",
  },
  {
    id: 7,
    question: "diff between div and span?",
    answer:
      "<div> is a block-level element, spans full width. <span> is inline, wraps only the content. Used for grouping and styling.",
    topic: "html",
  },
  {
    id: 27,
    question: "What is the difference between useState and State?",
    answer:
      "useState is a React Hook for functional components. State was traditionally used in class components.",
    topic: "react",
  },
  {
    id: 18,
    question: "explain what are closures?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when executed outside that scope.",
    topic: "javascript",
  },
  {
    id: 10,
    question: "what is the purpose of typeof operator?",
    answer:
      "Used to check the type of a variable. Returns a string like 'number', 'string', 'object', etc.",
    topic: "javascript",
  },
  {
    id: 14,
    question: "what is scope in js?",
    answer:
      "Scope determines variable access. Global scope is outside functions. Function and block scopes use var, let, const.",
    topic: "javascript",
  },
  {
    id: 29,
    question: "What are the ways we can create a state in our React app?",
    answer:
      "useState, useReducer, Context API (for global state), Redux, Zustand, etc.",
    topic: "react",
  },
  {
    id: 2,
    question: "alt attribute in image tag? (helps in SEO, and accessibility)",
    answer:
      "The 'alt' attribute provides alternative text for an image. It helps screen readers and appears if the image fails to load. Also helps in SEO.",
    topic: "html",
  },
  {
    id: 8,
    question: "what is meant by cascading in css?",
    answer:
      "Cascading means rules are applied based on specificity, importance, and source order. Later or more specific rules override earlier ones.",
    topic: "css",
  },
  {
    id: 31,
    question:
      "Did you notice the speed difference when creating and running a project using Vite?",
    answer:
      "Yes, Vite offers faster dev experience due to native ES modules and hot module replacement.",
    topic: "react",
  },
  {
    id: 23,
    question: "Why is Virtual DOM fast?",
    answer:
      "Because React batches updates and uses a diffing algorithm to apply minimal real DOM changes.",
    topic: "react",
  },
  {
    id: 28,
    question:
      "Is there any other way to create a state instead of using useState?",
    answer:
      "Yes, you can use useReducer, or in class components, use this.state.",
    topic: "react",
  },
  {
    id: 9,
    question: "what are psuedo elements?",
    answer:
      "Pseudo-elements allow styling specific parts of elements, like ::before, ::after, ::first-letter, without extra markup.",
    topic: "css",
  },
  {
    id: 17,
    question: "what is shallow and deep copy in js?",
    answer:
      "Shallow copy copies only references for nested objects. Deep copy duplicates everything. Use JSON.parse(JSON.stringify(obj)) or structuredClone().",
    topic: "javascript",
  },
  {
    id: 32,
    question: "Why is Vite faster than CRA?",
    answer:
      "Vite uses native ES modules and loads only used files in dev. CRA bundles everything upfront.",
    topic: "react",
  },
  {
    id: 37,
    question: "Can you customize your hook to take custom URLs?",
    answer:
      "Yes. You can pass the URL as a parameter to the hook and use useEffect to fetch data.",
    topic: "react",
  },
];
