import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { BaseUi } from './_components/base-ui/base-ui';
import { CommonModule } from '@angular/common';
import { CertificadoService } from './_services/certificado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar ,BaseUi,
CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'gerador-certificado'
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService){}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
