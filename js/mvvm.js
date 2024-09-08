// Instantiate ViewModel and set up bindings
import {UserViewModel} from "./userViewModel.js";

document.addEventListener('DOMContentLoaded', () => {
    const userViewModel = new UserViewModel();

    // Bind the View (HTML) to the ViewModel (JS)
    userViewModel.bindView('name', 'name');
    userViewModel.bindView('email', 'email');

    // Submit button functionality
    document.getElementById('submitBtn').addEventListener('click', () => {
        userViewModel.handleSubmit();
    });
});
