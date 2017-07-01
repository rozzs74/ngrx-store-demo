import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterNonStoreComponent } from './core-concept/counter-non-store/counter-non-store.component';
import { CounterStoreComponent } from './core-concept/counter-store/counter-store/counter-store.component';

import { counter } from './reducers/counter';
import { SubjectDispatcherComponent } from './building-blocks/subject-dispatcher/subject-dispatcher.component';
import { BehaviorSubjectComponent } from './building-blocks/behavior-subject-dispatcher/behavior-subject/behavior-subject.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterNonStoreComponent,
    CounterStoreComponent,
    SubjectDispatcherComponent,
    BehaviorSubjectComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
