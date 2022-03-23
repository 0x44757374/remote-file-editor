import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RemoteEditorServiceClient as _remoteeditor_RemoteEditorServiceClient, RemoteEditorServiceDefinition as _remoteeditor_RemoteEditorServiceDefinition } from './remoteeditor/RemoteEditorService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  remoteeditor: {
    File: MessageTypeDefinition
    RemoteEditorService: SubtypeConstructor<typeof grpc.Client, _remoteeditor_RemoteEditorServiceClient> & { service: _remoteeditor_RemoteEditorServiceDefinition }
    Status: EnumTypeDefinition
    WatchFileRequest: MessageTypeDefinition
    WriteFileRequest: MessageTypeDefinition
    WriteStatus: MessageTypeDefinition
  }
}

