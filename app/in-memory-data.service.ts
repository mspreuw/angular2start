import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let klussen = [
      {id: 1, name: 'Vellen op beperkte ruimte'},
      {id: 2, name: 'Vellen op onbeperkte ruimte'},
      {id: 3, name: 'Algemeen snoeien'},
      {id: 4, name: 'Boom snoeien'},
    ];
    return {klussen};
  }
}
