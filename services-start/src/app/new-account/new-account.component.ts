import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../log.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  /* Removendo o log service do construtor pois será injetado dentro do AccountService */
  // constructor(private logService: LogService, private accountService: AccountService) { }
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('The new status is ' + status);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */

    //this.logService.log('A server status changed, new status: ' + accountStatus);
  }
}
