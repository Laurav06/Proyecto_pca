import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { topbooksPage} from './topbooks.page';

const routes: Routes = [
  {
    path: '',
    component: topbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopbooksPageRoutingModule {}
