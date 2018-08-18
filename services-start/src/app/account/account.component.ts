import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../log.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService, AccountService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private logService: LogService, private accountService: AccountService) { }

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateAccount(this.id, status);
    this.logService.log('A server status changed, new status: ' + status);
  }
}
