import { Injectable } from '@angular/core';
import { ViewedFragment } from '../../classes/model/viewed-fragment';
import vfData from '../../../assets/data/viewed-fragment.data.json';

@Injectable()
export class ViewedFragmentService {

    constructor() {}

    getViewedFragments(): ViewedFragment[] {
      return vfData as ViewedFragment[];
    }

    getViewedFragmentByParent(parent_id: string): ViewedFragment[] {
      return vfData.filter(vf => vf.parent.id === parent_id);
    }

}
