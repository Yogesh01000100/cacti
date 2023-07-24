/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.CredentialProfile
import org.openapitools.client.models.History
import org.openapitools.client.models.PayloadProfile

import com.squareup.moshi.Json

/**
 * 
 *
 * @param messageType 
 * @param sessionID 
 * @param payloadProfile 
 * @param applicationProfile 
 * @param loggingProfile 
 * @param accessControlProfile 
 * @param signature 
 * @param sourceGatewayPubkey 
 * @param sourceGatewayDltSystem 
 * @param recipientGatewayPubkey 
 * @param recipientGatewayDltSystem 
 * @param sequenceNumber 
 * @param sourceBasePath 
 * @param recipientBasePath 
 * @param maxRetries 
 * @param maxTimeout 
 * @param backupGatewaysAllowed 
 * @param recipientLedgerAssetID 
 * @param sourceLedgerAssetID 
 * @param version 
 * @param developerURN 
 * @param credentialProfile 
 * @param escrowType 
 * @param expiryTime 
 * @param multipleClaimsAllowed 
 * @param multipleCancelsAllowed 
 * @param permissions 
 * @param origin 
 * @param destination 
 * @param subsequentCalls 
 * @param histories 
 */


data class TransferInitializationV1Request (

    @Json(name = "messageType")
    val messageType: kotlin.String,

    @Json(name = "sessionID")
    val sessionID: kotlin.String,

    @Json(name = "payloadProfile")
    val payloadProfile: PayloadProfile,

    @Json(name = "applicationProfile")
    val applicationProfile: kotlin.String,

    @Json(name = "loggingProfile")
    val loggingProfile: kotlin.String,

    @Json(name = "accessControlProfile")
    val accessControlProfile: kotlin.String,

    @Json(name = "signature")
    val signature: kotlin.String,

    @Json(name = "sourceGatewayPubkey")
    val sourceGatewayPubkey: kotlin.String,

    @Json(name = "sourceGatewayDltSystem")
    val sourceGatewayDltSystem: kotlin.String,

    @Json(name = "recipientGatewayPubkey")
    val recipientGatewayPubkey: kotlin.String,

    @Json(name = "recipientGatewayDltSystem")
    val recipientGatewayDltSystem: kotlin.String,

    @Json(name = "sequenceNumber")
    val sequenceNumber: kotlin.Int,

    @Json(name = "sourceBasePath")
    val sourceBasePath: kotlin.String,

    @Json(name = "recipientBasePath")
    val recipientBasePath: kotlin.String,

    @Json(name = "maxRetries")
    val maxRetries: java.math.BigDecimal,

    @Json(name = "maxTimeout")
    val maxTimeout: java.math.BigDecimal,

    @Json(name = "backupGatewaysAllowed")
    val backupGatewaysAllowed: kotlin.collections.List<kotlin.String>,

    @Json(name = "recipientLedgerAssetID")
    val recipientLedgerAssetID: kotlin.String,

    @Json(name = "sourceLedgerAssetID")
    val sourceLedgerAssetID: kotlin.String,

    @Json(name = "version")
    val version: kotlin.String? = null,

    @Json(name = "developerURN")
    val developerURN: kotlin.String? = null,

    @Json(name = "credentialProfile")
    val credentialProfile: CredentialProfile? = null,

    @Json(name = "escrowType")
    val escrowType: TransferInitializationV1Request.EscrowType? = null,

    @Json(name = "expiryTime")
    val expiryTime: kotlin.String? = null,

    @Json(name = "multipleClaimsAllowed")
    val multipleClaimsAllowed: kotlin.Boolean? = null,

    @Json(name = "multipleCancelsAllowed")
    val multipleCancelsAllowed: kotlin.Boolean? = null,

    @Json(name = "permissions")
    val permissions: kotlin.Any? = null,

    @Json(name = "origin")
    val origin: kotlin.String? = null,

    @Json(name = "destination")
    val destination: kotlin.String? = null,

    @Json(name = "subsequentCalls")
    val subsequentCalls: kotlin.Any? = null,

    @Json(name = "histories")
    val histories: kotlin.collections.List<History>? = null

) {

    /**
     * 
     *
     * Values: fAUCET,tIMELOCK,hASHLOCK,hASHTIMELOCK,mULTICLAIMPC,dESTROY,bURN
     */
    enum class EscrowType(val value: kotlin.String) {
        @Json(name = "FAUCET") fAUCET("FAUCET"),
        @Json(name = "TIMELOCK") tIMELOCK("TIMELOCK"),
        @Json(name = "HASHLOCK") hASHLOCK("HASHLOCK"),
        @Json(name = "HASHTIMELOCK") hASHTIMELOCK("HASHTIMELOCK"),
        @Json(name = "MULTICLAIMPC") mULTICLAIMPC("MULTICLAIMPC"),
        @Json(name = "DESTROY") dESTROY("DESTROY"),
        @Json(name = "BURN") bURN("BURN");
    }
}
