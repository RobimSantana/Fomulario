import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { Certificado } from './pages/certificado/certificado';

import { BaseUi } from './_components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar , BaseUi, Certificado

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RockStar_Formulario');
}
