// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Create extends ethereum.Event {
  get params(): Create__Params {
    return new Create__Params(this);
  }
}

export class Create__Params {
  _event: Create;

  constructor(event: Create) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token0(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get optionPair(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TimeswapV2OptionFactory__parameterResult {
  value0: Address;
  value1: Address;
  value2: Address;

  constructor(value0: Address, value1: Address, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }

  getOptionFactory(): Address {
    return this.value0;
  }

  getToken0(): Address {
    return this.value1;
  }

  getToken1(): Address {
    return this.value2;
  }
}

export class TimeswapV2OptionFactory extends ethereum.SmartContract {
  static bind(address: Address): TimeswapV2OptionFactory {
    return new TimeswapV2OptionFactory("TimeswapV2OptionFactory", address);
  }

  create(token0: Address, token1: Address): Address {
    let result = super.call("create", "create(address,address):(address)", [
      ethereum.Value.fromAddress(token0),
      ethereum.Value.fromAddress(token1)
    ]);

    return result[0].toAddress();
  }

  try_create(token0: Address, token1: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("create", "create(address,address):(address)", [
      ethereum.Value.fromAddress(token0),
      ethereum.Value.fromAddress(token1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  get(token0: Address, token1: Address): Address {
    let result = super.call("get", "get(address,address):(address)", [
      ethereum.Value.fromAddress(token0),
      ethereum.Value.fromAddress(token1)
    ]);

    return result[0].toAddress();
  }

  try_get(token0: Address, token1: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("get", "get(address,address):(address)", [
      ethereum.Value.fromAddress(token0),
      ethereum.Value.fromAddress(token1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getByIndex(param0: BigInt): Address {
    let result = super.call("getByIndex", "getByIndex(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_getByIndex(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("getByIndex", "getByIndex(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  numberOfPairs(): BigInt {
    let result = super.call("numberOfPairs", "numberOfPairs():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numberOfPairs(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberOfPairs",
      "numberOfPairs():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  parameter(): TimeswapV2OptionFactory__parameterResult {
    let result = super.call(
      "parameter",
      "parameter():(address,address,address)",
      []
    );

    return new TimeswapV2OptionFactory__parameterResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress()
    );
  }

  try_parameter(): ethereum.CallResult<
    TimeswapV2OptionFactory__parameterResult
  > {
    let result = super.tryCall(
      "parameter",
      "parameter():(address,address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TimeswapV2OptionFactory__parameterResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress()
      )
    );
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get token0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get optionPair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
