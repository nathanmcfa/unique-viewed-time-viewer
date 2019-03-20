import { UniqueViewedTime, UniqueViewedTimeSegment, createUVT } from './unique-viewed-time';
import vfData from '../../../assets/data/viewed-fragment.data.json';
import videoData from '../../../assets/data/video.data.json';

describe('UniqueViewedTime', () => {

	describe('createUVT', () => {

		it('should create a UniqueViewedTime', () => {
			const uvt: UniqueViewedTime = createUVT(videoData[0], [vfData[0], vfData[1], vfData[2]]);

			expect(uvt.totalMsec).toEqual(620);
			expect(uvt.segments.length).toEqual(2);
			expect(uvt.segments.length).toEqual(2);
		});

	});

});
