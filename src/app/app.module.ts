import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './components/form/form.component';
import {ContentComponent} from './components/content/content.component';
import {PreviewComponent} from './components/preview/preview.component';
import {ModalComponent} from './components/modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreativesListComponent } from './components/creatives-list/creatives-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContentComponent,
    PreviewComponent,
    ModalComponent,
    CreativesListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
