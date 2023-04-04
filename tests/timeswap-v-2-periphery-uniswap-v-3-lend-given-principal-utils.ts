import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { LendGivenPrincipal } from "../generated/TimeswapV2PeripheryUniswapV3LendGivenPrincipal/TimeswapV2PeripheryUniswapV3LendGivenPrincipal"

export function createLendGivenPrincipalEvent(
  token0: Address,
  token1: Address,
  strike: BigInt,
  maturity: BigInt,
  uniswapV3Fee: i32,
  from: Address,
  to: Address,
  isToken0: boolean,
  tokenAmount: BigInt,
  positionAmount: BigInt
): LendGivenPrincipal {
  let lendGivenPrincipalEvent = changetype<LendGivenPrincipal>(newMockEvent())

  lendGivenPrincipalEvent.parameters = new Array()

  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("strike", ethereum.Value.fromUnsignedBigInt(strike))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam(
      "maturity",
      ethereum.Value.fromUnsignedBigInt(maturity)
    )
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam(
      "uniswapV3Fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(uniswapV3Fee))
    )
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam("isToken0", ethereum.Value.fromBoolean(isToken0))
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  lendGivenPrincipalEvent.parameters.push(
    new ethereum.EventParam(
      "positionAmount",
      ethereum.Value.fromUnsignedBigInt(positionAmount)
    )
  )

  return lendGivenPrincipalEvent
}
