export class CounterService {
    activeToInactive: number = 0;
    inativeToActive: number = 0;

    addActiveToInactive() {
        this.activeToInactive++;
        console.log('Ativos para inativos: ' + this.activeToInactive);
    }

    addInactiveToActive() {
        this.inativeToActive++;
        console.log('Inativos para ativos: ' + this.inativeToActive);
    }
}
