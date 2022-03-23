import * as fs from 'fs';
import {config} from 'dotenv';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './proto/remote_editor';
config();
const PROTO_PATH = `${__dirname}/proto/remote_editor.proto`;

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const remoteEditor = ((grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType).remoteeditor;

const server = new grpc.Server();
server.bindAsync('0.0.0.0:7612', grpc.ServerCredentials.createInsecure(), ()=>{
	server.start();
});

server.addService(remoteEditor.RemoteEditorService.service, {
	watchFile: (call:any)=>{
		console.log("File watcher requested");
		const filePath = `${__dirname}/${call.request.path}`;
		fs.watchFile(filePath,
		{
			interval:50
		},
		()=>{
			call.write({
				content:fs.readFileSync(call.request.path),
				path: call.request.path
			});
		});
	},
	writeFile: (call:any, callback:any)=>{
		const filePath = `${__dirname}/${call.request.path}`;
		fs.writeFileSync(filePath, call.request.content);
		const response = {
			path:call.request.path,
			status: "OK"
		};
		callback(null, 	response);
	},
});
