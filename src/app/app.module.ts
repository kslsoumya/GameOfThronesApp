import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { ListHousesComponent } from './list-houses/list-houses.component';
import { AppHttpService } from './app-http.service';
import { AppResolverService } from './app-resolver.service';
import { AppGuard } from './app.guard';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailBooksComponent } from './detail-books/detail-books.component';
import { DetailHousesComponent } from './detail-houses/detail-houses.component';
import { DetailCharactersComponent } from './detail-characters/detail-characters.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    ListViewComponent,
    HomeComponent,
    ListBooksComponent,
    ListCharactersComponent,
    ListHousesComponent,
    ListComponent,
    NotFoundComponent,
    DetailBooksComponent,
    DetailHousesComponent,
    DetailCharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListViewComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'list/:option',
        canActivate: [AppGuard],
        component: ListViewComponent,
        runGuardsAndResolvers: 'always',
        resolve : {option : AppResolverService}
      },
      { path: 'detail/:item/:id', component: DetailViewComponent },
      { path: '**', component: NotFoundComponent },

    ], {
      enableTracing: false
    }),
  ],
  providers: [AppHttpService, AppGuard, AppResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
