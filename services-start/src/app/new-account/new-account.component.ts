import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../log.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService, AccountService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logService: LogService, private accountService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */

    this.logService.log('A server status changed, new status: ' + accountStatus);
  }
}
