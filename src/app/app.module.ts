import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { InboxComponent } from './Components/Home/inbox/inbox.component';
import { SentComponent } from './Components/Home/sent/sent.component';
import { DraftsComponent } from './Components/Home/drafts/drafts.component';
import { TrashComponent } from './Components/Home/trash/trash.component';
import { FoldersComponent } from './Components/Home/folders/folders.component';
import { CompositeComponent } from './Components/Home/composite/composite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DraftsComponent,
    InboxComponent,
    SentComponent,
    TrashComponent,
    FoldersComponent,
    CompositeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
