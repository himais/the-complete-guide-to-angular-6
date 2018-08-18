export class CounterService {
    activeToInactive: number = 0;
    inativeToActive: number = 0;

    addActiveToInactive() {
        this.activeToInactive++;
        console.log('active => inactive: ' + this.activeToInactive);
    }

    addInactiveToActive() {
        this.inativeToActive++;
        console.log('inactive => active: ' + this.inativeToActive);
    }
}
