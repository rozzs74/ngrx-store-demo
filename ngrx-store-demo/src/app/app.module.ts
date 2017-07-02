import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterNonStoreComponent } from './core-concept/counter-non-store/counter-non-store.component';
import { CounterStoreComponent } from './core-concept/counter-store/counter-store/counter-store.component';

import { counter } from './reducers/counter';
import { SubjectDispatcherComponent } from './building-blocks/subject-dispatcher/subject-dispatcher.component';
import { BehaviorSubjectComponent } from './building-blocks/behavior-subject-dispatcher/behavior-subject/behavior-subject.component';
import { StoreDispatcherComponent } from './store-dispatcher-data-flow/store-dispatcher/store-dispatcher.component';
import { ReducersComponent } from './reducer-demo/reducers/reducers.component';
import { ReducerReduxStlyeComponent } from './reducer-redux-style/reducer-redux-stlye/reducer-redux-stlye.component';
import { ScanDemoComponent } from './scan-demo/scan-demo/scan-demo.component';
import { MiddlewareLetDemoComponent } from './middleware-store-demo/middleware-let-demo/middleware-let-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterNonStoreComponent,
    CounterStoreComponent,
    SubjectDispatcherComponent,
    BehaviorSubjectComponent,
    StoreDispatcherComponent,
    ReducersComponent,
    ReducerReduxStlyeComponent,
    ScanDemoComponent,
    MiddlewareLetDemoComponent 
    

  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
