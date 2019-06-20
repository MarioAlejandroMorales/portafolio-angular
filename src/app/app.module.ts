import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

/*Routing*/
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
