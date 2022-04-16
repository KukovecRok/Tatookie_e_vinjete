import {grpc} from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

// Import code-generated data structures.

import {AuthenticationAPI} from "./generated/Authentication_pb_service"
import {AuthenticationAPIPing} from "./generated/Authentication_pb_service"
import {AuthenticationAPIClient} from "./generated/Authentication_pb_service"
import {UserLogin} from "./generated/Authentication_pb"
import {Token} from "./generated/Authentication_pb"

import {Status} from "./generated/Common_pb"

const getStatus = new Status();

grpc.setDefaultTransport(NodeHttpTransport());

const host = "0.0.0.0:8002"; // 8002 - gRPC-web; 8001 gRPC
//getStatus.setOnline(true)
//getStatus.setTitle('Authentication')

grpc.invoke(AuthenticationAPI.Ping, {
    request: getStatus,
    host: host,
    onEnd: res => {
        //const { status, statusMessage, headers, message, trailers } = res;
        /*
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
            console.log("all ok. got ping: ", message.toObject());
        }
        */
        console.log(res.toString());
    }
});