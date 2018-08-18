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

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }

    updateAccount(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }

}
