import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { MainMenu } from './components/main-menu/main-menu';
import { GrainList } from './ingredients/grain-list/grain-list';
import { HopList } from './ingredients/hop-list/hop-list';
import { YeastList } from './ingredients/yeast-list/yeast-list';
import { AdjunctList } from './ingredients/adjunct-list/adjunct-list';
import { AdjunctEdit } from './ingredients/adjunct-edit/adjunct-edit';
import { YeastEdit } from './ingredients/yeast-edit/yeast-edit';
import { HopEdit } from './ingredients/hop-edit/hop-edit';
import { GrainEdit } from './ingredients/grain-edit/grain-edit';

export const routes: Routes = [

  { path: 'login', component: Login },
  { path: 'main-menu', component: MainMenu },
  { path: 'grain-list', component: GrainList },
  { path: 'grain-edit', component: GrainEdit },
  { path: 'grain-edit/:id', component: GrainEdit },
  { path: 'hop-list', component: HopList },
  { path: 'hop-edit', component: HopEdit },
  { path: 'hop-edit/:id', component: HopEdit },
  { path: 'yeast-list', component: YeastList },
  { path: 'yeast-edit', component: YeastEdit },
  { path: 'yeast-edit/:id', component: YeastEdit },
  { path: 'adjunct-list', component: AdjunctList },
  { path: 'adjunct-edit', component: AdjunctEdit },
  { path: 'adjunct-edit/:id', component: AdjunctEdit },

];
