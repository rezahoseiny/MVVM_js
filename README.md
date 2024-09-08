# MVVM Pattern in Vanilla JavaScript

This project demonstrates the MVVM (Model-View-ViewModel) pattern using pure vanilla JavaScript. It provides a simple example of how to implement MVVM architecture without relying on any external libraries or frameworks.

## Project Overview

The project consists of a user registration form where users can input their name and email. The entered data is displayed below the form when the user clicks the "Submit" button. The application follows the MVVM pattern to separate concerns and manage data binding effectively.

## Components

- **Model (`UserModel`)**: Represents the data structure for the user, including `name` and `email`.
- **ViewModel (`UserViewModel`)**: Acts as an intermediary between the View and the Model, handling data binding and view updates.
- **View (HTML)**: Contains the user interface elements such as input fields and a button.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- Basic understanding of HTML and JavaScript.
  
### Project Structure
- - `index.html`: Contains the HTML structure and UI elements.
- `mvvm.js`: Contains the JavaScript code implementing the MVVM pattern.

- ### Usage

1. **Enter Data**: Type your name and email into the input fields.
2. **Submit Data**: Click the "Submit" button to see the submitted data displayed below the form.
3. **View Update**: The data entered in the input fields is displayed in real-time below the form, demonstrating two-way data binding.

### How It Works

- The `UserModel` class defines the data structure for user information.
- The `UserViewModel` class binds HTML input elements to the model properties, updates the model on input changes, and updates the view accordingly.
- The view (`index.html`) is linked to the ViewModel through data bindings, allowing real-time updates.

### Code Explanation

- **Model (`UserModel`)**:
  - Defines properties for user data: `name` and `email`.
  
- **ViewModel (`UserViewModel`)**:
  - Contains methods to bind HTML elements to model properties.
  - Handles input changes and updates the view.
  
- **View (`index.html`)**:
  - HTML structure includes input fields for user data and a submit button.
  - Displays the submitted data using `<span>` elements updated by the ViewModel.

### Contributing

Feel free to submit issues or pull requests to improve the project. Your contributions are welcome!

### License

This project is licensed under the MIT License
---

For any questions or feedback, please contact the project maintainer.
