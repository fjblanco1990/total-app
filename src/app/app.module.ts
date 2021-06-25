import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  { ReactiveFormsModule} from '@angular/forms';

//NgRx
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { TodoModule } from './Todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducers } from './app.redcuer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(
       AppReducers,
      {runtimeChecks:
        {strictStateImmutability: false, strictActionImmutability: false}
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states cuantos estados queremos mantener en nuestras herramientas
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
