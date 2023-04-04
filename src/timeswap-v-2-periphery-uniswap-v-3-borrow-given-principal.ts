import { BorrowGivenPrincipal as BorrowGivenPrincipalEvent } from "../generated/TimeswapV2PeripheryUniswapV3BorrowGivenPrincipal/TimeswapV2PeripheryUniswapV3BorrowGivenPrincipal"
import { BorrowGivenPrincipal } from "../generated/borrowSchema"

export function handleBorrowGivenPrincipal(
  event: BorrowGivenPrincipalEvent
): void {
  let entity = new BorrowGivenPrincipal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.strike = event.params.strike
  entity.maturity = event.params.maturity
  entity.uniswapV3Fee = event.params.uniswapV3Fee
  entity.from = event.params.from
  entity.tokenTo = event.params.tokenTo
  entity.longTo = event.params.longTo
  entity.isToken0 = event.params.isToken0
  entity.isLong0 = event.params.isLong0
  entity.tokenAmount = event.params.tokenAmount
  entity.positionAmount = event.params.positionAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}