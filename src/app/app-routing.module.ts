import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: 'app/pages/sign-in/sign-in.module#SignInModule' },
  { path: 'hr', loadChildren: 'app/pages/hr/hr.module#HrModule', canActivate: [AuthGuard] },
  { path: 'presale', loadChildren: 'app/pages/presale/presale.module#PresaleModule', canActivate: [AuthGuard] },
  { path: 'managment', loadChildren: 'app/pages/managment/managment.module#ManagmentModule', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
