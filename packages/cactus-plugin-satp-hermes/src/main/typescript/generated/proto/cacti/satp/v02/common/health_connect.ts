// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,js_import_style=module"
// @generated from file cacti/satp/v02/common/health.proto (package cacti.satp.v02.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CheckHealthRequest, CheckHealthResponse } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service cacti.satp.v02.common.HealthService
 */
export const HealthService = {
  typeName: "cacti.satp.v02.common.HealthService",
  methods: {
    /**
     * @generated from rpc cacti.satp.v02.common.HealthService.CheckHealth
     */
    checkHealth: {
      name: "CheckHealth",
      I: CheckHealthRequest,
      O: CheckHealthResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

