import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectromenagersComponent } from './electromenagers/electromenagers.component';
import { AddElectromenagersComponent } from './add-electromenagers/add-electromenagers.component';
import { FormsModule } from '@angular/forms';
import { UpdateElectromenagersComponent } from './update-electromenagers/update-electromenagers.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectromenagersComponent,
    AddElectromenagersComponent,
    UpdateElectromenagersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
