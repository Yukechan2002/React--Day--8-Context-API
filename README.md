
# React useContext Cart Management App

This React application demonstrates the use of the `useContext` hook combined with the `useReducer` hook to manage and manipulate cart data. The project fetches JSON data from a provided URL to create a dynamic cart page displaying each item's price, quantity, and total amount, with the ability to adjust quantities interactively.

## Getting Started

These instructions will guide you on how to obtain a copy of the project and run it on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (typically installed with Node.js)

### Installation

To set up the project locally, follow these steps:   

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your_username/react-usecontext-cart.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd react-usecontext-cart
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Functionality

- **Load Cart Data**: Automatically loads JSON data for cart items from a remote source.
- **Adjust Quantity**: Users can increase or decrease the quantity of items in their cart.
- **Calculate Totals**: The app calculates the total price and quantity dynamically as items are added or removed, or as their quantities are adjusted.

### Key Features

- Uses the React `useContext` and `useReducer` hooks for state management across components.
- Ensures performance optimization by minimizing the number of renders.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Create React App](https://create-react-app.dev/) - This project was bootstrapped with Create React App.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/your_username/react-usecontext-cart/blob/master/CONTRIBUTING.md) for the process for submitting pull requests to us.



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```