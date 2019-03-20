import { UniqueViewedTime, UniqueViewedTimeSegment, createUVT } from './unique-viewed-time';
import vfData from '../../../assets/data/viewed-fragment.data.json';
import videoData from '../../../assets/data/video.data.json';

describe('UniqueViewedTime', () => {

	describe('createUVT', () => {

		it('should create a UniqueViewedTime', () => {
			const uvt: UniqueViewedTime = createUVT(videoData[0], [vfData[0], vfData[1], vfData[2]]);

			expect(uvt.totalMsec).toEqual(620);
			expect(uvt.segments.length).toEqual(2);
			expect(uvt.segments[0].startMsec).toEqual(0);
			expect(uvt.segments[0].endMsec).toEqual(120);
			expect(uvt.segments[1].startMsec).toEqual(500);
			expect(uvt.segments[1].endMsec).toEqual(1000);
		});

		it('should create a UniqueViewedTime when there are many overlaps', () => {
			const uvt: UniqueViewedTime = createUVT(videoData[2], [vfData[3], vfData[4], vfData[5], vfData[6], vfData[7]]);

			expect(uvt.totalMsec).toEqual(2129);
			expect(uvt.segments.length).toEqual(2);
			expect(uvt.segments[0].startMsec).toEqual(0);
			expect(uvt.segments[0].endMsec).toEqual(2000);
			expect(uvt.segments[1].startMsec).toEqual(3700);
			expect(uvt.segments[1].endMsec).toEqual(3829);
		});

	});

});
