import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  router = inject(Router);

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['/thank-you']);
  }

}
