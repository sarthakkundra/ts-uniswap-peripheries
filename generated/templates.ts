// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class TimeswapV2PeripheryUniswapV3BorrowGivenPrincipal extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create(
      "TimeswapV2PeripheryUniswapV3BorrowGivenPrincipal",
      [address.toHex()]
    );
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "TimeswapV2PeripheryUniswapV3BorrowGivenPrincipal",
      [address.toHex()],
      context
    );
  }
}