/*
Hyperledger Cactus Plugin - Connector Iroha V2

Can perform basic tasks on a Iroha V2 ledger

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-iroha2

import (
	"encoding/json"
	"fmt"
)

// WatchBlocksResponseV1 - struct for WatchBlocksResponseV1
type WatchBlocksResponseV1 struct {
	ErrorExceptionResponseV1 *ErrorExceptionResponseV1
	WatchBlocksBinaryResponseV1 *WatchBlocksBinaryResponseV1
	WatchBlocksRawResponseV1 *WatchBlocksRawResponseV1
}

// ErrorExceptionResponseV1AsWatchBlocksResponseV1 is a convenience function that returns ErrorExceptionResponseV1 wrapped in WatchBlocksResponseV1
func ErrorExceptionResponseV1AsWatchBlocksResponseV1(v *ErrorExceptionResponseV1) WatchBlocksResponseV1 {
	return WatchBlocksResponseV1{
		ErrorExceptionResponseV1: v,
	}
}

// WatchBlocksBinaryResponseV1AsWatchBlocksResponseV1 is a convenience function that returns WatchBlocksBinaryResponseV1 wrapped in WatchBlocksResponseV1
func WatchBlocksBinaryResponseV1AsWatchBlocksResponseV1(v *WatchBlocksBinaryResponseV1) WatchBlocksResponseV1 {
	return WatchBlocksResponseV1{
		WatchBlocksBinaryResponseV1: v,
	}
}

// WatchBlocksRawResponseV1AsWatchBlocksResponseV1 is a convenience function that returns WatchBlocksRawResponseV1 wrapped in WatchBlocksResponseV1
func WatchBlocksRawResponseV1AsWatchBlocksResponseV1(v *WatchBlocksRawResponseV1) WatchBlocksResponseV1 {
	return WatchBlocksResponseV1{
		WatchBlocksRawResponseV1: v,
	}
}


// Unmarshal JSON data into one of the pointers in the struct
func (dst *WatchBlocksResponseV1) UnmarshalJSON(data []byte) error {
	var err error
	match := 0
	// try to unmarshal data into ErrorExceptionResponseV1
	err = newStrictDecoder(data).Decode(&dst.ErrorExceptionResponseV1)
	if err == nil {
		jsonErrorExceptionResponseV1, _ := json.Marshal(dst.ErrorExceptionResponseV1)
		if string(jsonErrorExceptionResponseV1) == "{}" { // empty struct
			dst.ErrorExceptionResponseV1 = nil
		} else {
			match++
		}
	} else {
		dst.ErrorExceptionResponseV1 = nil
	}

	// try to unmarshal data into WatchBlocksBinaryResponseV1
	err = newStrictDecoder(data).Decode(&dst.WatchBlocksBinaryResponseV1)
	if err == nil {
		jsonWatchBlocksBinaryResponseV1, _ := json.Marshal(dst.WatchBlocksBinaryResponseV1)
		if string(jsonWatchBlocksBinaryResponseV1) == "{}" { // empty struct
			dst.WatchBlocksBinaryResponseV1 = nil
		} else {
			match++
		}
	} else {
		dst.WatchBlocksBinaryResponseV1 = nil
	}

	// try to unmarshal data into WatchBlocksRawResponseV1
	err = newStrictDecoder(data).Decode(&dst.WatchBlocksRawResponseV1)
	if err == nil {
		jsonWatchBlocksRawResponseV1, _ := json.Marshal(dst.WatchBlocksRawResponseV1)
		if string(jsonWatchBlocksRawResponseV1) == "{}" { // empty struct
			dst.WatchBlocksRawResponseV1 = nil
		} else {
			match++
		}
	} else {
		dst.WatchBlocksRawResponseV1 = nil
	}

	if match > 1 { // more than 1 match
		// reset to nil
		dst.ErrorExceptionResponseV1 = nil
		dst.WatchBlocksBinaryResponseV1 = nil
		dst.WatchBlocksRawResponseV1 = nil

		return fmt.Errorf("data matches more than one schema in oneOf(WatchBlocksResponseV1)")
	} else if match == 1 {
		return nil // exactly one match
	} else { // no match
		return fmt.Errorf("data failed to match schemas in oneOf(WatchBlocksResponseV1)")
	}
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src WatchBlocksResponseV1) MarshalJSON() ([]byte, error) {
	if src.ErrorExceptionResponseV1 != nil {
		return json.Marshal(&src.ErrorExceptionResponseV1)
	}

	if src.WatchBlocksBinaryResponseV1 != nil {
		return json.Marshal(&src.WatchBlocksBinaryResponseV1)
	}

	if src.WatchBlocksRawResponseV1 != nil {
		return json.Marshal(&src.WatchBlocksRawResponseV1)
	}

	return nil, nil // no data in oneOf schemas
}

// Get the actual instance
func (obj *WatchBlocksResponseV1) GetActualInstance() (interface{}) {
	if obj == nil {
		return nil
	}
	if obj.ErrorExceptionResponseV1 != nil {
		return obj.ErrorExceptionResponseV1
	}

	if obj.WatchBlocksBinaryResponseV1 != nil {
		return obj.WatchBlocksBinaryResponseV1
	}

	if obj.WatchBlocksRawResponseV1 != nil {
		return obj.WatchBlocksRawResponseV1
	}

	// all schemas are nil
	return nil
}

type NullableWatchBlocksResponseV1 struct {
	value *WatchBlocksResponseV1
	isSet bool
}

func (v NullableWatchBlocksResponseV1) Get() *WatchBlocksResponseV1 {
	return v.value
}

func (v *NullableWatchBlocksResponseV1) Set(val *WatchBlocksResponseV1) {
	v.value = val
	v.isSet = true
}

func (v NullableWatchBlocksResponseV1) IsSet() bool {
	return v.isSet
}

func (v *NullableWatchBlocksResponseV1) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWatchBlocksResponseV1(val *WatchBlocksResponseV1) *NullableWatchBlocksResponseV1 {
	return &NullableWatchBlocksResponseV1{value: val, isSet: true}
}

func (v NullableWatchBlocksResponseV1) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWatchBlocksResponseV1) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


