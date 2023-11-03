import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: User = new User();
  submitted = false; // Add this line

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    this.submitted = true;
    console.log(this.model);
  }
}

export class User {
  public firstname: string;
  public lastname: string;
  public email: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
  }
}
