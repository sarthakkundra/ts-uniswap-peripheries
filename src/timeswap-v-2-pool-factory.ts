import {
  AcceptOwner as AcceptOwnerEvent,
  Create as CreateEvent,
  SetOwner as SetOwnerEvent
} from "../generated/TimeswapV2PoolFactory/TimeswapV2PoolFactory"
import { AcceptOwner, Create, SetOwner } from "../generated/poolFactorySchema"
import { dataSource, DataSourceContext } from "@graphprotocol/graph-ts"

export function handleAcceptOwner(event: AcceptOwnerEvent): void {
  let entity = new AcceptOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreate(event: CreateEvent): void {
  let entity = new Create(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.option = event.params.option
  entity.poolPair = event.params.poolPair

  let context = new DataSourceContext();
  context.setString(`${event.params.option.toString()}`, event.params.poolPair.toString());

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetOwner(event: SetOwnerEvent): void {
  let entity = new SetOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
