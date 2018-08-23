import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  produit: IProduit = {code: '', titre: '', prixUnitaire: 12000};

  constructor(private _service: ProduitsService, private _router: Router) { }

  ngOnInit() {
  }

  addProduit() {
    this._service.addProduit(this.produit).subscribe(res => {
        console.log('Le produit ajouté avec succes'); this._router.navigate(['/list']); });
  }

}
