import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppMocksService {
	createDb() {
		const employees = [
			{
				id: 1,
				name: 'Winston',
				company: 'Ow',
				age: 30,
				birthday: '20/09/1987',
				favoriteColor: 'white',
				project: 'Gibraltar'
			},
			{
				id: 2,
				name: 'Tracer',
				company: 'Ow',
				age: 25,
				birthday: '',
				favoriteColor: 'yellow',
				project: 'London'
			},
			{
				id: 3,
				name: 'Rein',
				company: 'AlemaniaCP',
				age: 40,
				birthday: '',
				favoriteColor: 'black',
				project: 'Ilios'
			},
			{
				id: 4,
				name: 'Zenny',
				company: 'Neptune',
				age: 45,
				birthday: '',
				favoriteColor: 'purple',
				project: 'Nepal'
			}
		];
		const projects = [
			{ id: 1, name: 'Gibraltar', teamSize: 4, clientName: 'UK' },
			{ id: 2, name: 'London', teamSize: 3, clientName: 'NetSpain' },
			{ id: 3, name: 'Ilios', teamSize: 3, clientName: 'PitHole' },
			{ id: 4, name: 'Nepal', teamSize: 2, clientName: 'Banglad' }
		];
		return { employees, projects };
	}
}
