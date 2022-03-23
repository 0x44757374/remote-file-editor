// Original file: proto/remote_editor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { File as _remoteeditor_File, File__Output as _remoteeditor_File__Output } from '../remoteeditor/File';
import type { WatchFileRequest as _remoteeditor_WatchFileRequest, WatchFileRequest__Output as _remoteeditor_WatchFileRequest__Output } from '../remoteeditor/WatchFileRequest';
import type { WriteFileRequest as _remoteeditor_WriteFileRequest, WriteFileRequest__Output as _remoteeditor_WriteFileRequest__Output } from '../remoteeditor/WriteFileRequest';
import type { WriteStatus as _remoteeditor_WriteStatus, WriteStatus__Output as _remoteeditor_WriteStatus__Output } from '../remoteeditor/WriteStatus';

export interface RemoteEditorServiceClient extends grpc.Client {
  WatchFile(argument: _remoteeditor_WatchFileRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_remoteeditor_File__Output>;
  WatchFile(argument: _remoteeditor_WatchFileRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_remoteeditor_File__Output>;
  watchFile(argument: _remoteeditor_WatchFileRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_remoteeditor_File__Output>;
  watchFile(argument: _remoteeditor_WatchFileRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_remoteeditor_File__Output>;
  
  WriteFile(argument: _remoteeditor_WriteFileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  WriteFile(argument: _remoteeditor_WriteFileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  WriteFile(argument: _remoteeditor_WriteFileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  WriteFile(argument: _remoteeditor_WriteFileRequest, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  writeFile(argument: _remoteeditor_WriteFileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  writeFile(argument: _remoteeditor_WriteFileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  writeFile(argument: _remoteeditor_WriteFileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  writeFile(argument: _remoteeditor_WriteFileRequest, callback: grpc.requestCallback<_remoteeditor_WriteStatus__Output>): grpc.ClientUnaryCall;
  
}

export interface RemoteEditorServiceHandlers extends grpc.UntypedServiceImplementation {
  WatchFile: grpc.handleServerStreamingCall<_remoteeditor_WatchFileRequest__Output, _remoteeditor_File>;
  
  WriteFile: grpc.handleUnaryCall<_remoteeditor_WriteFileRequest__Output, _remoteeditor_WriteStatus>;
  
}

export interface RemoteEditorServiceDefinition extends grpc.ServiceDefinition {
  WatchFile: MethodDefinition<_remoteeditor_WatchFileRequest, _remoteeditor_File, _remoteeditor_WatchFileRequest__Output, _remoteeditor_File__Output>
  WriteFile: MethodDefinition<_remoteeditor_WriteFileRequest, _remoteeditor_WriteStatus, _remoteeditor_WriteFileRequest__Output, _remoteeditor_WriteStatus__Output>
}
