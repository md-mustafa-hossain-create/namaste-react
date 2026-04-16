# Namaste Food React App 🍕

A modern food ordering application built with **React**, **Tailwind CSS**, and **Parcel**. This project was created as part of the "Namaste React" course to master the core fundamentals of web development with React.

## 🚀 React Topics Covered

By building this project, you can learn and implement the following React concepts:

### 1. Functional Components & Architecture

- **Component Decomposition**: Breaking down a complex UI into smaller, reusable components like `Header`, `Body`, `SearchBar`, and `RestaurantCard`.
- **Layout Patterns**: Understanding how to structure a root `AppLayout` to manage consistent headers and footers.

### 2. State & Hooks (The Heart of React)

- **useState**: Managing local data like search text, authentication toggles (Log In/Out), and dynamic restaurant lists.
- **useEffect**: Handling "Side Effects" like fetching data from external APIs when the component first mounts.
- **Custom Hooks**: Abstracting complex data-fetching logic into a reusable `useRestaurants` hook to keep UI components clean.

### 3. Data Flow & Props

- **Passing Props**: Learning how to send data from parent components to children (e.g., passing restaurant data to a Card component).
- **Object Destructuring**: Cleaning up props and state objects for more readable code.

### 4. Logic & Data Manipulation

- **Filtering**: Implementing search and "Top Rated" filters using JavaScript's `.filter()` method.
- **Mapping**: Dynamic rendering of a grid of components using the `.map()` function.
- **Conditional Rendering**: Using ternary operators to show a **Shimmer UI** while waiting for API data.

### 5. Advanced Event Handling

- **Real-time Search**: Implementing "Live Search" using `onChange` and understanding the asynchronous nature of React state updates.
- **Form Submission**: Handling the "Enter" key using the `onSubmit` event in forms.

### 6. Integration & Tooling

- **API Integration**: Using **Axios** to fetch real-world data from Swiggy's live API.
- **Zero-Config Bundling**: Mastering **Parcel** to handle Babel, JSX transpilation, and browser compatibility.
- **Tailwind CSS**: Building a responsive, high-end UI using utility-first CSS.
- **Git Best Practices**: Managing project settings and ignore rules with `.gitignore`.

## 🛠️ Tech Stack

- **Library**: React 19
- **Bundler**: Parcel
- **Styling**: Tailwind CSS
- **API Client**: Axios
- **Icons**: Lucide React

---

*This project is a journey from React basics to building professional, fast, and scalable web applications!*
