import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './component/cabinet/cabinet.component';
import { CatalogCreateComponent } from './component/catalog/catalog-create/catalog-create.component';
import { CatalogListComponent } from './component/catalog/catalog-list/catalog-list.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [

  {
    path: '', component:LoginComponent
  },
  {
    path: 'cabinet', component:CabinetComponent, children:[
        {
          path: 'catalogCreate', component:CatalogCreateComponent
        }
    ]
  }, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
