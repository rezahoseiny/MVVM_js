// ViewModel
import {UserModel} from "./userModel.js";

export class UserViewModel {
    constructor() {
        this.user = new UserModel();
        this.bindings = {};
    }

    // Two-way data binding
    bindView(elementId, modelProperty) {
        const element = document.getElementById(elementId);
        this.bindings[modelProperty] = element;

        // Event listener for input changes (from View to ViewModel)
        element.addEventListener('input', (event) => {
            this.user[modelProperty] = event.target.value;
            this.updateView();
        });
    }

    // Update the View when the model data changes
    updateView() {
        document.getElementById('displayName').textContent = this.user.name;
        document.getElementById('displayEmail').textContent = this.user.email;
    }

    // Submit button handler
    handleSubmit() {
        console.log('User Submitted:', this.user);
        alert(`Submitted: Name - ${this.user.name}, Email - ${this.user.email}`);
    }
}