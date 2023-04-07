import { Create as CreateEvent } from "../generated/TimeswapV2OptionFactory/TimeswapV2OptionFactory"
import { Create } from "../generated/optionFactorySchema"
import { DataSourceContext } from "@graphprotocol/graph-ts"

export function handleCreate(event: CreateEvent): void {
  let entity = new Create(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.optionPair = event.params.optionPair

  let context = new DataSourceContext();
  context.setString(`option-pair-${event.params.token0.toString()}-${event.params.token1.toString()}`, event.params.optionPair.toString());

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
