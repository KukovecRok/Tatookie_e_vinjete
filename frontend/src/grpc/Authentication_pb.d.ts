// package: SUA_Microservices_gRPC
// file: Authentication.proto

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";

export class UserLogin extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogin.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogin): UserLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogin;
  static deserializeBinaryFromReader(message: UserLogin, reader: jspb.BinaryReader): UserLogin;
}

export namespace UserLogin {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class Token extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: string,
  }
}

