// package: SUA_Microservices_gRPC
// file: Authentication.proto

import * as Authentication_pb from "./Authentication_pb";
import * as Common_pb from "./Common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticationAPIPing = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.Empty;
  readonly responseType: typeof Common_pb.Status;
};

type AuthenticationAPILogin = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Authentication_pb.UserLogin;
  readonly responseType: typeof Authentication_pb.Token;
};

type AuthenticationAPIRegister = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Authentication_pb.UserLogin;
  readonly responseType: typeof Authentication_pb.Token;
};

type AuthenticationAPIAddUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.User;
  readonly responseType: typeof Common_pb.User;
};

type AuthenticationAPIGetUsers = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.Empty;
  readonly responseType: typeof Common_pb.Users;
};

type AuthenticationAPIGetUserById = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.StringData;
  readonly responseType: typeof Common_pb.User;
};

type AuthenticationAPIEditUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.User;
  readonly responseType: typeof Common_pb.User;
};

type AuthenticationAPIDeleteUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Common_pb.StringData;
  readonly responseType: typeof Common_pb.StringData;
};

export class AuthenticationAPI {
  static readonly serviceName: string;
  static readonly Ping: AuthenticationAPIPing;
  static readonly Login: AuthenticationAPILogin;
  static readonly Register: AuthenticationAPIRegister;
  static readonly AddUser: AuthenticationAPIAddUser;
  static readonly GetUsers: AuthenticationAPIGetUsers;
  static readonly GetUserById: AuthenticationAPIGetUserById;
  static readonly EditUser: AuthenticationAPIEditUser;
  static readonly DeleteUser: AuthenticationAPIDeleteUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthenticationAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: Common_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.Status|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: Common_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: Common_pb.Status|null) => void
  ): UnaryResponse;
  login(
    requestMessage: Authentication_pb.UserLogin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Authentication_pb.Token|null) => void
  ): UnaryResponse;
  login(
    requestMessage: Authentication_pb.UserLogin,
    callback: (error: ServiceError|null, responseMessage: Authentication_pb.Token|null) => void
  ): UnaryResponse;
  register(
    requestMessage: Authentication_pb.UserLogin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Authentication_pb.Token|null) => void
  ): UnaryResponse;
  register(
    requestMessage: Authentication_pb.UserLogin,
    callback: (error: ServiceError|null, responseMessage: Authentication_pb.Token|null) => void
  ): UnaryResponse;
  addUser(
    requestMessage: Common_pb.User,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  addUser(
    requestMessage: Common_pb.User,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: Common_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.Users|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: Common_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: Common_pb.Users|null) => void
  ): UnaryResponse;
  getUserById(
    requestMessage: Common_pb.StringData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  getUserById(
    requestMessage: Common_pb.StringData,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  editUser(
    requestMessage: Common_pb.User,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  editUser(
    requestMessage: Common_pb.User,
    callback: (error: ServiceError|null, responseMessage: Common_pb.User|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: Common_pb.StringData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Common_pb.StringData|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: Common_pb.StringData,
    callback: (error: ServiceError|null, responseMessage: Common_pb.StringData|null) => void
  ): UnaryResponse;
}

