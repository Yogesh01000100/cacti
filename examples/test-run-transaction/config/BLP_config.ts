/*
 * Copyright 2021 Hyperledger Cactus Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * BLP_config.ts
 */

import { BusinessLogicPlugin } from "../../cactus-common-example-server/src/main/typescript/business-logic-plugin/BusinessLogicPlugin";
import { BusinessLogicRunTransaction } from "../BusinessLogicRunTransaction";

export function getTargetBLPInstance(
  businessLogicID: string,
): BusinessLogicPlugin | null {
  switch (businessLogicID) {
    case "j71S9gLN":
      return new BusinessLogicRunTransaction(businessLogicID);
    // case "*******":
    //    return new BusinessLogicX***Trade();
    default:
      return null;
  }
}
