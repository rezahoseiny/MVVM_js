// ViewModel
import {UserModel} from "./userModel.js";

export class UserViewModel {
    constructor() {
        this.user = new UserModel();
        this.userHistory = [];
        this.bindings = {};
    }

    // Two-way data binding
    bindView(elementId, modelProperty) {
        const element = document.getElementById(elementId);

        // Each property of the ViewModel bind to an HTML element is associated with 
        // an element in the bindings object
        // so, this.bindings is a storage to keep track of which HTML elements 
        // are bound to which properties of the ViewModel
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

        // Update the input elements to reflect the ViewModel's current state
        for (const [modelProperty, element] of Object.entries(this.bindings)) {
            console.log(`Updating the input elements using ${modelProperty}: ${this.user[modelProperty]}, and the element.value is: ${element.value}`)
            console.log(this.bindings)
            element.value = this.user[modelProperty];
        }    
    }

    // Submit button handler
    handleSubmit() {
        if (this.user.name && this.user.email) {
            this.userHistory.push(new UserModel(this.user.name, this.user.email));
            this.user.name = '';
            this.user.email = '';
            this.updateView();
            this.updateHistoryView();
            console.log(`Submitted: Name - ${this.userHistory[this.userHistory.length - 1].name}, Email - ${this.userHistory[this.userHistory.length - 1].email}`);
        } else {
            alert('Please enter both name and email.');
        }
    }

    // Update the history view
    updateHistoryView() {
        const historyContainer = document.getElementById('userHistory');
        historyContainer.innerHTML = ''; // Clear existing content
        console.log("updating the history view")

        this.userHistory.forEach((user, index) => {
            const userEntry = document.createElement('div');
            userEntry.className = 'user-entry';
            userEntry.innerHTML = `<span style="font-style: italic">User ${index + 1}</span>: Name - ${user.name}, Email - ${user.email}`;
            historyContainer.appendChild(userEntry);
        });
    }
}