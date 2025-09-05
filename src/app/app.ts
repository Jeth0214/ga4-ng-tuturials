import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./partials/footer/footer";
import { Nav } from "./partials/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ga4-ng-tutorials';
}
