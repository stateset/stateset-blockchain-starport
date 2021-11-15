package cli

import (
	"time"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/stateset/stateset-blockchain/x/did/types"
	statesettypes "github.com/stateset/stateset-blockchain/x/stateset/types"
	"github.com/spf13/cobra"
)

func NewTxCmd() *cobra.Command {
	didTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "did transaction sub commands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	didTxCmd.AddCommand(
		NewCmdAddDidDoc(),
		NewCmdAddCredential(),
	)

	return didTxCmd
}

func NewCmdAddDidDoc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-did-doc [stateset-did]",
		Short: "Add a new StatesetDid",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			statesetDid, err := types.UnmarshalStatesetDid(args[0])
			if err != nil {
				return err
			}

			cliCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			cliCtx = cliCtx.WithFromAddress(statesetDid.Address())

			msg := types.NewMsgAddDid(statesetDid.Did, statesetDid.VerifyKey)
			err = msg.ValidateBasic()
			if err != nil {
				return err
			}

			return statesettypes.GenerateOrBroadcastTxCLI(cliCtx, cmd.Flags(), statesetDid, msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	return cmd
}

func NewCmdAddCredential() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-kyc-credential [did] [signer-did-doc]",
		Short: "Add a new KYC Credential for a Did by the signer",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			didAddr := args[0]

			statesetDid, err := types.UnmarshalStatesetDid(args[1])
			if err != nil {
				return err
			}

			t := time.Now()
			issued := t.Format(time.RFC3339)

			credTypes := []string{"Credential", "ProofOfKYC"}

			cliCtx, err := client.GetClientTxContext(cmd)
			cliCtx = cliCtx.WithFromAddress(statesetDid.Address())
			if err != nil {
				return err
			}

			msg := types.NewMsgAddCredential(didAddr, credTypes, statesetDid.Did, issued)
			err = msg.ValidateBasic()
			if err != nil {
				return err
			}

			return statesettypes.GenerateOrBroadcastTxCLI(cliCtx, cmd.Flags(), statesetDid, msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	return cmd
}