import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductCreateGuard } from './guards/product-create.guard';
import { FormsModule} from '@angular/forms';

const routes =  [
  {'path': 'welcome', 'component': WelcomeComponent},
  {'path': 'detail/:id', 'component': ProductDetailsComponent},
  {'path': 'add', 'component': ProductsAddComponent, canActive: ProductCreateGuard},
  {'path': 'list', 'component': ProductsListComponent},
  {'path': '', redirectTo: '/welcome', pathMatch: 'full'},
  {'path': '**', 'component': NotFoundComponent},  // il faut le double ** car c'est un template

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
    NotFoundComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,         // permet de rendre en json les resultats de mon back-End
    RouterModule.forRoot(routes), // table de routage
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
