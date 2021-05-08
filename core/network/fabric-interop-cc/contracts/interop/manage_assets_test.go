/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package main

import (
	"encoding/json"
	"fmt"
	"testing"
	"crypto/sha1"
	"encoding/base64"

	"github.com/stretchr/testify/require"
	"github.com/golang/protobuf/proto"
	"github.com/hyperledger-labs/weaver-dlt-interoperability/core/network/fabric-interop-cc/contracts/interop/protos-go/common"
)

// function to generate "SHA256" hash for a given preimage
func generateHash(preimage string) string {
	hasher := sha1.New()
	hasher.Write([]byte(preimage))
	shaHash := hasher.Sum(nil)
	fmt.Println("shaHash:", string(shaHash))
	//shaBase64 := base64.URLEncoding.EncodeToString(shaHash)
	shaBase64 := base64.StdEncoding.EncodeToString(shaHash)
	fmt.Println("Hash for the preimage ", preimage, " is ", shaBase64)
	return shaBase64
}

func TestLockAsset(t *testing.T) {
	ctx, _, interopcc := prepMockStub()

	assetType := "bond"
	assetId := "A001"
	recipient := "Bob"
	locker := "Alice"
	hash := []byte("j8r484r484")

	lockInfoHTLC := &common.AssetLockHTLC {
		Hash: hash,
		ExpiryTimeSecs: 0,
	}
	lockInfoBytes, _ := proto.Marshal(lockInfoHTLC)

	assetAgreement := &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		Recipient: recipient,
		Locker: locker,
	}
	assetAgreementBytes, _ := proto.Marshal(assetAgreement)

	// Test success with asset agreement specified properly
	err := interopcc.LockAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
}

func TestUnLockAsset(t *testing.T) {
	ctx, chaincodeStub, interopcc := prepMockStub()

	assetType := "bond"
	assetId := "A001"
	recipient := "Bob"
	locker := "Alice"
	hash := []byte("j8r484r484")

	lockInfoHTLC := &common.AssetLockHTLC {
		Hash: hash,
		ExpiryTimeSecs: 0,
	}
	lockInfoBytes, _ := proto.Marshal(lockInfoHTLC)

	assetAgreement := &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		Recipient: recipient,
		Locker: locker,
	}
	assetAgreementBytes, _ := proto.Marshal(assetAgreement)

	// Lock asset as per the agreement specified
	err := interopcc.LockAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
	fmt.Println("Completed locking as asset. Proceed to test unlock asset.")

	assetLockVal := AssetLockValue{Locker: locker, Recipient: recipient}
	assetLockValBytes, _ := json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)

	// Test success with asset agreement specified properly
	err = interopcc.UnLockAsset(ctx, string(assetAgreementBytes))
	require.NoError(t, err)
}

func TestIsAssetLocked(t *testing.T) {
	ctx, chaincodeStub, interopcc := prepMockStub()

	assetType := "bond"
	assetId := "A001"
	recipient := "Bob"
	locker := "Alice"
	hash := []byte("j8r484r484")

	lockInfoHTLC := &common.AssetLockHTLC {
		Hash: hash,
		ExpiryTimeSecs: 0,
	}
	lockInfoBytes, _ := proto.Marshal(lockInfoHTLC)

	assetAgreement := &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		Recipient: recipient,
		Locker: locker,
	}
	assetAgreementBytes, _ := proto.Marshal(assetAgreement)
	// Lock asset as per the agreement specified
	err := interopcc.LockAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
	fmt.Println("Completed locking as asset. Proceed to test if asset is locked or not.")


	assetLockVal := AssetLockValue{Locker: locker, Recipient: "Charlie"}
	assetLockValBytes, _ := json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)
	// Test failure with asset agreement not specified properly
	isAssetLocked, err := interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.Error(t, err)
	require.False(t, isAssetLocked)
	fmt.Println("Test failed as expected with error:", err)


	assetLockVal = AssetLockValue{Locker: locker, Recipient: recipient}
	assetLockValBytes, _ = json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)
	// Test success with asset agreement specified properly
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.NoError(t, err)
	require.True(t, isAssetLocked)
	fmt.Println("Test succeeded as expected since the asset agreement is specified properly.")


	assetLockVal = AssetLockValue{Locker: "Dave", Recipient: recipient}
	assetLockValBytes, _ = json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)
	// Test failure with asset agreement not specified properly
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.Error(t, err)
	require.False(t, isAssetLocked)
	fmt.Println("Test failed as expected with error:", err)


	assetAgreement = &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		Recipient: recipient,
		// arbitrary locker specification
		Locker: "*",
	}
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	// Test success with asset agreement specified to include arbitrary locker
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.NoError(t, err)
	require.True(t, isAssetLocked)
	fmt.Println("Test succeeded as expected since the asset agreement is specified to include arbitrary locker.")


	assetAgreement = &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		// wrong recipient specification
		Recipient: "Charlie",
		// arbitrary locker specification
		Locker: "*",
	}
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	// Test failure with asset agreement specified to include arbitrary locker and wrong recipient
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.Error(t, err)
	require.False(t, isAssetLocked)
	fmt.Println("Test failed as expected with error:", err)


	assetAgreement = &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		// arbitrary recipient specification
		Recipient: "*",
		Locker: "Dave",
	}
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	// Test success with asset agreement specified to include arbitrary recipient
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.NoError(t, err)
	require.True(t, isAssetLocked)
	fmt.Println("Test succeeded as expected since the asset agreement is specified to include arbitrary recipient.")


	assetAgreement = &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		// arbitrary recipient specification
		Recipient: "*",
		// wrong locker specification
		Locker: "Charlie",
	}
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	// Test failure with asset agreement specified to include arbitrary locker and wrong locker
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.Error(t, err)
	require.False(t, isAssetLocked)
	fmt.Println("Test failed as expected with error:", err)


	assetAgreement = &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		// arbitrary recipient specification
		Recipient: "*",
		// arbitrary locker specification
		Locker: "*",
	}
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	// Test success with asset agreement specified to include arbitrary locker
	isAssetLocked, err = interopcc.IsAssetLocked(ctx, string(assetAgreementBytes))
	require.NoError(t, err)
	require.True(t, isAssetLocked)
	fmt.Println("Test succeeded as expected since the asset agreement is specified to include arbitrary locker and arbitrary recipient.")
}

func TestClaimAsset(t *testing.T) {
	ctx, chaincodeStub, interopcc := prepMockStub()

	assetType := "bond"
	assetId := "A001"
	recipient := "Bob"
	locker := "Alice"
	preimage := "abcd"
	hashBase64 := generateHash(preimage)
	preimageBase64 := base64.StdEncoding.EncodeToString([]byte(preimage))

	lockInfoHTLC := &common.AssetLockHTLC {
		Hash: []byte(hashBase64),
		ExpiryTimeSecs: 300,
	}
	lockInfoBytes, _ := proto.Marshal(lockInfoHTLC)

	assetAgreement := &common.AssetExchangeAgreement {
		Type: assetType,
		Id: assetId,
		Recipient: recipient,
		Locker: locker,
	}
	assetAgreementBytes, _ := proto.Marshal(assetAgreement)

	claimInfo := &common.AssetClaimHTLC {
		HashPreimage: []byte(preimageBase64),
	}
	claimInfoBytes, _ := proto.Marshal(claimInfo)

	// Lock asset as per the agreement specified
	err := interopcc.LockAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
	fmt.Println("Completed locking as asset. Proceed to test claim asset.")

	assetLockVal := AssetLockValue{Locker: locker, Recipient: recipient, Hash: hashBase64, ExpiryTimeSecs: 300}
	assetLockValBytes, _ := json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)

	// Test success with asset agreement specified properly
	err = interopcc.ClaimAsset(ctx, string(assetAgreementBytes), string(claimInfoBytes))
	require.NoError(t, err)
	fmt.Println("Test success as expected since the asset agreement is specified properly.")

	wrongPreimage := "abc"
	wrongPreimageBase64 := base64.StdEncoding.EncodeToString([]byte(wrongPreimage))
	wrongClaimInfo := &common.AssetClaimHTLC {
		HashPreimage: []byte(wrongPreimageBase64),
	}
	wrongClaimInfoBytes, _ := proto.Marshal(wrongClaimInfo)

	// Test failure with claim information not specified properly
	err = interopcc.ClaimAsset(ctx, string(assetAgreementBytes), string(wrongClaimInfoBytes))
	require.Error(t, err)
	fmt.Println("Test failed as expected with error:", err)

	assetAgreement.Locker = "Charlie"
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)

	// Test failure with asset agreement specified not properly
	err = interopcc.ClaimAsset(ctx, string(assetAgreementBytes), string(claimInfoBytes))
	require.Error(t, err)
	fmt.Println("Test failed as expected with error:", err)

	assetAgreement.Locker = locker
	assetAgreement.Id = "A002"
	assetAgreementBytes, _ = proto.Marshal(assetAgreement)
	chaincodeStub.GetStateReturns(nil, nil)

	// Test failure with asset agreement specified not properly
	err = interopcc.ClaimAsset(ctx, string(assetAgreementBytes), string(claimInfoBytes))
	require.Error(t, err)
	fmt.Println("Test failed as expected with error:", err)
}

func TestLockFungibleAsset(t *testing.T) {
	ctx, chaincodeStub, interopcc := prepMockStub()

	assetType := "CBDC"
	numUnits := uint64(10)
	recipient := "Bob"
	locker := "Alice"
	hash := []byte("j8r484r484")

	lockInfoHTLC := &common.AssetLockHTLC {
		Hash: hash,
		ExpiryTimeSecs: 0,
	}
	lockInfoBytes, _ := proto.Marshal(lockInfoHTLC)

	assetAgreement := &common.FungibleAssetExchangeAgreement {
		Type: assetType,
		NumUnits: numUnits,
		Recipient: recipient,
		Locker: locker,
	}
	assetAgreementBytes, _ := proto.Marshal(assetAgreement)

	chaincodeStub.GetStateReturns(nil, nil)

	// Test success with fungible asset agreement specified properly
	err := interopcc.LockFungibleAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
	fmt.Println("Test success as expected since the fungible asset agreement is specified properly.")

	assetLockValueChunks := make([]FungibleAssetLockValueChunk, 0)
	assetLockValueChunk := FungibleAssetLockValueChunk{Locker: locker, Recipient: recipient, Hash: string(lockInfoHTLC.Hash), ExpiryTimeSecs: lockInfoHTLC.ExpiryTimeSecs}
	assetLockValueChunks = append(assetLockValueChunks, assetLockValueChunk)
	assetLockVal := FungibleAssetLockValue{FungibleAssetLockValueChunks: assetLockValueChunks}
	assetLockValBytes, _ := json.Marshal(assetLockVal)
	chaincodeStub.GetStateReturns(assetLockValBytes, nil)

	// Test success with the same fungible asset agreement specified
	err = interopcc.LockFungibleAsset(ctx, string(assetAgreementBytes), string(lockInfoBytes))
	require.NoError(t, err)
	fmt.Println("Test success as expected since the fungible asset agreement is specified properly.")
}
