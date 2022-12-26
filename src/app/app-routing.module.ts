import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositeComponent } from './Components/Home/composite/composite.component';
import { DraftsComponent } from './Components/Home/drafts/drafts.component';
import { FoldersComponent } from './Components/Home/folders/folders.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { InboxComponent } from './Components/Home/inbox/inbox.component';
import { SentComponent } from './Components/Home/sent/sent.component';
import { TrashComponent } from './Components/Home/trash/trash.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
  {path: "home", component:HomeComponent,children:[
    {path: "inbox", component:InboxComponent},
    {path: "sent", component:SentComponent},
    {path: "drafts", component:DraftsComponent},
    {path: "trash", component:TrashComponent},
    {path: "folder", component:FoldersComponent},
    {path: "composite", component:CompositeComponent}
  ]},
  {path: "", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
