import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyservicingComponent } from './policyservicing/policyservicing.component';
import { AllpoliciesComponent } from './allpolicies/allpolicies.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'policyservicing', component:PolicyservicingComponent},
  { path: 'allpolicies', component:AllpoliciesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
