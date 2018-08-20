import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }, // <path>/:[var] indica que serápassado um valor pela rota
        ]
    },
    {
        path: 'servers', component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' } /* pega todos os path não mapeados e redirecionam pra not-found
                                                deve ser colocado nofinal pois as rotas são carregadas por ordem de declaração*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // config: informa as rotas para o app
    ],
    exports: [
        RouterModule // exporta para uso externo
    ]
})
export class AppRoutingModule {
}
