import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MsqepageComponent } from './pages/academics/msqepage/msqepage.component';
import { getAllRoutes } from 'src/data/navigation';

const routes: Routes = getAllRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
