import { createAction, props } from '@ngrx/store';
import { DataThreadHdr } from 'src/app/pojo/pojo-import';

enum BookmarkAction {
  BOOKMARK_ACTION = '[ADD Action]',
  UNBOOKMARK_ACTION = '[DELETE Action]',
  LOADBOOKMARK_ACTION = '[LOAD Action]',
}

export const loadBookmarkAction = createAction(
  BookmarkAction.LOADBOOKMARK_ACTION,
  props<{ payload: DataThreadHdr[] }>()
);

export const bookmarkAction = createAction(
  BookmarkAction.BOOKMARK_ACTION,
  props<{ payload: DataThreadHdr }>()
);

export const unbookmarkAction = createAction(
  BookmarkAction.UNBOOKMARK_ACTION,
  props<{ payload: string }>()
);
