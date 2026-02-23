import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() nomeAluno: string =  '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';


  constructor(private router: Router) { }

  redirecionarCertificados() {
    this.router.navigate(['/certificado', this.id]);

  }


}
