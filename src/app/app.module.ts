import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProjectsComponent } from './projects/projects.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    NgbModule,
    NgbNavbar,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
