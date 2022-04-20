// package: SUA_Microservices_gRPC
// file: Authentication.proto

var Authentication_pb = require("./Authentication_pb");
var Common_pb = require("./Common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticationAPI = (function () {
  function AuthenticationAPI() {}
  AuthenticationAPI.serviceName = "SUA_Microservices_gRPC.AuthenticationAPI";
  return AuthenticationAPI;
}());

AuthenticationAPI.Ping = {
  methodName: "Ping",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.Empty,
  responseType: Common_pb.Status
};

AuthenticationAPI.Login = {
  methodName: "Login",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Authentication_pb.UserLogin,
  responseType: Authentication_pb.Token
};

AuthenticationAPI.Register = {
  methodName: "Register",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Authentication_pb.UserLogin,
  responseType: Authentication_pb.Token
};

AuthenticationAPI.AddUser = {
  methodName: "AddUser",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.User,
  responseType: Common_pb.User
};

AuthenticationAPI.GetUsers = {
  methodName: "GetUsers",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.Empty,
  responseType: Common_pb.Users
};

AuthenticationAPI.GetUserById = {
  methodName: "GetUserById",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.StringData,
  responseType: Common_pb.User
};

AuthenticationAPI.EditUser = {
  methodName: "EditUser",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.User,
  responseType: Common_pb.User
};

AuthenticationAPI.DeleteUser = {
  methodName: "DeleteUser",
  service: AuthenticationAPI,
  requestStream: false,
  responseStream: false,
  requestType: Common_pb.StringData,
  responseType: Common_pb.StringData
};

exports.AuthenticationAPI = AuthenticationAPI;

function AuthenticationAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticationAPIClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.Ping, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.Login, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.Register, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.addUser = function addUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.AddUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.getUsers = function getUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.GetUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.getUserById = function getUserById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.GetUserById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.editUser = function editUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.EditUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticationAPIClient.prototype.deleteUser = function deleteUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationAPI.DeleteUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthenticationAPIClient = AuthenticationAPIClient;

