# Recipe Menu Project

This project is a recipe application built using React, Vite, and JavaScript. It allows users to filter, find and create recipes.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **JavaScript:** The primary programming language for web development.
*   **useState:** For managing state within functional components.
*   **useEffect:** For handling side effects in functional components.
*   **useRef:** For directly accessing DOM elements or holding mutable values.
*   **Axios:** For making HTTP requests to fetch recipe data.
*   **Suspense:** For handling loading states and improving user experience.
*   **Props:** For passing data between React components.
*   **React Router DOM:** For routing and page redirection.
*   **localStorage:** For persisting array data in the browser.
*   **Components**: For building reusable UI elements.
*   **Event Handling**: To manage user interactions.
*   **Conditional Rendering**: For rendering different content based on conditions.
*   **Refs**: For accessing DOM elements directly.
*   **Keys**: For uniquely identifying list items.
*   **Styled components**: For styling React components with CSS-in-JS.
*   **Memoization**: For optimizing performance by caching function results.
*   **Redux:** For state management (login authentication).

## Features

*   **User Authentication:**  Users can log in to access the recipe menu.
*   **Browse Recipes:** View a list of recipes.
*   **Filter Recipes:** Filter for recipes by title.
*   **Add Recipes:** Users can add new recipes to the menu.
*   **View Recipe Details:** See detailed information for each recipe, including:
    *   Recipe Name
    *   Image
    *   Ingredients
    *   Instructions
    *   Cuisine
    *   Difficulty
*   **Delete Recipes:** Remove recipes from the menu.
*   **Fetch Recipes from API:**  The application fetches recipe data from a dummy API ([dummyjson.com](https://dummyjson.com/)).

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

    This will start the development server at `http://localhost:5173` (or another port specified by Vite). Open this URL in your browser to view the application.