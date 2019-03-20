import { Video } from './video';
import { ViewedFragment } from './viewed-fragment';

export interface UniqueViewedTime {
	video: Video;
	viewedFragments: ViewedFragment[];
	totalMsec: number;
	segments: UniqueViewedTimeSegment[];
}

export interface UniqueViewedTimeSegment {
	startMsec: number;
	endMsec: number;
	fragments: ViewedFragment[];
}

export const createUVT = (video: Video, viewedFragments: ViewedFragment[]): UniqueViewedTime => {
	const uvt: UniqueViewedTime = {
		video: video,
		viewedFragments: viewedFragments,
		totalMsec: 0,
		segments: setUVTSegments(viewedFragments)
	}
	uvt.totalMsec = setUVTMsec(uvt.segments);
	return uvt;
}

function setUVTSegments (viewedFragments: ViewedFragment[]): UniqueViewedTimeSegment[] {
	let segments: UniqueViewedTimeSegment[] = [];

	let sortedFragments = viewedFragments.sort((a, b) => a.startMsec - b.startMsec);

	sortedFragments.forEach((fragment) => {
		if (segments.length === 0) {
			segments.push({
				startMsec: fragment.startMsec,
				endMsec: fragment.endMsec,
				fragments:[fragment]});
		} else if (isUnique(fragment, sortedFragments)) {
			segments.push({
				startMsec: fragment.startMsec,
				endMsec: fragment.endMsec,
				fragments:[fragment]});
		}	else {
			segments = setOverlap(fragment, segments);
		}
	});

	return segments;
};

function setUVTMsec (segments: UniqueViewedTimeSegment[]): number {
	let totalMsec = 0;
	segments.forEach((segment) => {
		totalMsec += segment.endMsec - segment.startMsec;
	});
	return totalMsec;
}

function setOverlap (viewedFragment: ViewedFragment, segments: UniqueViewedTimeSegment[]): UniqueViewedTimeSegment[] {
	segments.forEach((seg) => {
		let diff = false;
		if (seg.startMsec >= viewedFragment.startMsec) {
			diff = true;
			seg.startMsec = viewedFragment.startMsec;
		}
		if (seg.endMsec <= viewedFragment.endMsec) {
			diff = true;
			seg.endMsec = viewedFragment.endMsec;
		}
		if (diff) {
			seg.fragments.push(viewedFragment);
		}
	});

	return segments;
}

function isUnique (viewedFragment: ViewedFragment, fragments: ViewedFragment[]): boolean {
	let filteredFragments = fragments.filter((fragment) => {
		return fragment.startMsec <= viewedFragment.startMsec && fragment.endMsec >= viewedFragment.startMsec && fragment.id !== viewedFragment.id;
	});

	return (filteredFragments.length > 0) ? false : true;
}
