import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { LendGivenPrincipal } from "../generated/schema"
import { LendGivenPrincipal as LendGivenPrincipalEvent } from "../generated/TimeswapV2PeripheryUniswapV3LendGivenPrincipal/TimeswapV2PeripheryUniswapV3LendGivenPrincipal"
import { handleLendGivenPrincipal } from "../src/timeswap-v-2-periphery-uniswap-v-3-lend-given-principal"
import { createLendGivenPrincipalEvent } from "./timeswap-v-2-periphery-uniswap-v-3-lend-given-principal-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let strike = BigInt.fromI32(234)
    let maturity = BigInt.fromI32(234)
    let uniswapV3Fee = 123
    let from = Address.fromString("0x0000000000000000000000000000000000000001")
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let isToken0 = "boolean Not implemented"
    let tokenAmount = BigInt.fromI32(234)
    let positionAmount = BigInt.fromI32(234)
    let newLendGivenPrincipalEvent = createLendGivenPrincipalEvent(
      token0,
      token1,
      strike,
      maturity,
      uniswapV3Fee,
      from,
      to,
      isToken0,
      tokenAmount,
      positionAmount
    )
    handleLendGivenPrincipal(newLendGivenPrincipalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LendGivenPrincipal created and stored", () => {
    assert.entityCount("LendGivenPrincipal", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token0",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token1",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "strike",
      "234"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maturity",
      "234"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "uniswapV3Fee",
      "123"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isToken0",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAmount",
      "234"
    )
    assert.fieldEquals(
      "LendGivenPrincipal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "positionAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
