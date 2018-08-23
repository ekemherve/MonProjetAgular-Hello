import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  URL = 'http://localhost:8080/produits/';

  constructor(private _http: HttpClient) { }


  getProduitsById(id: string): Observable<IProduit> {
    // return {code: 'BIDON', titre: 'BIDON_TITRE', prixUnitaire: 150};
    return this._http.get<IProduit>(this.URL + id);
  }

  addProduit(produit: IProduit): Observable<any> {
    return this._http.post(this.URL, produit);
  }

  getProduits(): Observable<IProduit[]> {

    return this._http.get<IProduit[]>(this.URL);
    /*return [
      { code: 'P1000', titre: 'FROM SERVICE Café', prixUnitaire: 5.5 },
      { code: 'P1000', titre: 'Café', prixUnitaire: 5.5 },
      { code: 'P1000', titre: 'Café', prixUnitaire: 5.5 }
    ];*/
  }
}
