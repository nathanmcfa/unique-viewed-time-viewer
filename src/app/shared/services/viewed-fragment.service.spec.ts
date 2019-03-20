import { TestBed } from '@angular/core/testing';
import { ViewedFragmentService } from './viewed-fragment.service';

describe('ViewedFragment', () => {

	let viewedFragmentService: ViewedFragmentService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ViewedFragmentService
			]
		});
		viewedFragmentService = TestBed.get(ViewedFragmentService);
	});

	it('should be created', () => {
		const service: ViewedFragmentService = TestBed.get(ViewedFragmentService);
		expect(service).toBeTruthy();
	});

	describe('getViewedFragments', () => {

		it(`should get all viewed fragments`, () => {
			const fragments = viewedFragmentService.getViewedFragments();

			expect(fragments.length).toBe(12);
		});

	});

	describe('getViewedFragmentByParent', () => {

		it(`should get only the viewed fragments for the partent requested`, () => {
			const fragments = viewedFragmentService.getViewedFragmentByParent('f5044ac6-c6ac-458d-8489-f8afbdaa7b7a');

			expect(fragments.length).toBe(5);
		});

	});

});
