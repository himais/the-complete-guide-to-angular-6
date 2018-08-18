import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

/* Por padrão, services não precisam de nenhuma anotação - são uma classe comum
   Para injetar um service dentro de outro, apenas no service que recebe (inject-in) deve ser adicionada
   a metadata @Injectable para que o angular reconheça que há uma referência para outro service */
@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private logService: LogService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logService.log('A server status changed, new status: ' + status);
    }

    updateAccount(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logService.log('A server status changed, new status: ' + newStatus);
    }

}
