import { PersonasService } from './../services/personas.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  personas$: Observable<Persona[]>;
  constructor(private personasService: PersonasService, private loadingCtrl:  LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({  message: 'Cargando...'});
    loading.present();
    this.personas$ = this.personasService.getPersonas().pipe(
      tap(personas =>{
        loading.dismiss();
        return personas;
    })
    );
  }

}
