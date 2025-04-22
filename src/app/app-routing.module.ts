import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'main', component: ListComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', loadChildren: () => import ('./admin/admin.module').then( m => m.AdminModule) },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
