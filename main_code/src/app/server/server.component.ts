import { Component } from '@angular/core';

@Component({ //decorator - anotação para a criação de um componente
    selector: 'app-server', //string que faz referência ao componente para chamada
    templateUrl: './server.component.html' //html a ser utilizado pelo componente | precisa do caminho relativo
})

export class ServerComponent{
    serverId: number = 10; //or just serverId = 10; 
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}