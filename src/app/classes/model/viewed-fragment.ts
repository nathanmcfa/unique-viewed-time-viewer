export class ViewedFragment {
	id: string;
	startMsec: number;
	endMsec: number;
	parent: ViewedFragmentParent;
	user: ViewedFragmentUser;
}

export class ViewedFragmentUser {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
}

export class ViewedFragmentParent {
	id: string;
	trtMsec: number;
}
