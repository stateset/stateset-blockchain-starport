package wasm

import (
	"github.com/stateset/stateset-blockchain/x/wasm/internal/keeper"
	"github.com/stateset/stateset-blockchain/x/wasm/internal/types"
)

const (
	DefaultFeatures            = types.DefaultFeatures
	ModuleName                 = types.ModuleName
	StoreKey                   = types.StoreKey
	TStoreKey                  = types.TStoreKey
	QuerierRoute               = types.QuerierRoute
	RouterKey                  = types.RouterKey
	WasmMsgParserRouteBank     = types.WasmMsgParserRouteBank
	WasmMsgParserRouteStaking  = types.WasmMsgParserRouteStaking
	WasmMsgParserRouteWasm     = types.WasmMsgParserRouteWasm
	DefaultParamspace          = types.DefaultParamspace
	EnforcedMaxContractSize    = types.EnforcedMaxContractSize
	EnforcedMaxContractGas     = types.EnforcedMaxContractGas
	EnforcedMaxContractMsgSize = types.EnforcedMaxContractMsgSize
	DefaultMaxContractSize     = types.DefaultMaxContractSize
	DefaultMaxContractGas      = types.DefaultMaxContractGas
	DefaultMaxContractMsgSize  = types.DefaultMaxContractMsgSize
	QueryGetByteCode           = types.QueryGetByteCode
	QueryGetCodeInfo           = types.QueryGetCodeInfo
	QueryGetContractInfo       = types.QueryGetContractInfo
	QueryRawStore              = types.QueryRawStore
	QueryContractStore         = types.QueryContractStore
	WasmQueryRouteBank         = types.WasmQueryRouteBank
	WasmQueryRouteStaking      = types.WasmQueryRouteStaking
	WasmQueryRouteOracle       = types.WasmQueryRouteOracle
	WasmQueryRouteTreasury     = types.WasmQueryRouteTreasury
	WasmQueryRouteWasm         = types.WasmQueryRouteWasm
)

var (
	// functions aliases
	NewKeeper                     = keeper.NewKeeper
	NewQuerier                    = keeper.NewQuerier
	NewWasmMsgParser              = keeper.NewWasmMsgParser
	NewWasmQuerier                = keeper.NewWasmQuerier
	RegisterCodec                 = types.RegisterCodec
	ParseEvents                   = types.ParseEvents
	ParseToCoin                   = types.ParseToCoin
	ParseToCoins                  = types.ParseToCoins
	EncodeSdkCoin                 = types.EncodeSdkCoin
	EncodeSdkCoins                = types.EncodeSdkCoins
	NewCodeInfo                   = types.NewCodeInfo
	NewContractInfo               = types.NewContractInfo
	NewWasmAPIParams              = types.NewWasmAPIParams
	NewWasmCoins                  = types.NewWasmCoins
	NewGenesisState               = types.NewGenesisState
	DefaultGenesisState           = types.DefaultGenesisState
	ValidateGenesis               = types.ValidateGenesis
	GetCodeInfoKey                = types.GetCodeInfoKey
	GetContractInfoKey            = types.GetContractInfoKey
	GetContractStoreKey           = types.GetContractStoreKey
	NewMsgStoreCode               = types.NewMsgStoreCode
	NewMsgInstantiateContract     = types.NewMsgInstantiateContract
	NewMsgExecuteContract         = types.NewMsgExecuteContract
	NewMsgMigrateContract         = types.NewMsgMigrateContract
	NewMsgUpdateContractOwner     = types.NewMsgUpdateContractOwner
	NewModuleMsgParser            = types.NewModuleMsgParser
	DefaultParams                 = types.DefaultParams
	ParamKeyTable                 = types.ParamKeyTable
	NewQueryCodeIDParams          = types.NewQueryCodeIDParams
	NewQueryContractAddressParams = types.NewQueryContractAddressParams
	NewQueryRawStoreParams        = types.NewQueryRawStoreParams
	NewQueryContractParams        = types.NewQueryContractParams
	NewModuleQuerier              = types.NewModuleQuerier

	// variable aliases
	ModuleCdc                       = types.ModuleCdc
	ErrStoreCodeFailed              = types.ErrStoreCodeFailed
	ErrAccountExists                = types.ErrAccountExists
	ErrInstantiateFailed            = types.ErrInstantiateFailed
	ErrExecuteFailed                = types.ErrExecuteFailed
	ErrGasLimit                     = types.ErrGasLimit
	ErrInvalidGenesis               = types.ErrInvalidGenesis
	ErrNotFound                     = types.ErrNotFound
	ErrInvalidMsg                   = types.ErrInvalidMsg
	ErrNoRegisteredQuerier          = types.ErrNoRegisteredQuerier
	ErrNoRegisteredParser           = types.ErrNoRegisteredParser
	ErrMigrationFailed              = types.ErrMigrationFailed
	ErrNotMigratable                = types.ErrNotMigratable
	LastCodeIDKey                   = types.LastCodeIDKey
	LastInstanceIDKey               = types.LastInstanceIDKey
	CodeKey                         = types.CodeKey
	ContractInfoKey                 = types.ContractInfoKey
	ContractStoreKey                = types.ContractStoreKey
	ParamStoreKeyMaxContractSize    = types.ParamStoreKeyMaxContractSize
	ParamStoreKeyMaxContractGas     = types.ParamStoreKeyMaxContractGas
	ParamStoreKeyMaxContractMsgSize = types.ParamStoreKeyMaxContractMsgSize
)

type (
	Keeper                     = keeper.Keeper
	WasmMsgParser              = keeper.WasmMsgParser
	WasmQuerier                = keeper.WasmQuerier
	Model                      = types.Model
	CodeInfo                   = types.CodeInfo
	ContractInfo               = types.ContractInfo
	AccountKeeper              = types.AccountKeeper
	BankKeeper                 = types.BankKeeper
	TreasuryKeeper             = types.TreasuryKeeper
	GenesisState               = types.GenesisState
	Code                       = types.Code
	Contract                   = types.Contract
	MsgStoreCode               = types.MsgStoreCode
	MsgInstantiateContract     = types.MsgInstantiateContract
	MsgExecuteContract         = types.MsgExecuteContract
	MsgMigrateContract         = types.MsgMigrateContract
	MsgUpdateContractOwner     = types.MsgUpdateContractOwner
	WasmMsgParserInterface     = types.WasmMsgParserInterface
	WasmCustomMsg              = types.WasmCustomMsg
	MsgParser                  = types.MsgParser
	Params                     = types.Params
	QueryCodeIDParams          = types.QueryCodeIDParams
	QueryContractAddressParams = types.QueryContractAddressParams
	QueryRawStoreParams        = types.QueryRawStoreParams
	QueryContractParams        = types.QueryContractParams
	WasmQuerierInterface       = types.WasmQuerierInterface
	Querier                    = types.Querier
	WasmCustomQuery            = types.WasmCustomQuery
)
