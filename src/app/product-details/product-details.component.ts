import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produit: IProduit;

  detail: IProduit;

  code: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
                    private _service: ProduitsService) { }  // DI ...  _route = new SomeThinThatImplementsActivatedRoute

  ngOnInit() {

    // Snapshot prend une copie fixe de l'etat de l'objet
    // this.code = this._route.snapshot.paramMap.get('id');
    this._route.paramMap.subscribe(res => {this.code = res.get('id'); });
    this._service.getProduitsById(this.code).subscribe(res => this.produit = res);
  }

  navigateToList() {
    this._router.navigate(['/list']);
  }


}
