import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataThreadHdr } from '../../../pojo/pojo-import';

export const getAllBookmark = createSelector(
  createFeatureSelector('thread'),
  (state: { dataBookmark: DataThreadHdr[] }) => state.dataBookmark
);
