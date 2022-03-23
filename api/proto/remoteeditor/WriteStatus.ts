// Original file: proto/remote_editor.proto

import type { Status as _remoteeditor_Status } from '../remoteeditor/Status';

export interface WriteStatus {
  'path'?: (string);
  'status'?: (_remoteeditor_Status | keyof typeof _remoteeditor_Status);
}

export interface WriteStatus__Output {
  'path': (string);
  'status': (keyof typeof _remoteeditor_Status);
}
