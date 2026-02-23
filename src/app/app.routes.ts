import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: "",
    loadComponent:() => import ('./pages/certificados/certificados').then(m => m.Certificados)
  },
  {
    path: "certificados/novo",
    loadComponent:() => import('./pages/certificado-form/certificado-form').then(m => m.CertificadoForm)
  },
  {
    path: "certificados/:id",
    loadComponent:() => import('./pages/certificado/certificado').then(m => m.CertificadoComponent)
  }
];
