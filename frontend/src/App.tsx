import React from 'react';
import './App.css';
import {grpc} from "@improbable-eng/grpc-web";
import {AuthenticationAPI} from './grpc/Authentication_pb_service'
import {Empty} from './grpc/Common_pb'
import { v4 as uuidv4 } from 'uuid';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={
                    () => {
                        const meta = new grpc.Metadata();
                        meta.set("correlationId", uuidv4());
                        console.log("test");
                        grpc.invoke(AuthenticationAPI.Ping, {
                            request: new Empty(),
                            metadata: meta,
                            host: 'http://localhost:8002',
                            onHeaders: (headers: grpc.Metadata) => {
                                console.log(headers);
                            },
                            onMessage: (message: Empty) => {
                                console.log(message);
                            },
                            onEnd: (code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
                                console.log(code, msg, trailers);
                            }
                        });
                    }
                }>
                    Ping
                </button>
            </header>
        </div>
    );
}

export default App;
