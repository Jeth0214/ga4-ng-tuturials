import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css'
})
export class Newsletter {

 router = inject(Router);

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['/thank-you']);
  }

}
