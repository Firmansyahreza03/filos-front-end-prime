import { createReducer, on } from '@ngrx/store';
import { DataThreadHdr } from 'src/app/pojo/pojo-import';
import { bookmarkAction, loadBookmarkAction, unbookmarkAction } from './home-member.action';

const dataBookmark: DataThreadHdr[] = [];

const initState = {
  dataBookmark, 
};

export const threadReducer = createReducer(
  initState,
  on(loadBookmarkAction, (state, { payload }) => {
    return {
      ...state,
      dataBookmark: payload,
    };
  }),
  
  on(bookmarkAction, (state, { payload }) => {
    const newData = [...state.dataBookmark, payload];
    return {
      ...state,
      dataBookmark: newData,
    };
  }),
  
  on(unbookmarkAction, (state, { payload }) => {
    const newData = state.dataBookmark.filter((dataBookmark) => dataBookmark.id != payload);
    return {
        ...state,
        dataBookmark: newData,
    }
  }),
);
