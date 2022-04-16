// package: SUA_Microservices_gRPC
// file: Common.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class StringData extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringData.AsObject;
  static toObject(includeInstance: boolean, msg: StringData): StringData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringData;
  static deserializeBinaryFromReader(message: StringData, reader: jspb.BinaryReader): StringData;
}

export namespace StringData {
  export type AsObject = {
    data: string,
  }
}

export class DoubleData extends jspb.Message {
  getData(): number;
  setData(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleData.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleData): DoubleData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleData;
  static deserializeBinaryFromReader(message: DoubleData, reader: jspb.BinaryReader): DoubleData;
}

export namespace DoubleData {
  export type AsObject = {
    data: number,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIsadmin(): boolean;
  setIsadmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    email: string,
    password: string,
    isadmin: boolean,
  }
}

export class Users extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Users.AsObject;
  static toObject(includeInstance: boolean, msg: Users): Users.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Users, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Users;
  static deserializeBinaryFromReader(message: Users, reader: jspb.BinaryReader): Users;
}

export namespace Users {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class Order extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  getOrderedby(): string;
  setOrderedby(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  hasOrdereditems(): boolean;
  clearOrdereditems(): void;
  getOrdereditems(): Items | undefined;
  setOrdereditems(value?: Items): void;

  hasOrderedfrom(): boolean;
  clearOrderedfrom(): void;
  getOrderedfrom(): Supplier | undefined;
  setOrderedfrom(value?: Supplier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderid: string,
    orderedby: string,
    price: number,
    ordereditems?: Items.AsObject,
    orderedfrom?: Supplier.AsObject,
  }
}

export class Orders extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): void;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orders.AsObject;
  static toObject(includeInstance: boolean, msg: Orders): Orders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orders;
  static deserializeBinaryFromReader(message: Orders, reader: jspb.BinaryReader): Orders;
}

export namespace Orders {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

export class Status extends jspb.Message {
  getOnline(): boolean;
  setOnline(value: boolean): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    online: boolean,
    title: string,
  }
}

export class Supplier extends jspb.Message {
  getSupplierid(): string;
  setSupplierid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Supplier.AsObject;
  static toObject(includeInstance: boolean, msg: Supplier): Supplier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Supplier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Supplier;
  static deserializeBinaryFromReader(message: Supplier, reader: jspb.BinaryReader): Supplier;
}

export namespace Supplier {
  export type AsObject = {
    supplierid: string,
    name: string,
    address: string,
    phonenumber: string,
    email: string,
  }
}

export class Suppliers extends jspb.Message {
  clearSuppliersList(): void;
  getSuppliersList(): Array<Supplier>;
  setSuppliersList(value: Array<Supplier>): void;
  addSuppliers(value?: Supplier, index?: number): Supplier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Suppliers.AsObject;
  static toObject(includeInstance: boolean, msg: Suppliers): Suppliers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Suppliers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Suppliers;
  static deserializeBinaryFromReader(message: Suppliers, reader: jspb.BinaryReader): Suppliers;
}

export namespace Suppliers {
  export type AsObject = {
    suppliersList: Array<Supplier.AsObject>,
  }
}

export class Item extends jspb.Message {
  getItemid(): string;
  setItemid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getInstock(): boolean;
  setInstock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    itemid: string,
    name: string,
    model: string,
    instock: boolean,
  }
}

export class Items extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Items.AsObject;
  static toObject(includeInstance: boolean, msg: Items): Items.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Items, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Items;
  static deserializeBinaryFromReader(message: Items, reader: jspb.BinaryReader): Items;
}

export namespace Items {
  export type AsObject = {
    itemsList: Array<Item.AsObject>,
  }
}

