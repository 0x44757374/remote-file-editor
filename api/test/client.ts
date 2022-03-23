import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from '../proto/remote_editor';

const PROTO_PATH = path.resolve(__dirname, '../proto/remote_editor.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const remoteEditor = ((grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType).remoteeditor;
const client = new remoteEditor.RemoteEditorService(`localhost:7612`, grpc.credentials.createInsecure());

const call = client.watchFile({path:"test.txt"});
call.on('data', ({path, content})=>{
	console.log(`Buffer update for ${path}`);
	console.log(content);
});

client.writeFile({path:"test.txt", content:"WOO"}, ()=>{});
