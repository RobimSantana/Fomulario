import { Component, OnInit } from '@angular/core';
//import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [ItemCertificado, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
