import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

   // data: any[];
   data: IProduit[];

  constructor(private _service: ProduitsService) {}

  ngOnInit() {
    // this.data = this._service.getProduits();
    this._service.getProduits().subscribe(
      res => this.data = res,
      erreur => console.log('Attention il y a l\'erreur : ' + erreur));

  }
}
