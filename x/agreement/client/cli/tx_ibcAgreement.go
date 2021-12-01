package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/ibc-go/modules/core/04-channel/client/utils"
	"github.com/stateset/stateset-blockchain/x/agreement/types"
)

var _ = strconv.Itoa(0)

func CmdSendIbcAgreement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-ibcAgreement [src-port] [src-channel] [id] [agreementNumber] [agreementName] [agreementType] [agreementStatus] [totalAgreementValue] [party] [counterparty] [AgreementStartBlock] [AgreementEndBlock]",
		Short: "Send a ibcAgreement over IBC",
		Args:  cobra.ExactArgs(12),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAgreementNumber := string(args[2])
			argsAgreementName := string(args[3])
			argsAgreementType := string(args[4])
			argsAgreementStatus := string(args[5])
			argsTotalAgreementValue := string(args[6])
			argsParty := string(args[7])
			argsCounterparty := string(args[8])
			argsAgreementStartBlock := string(args[9])
			argsAgreementEndBlock := string(args[10])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			sender := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			msg := types.NewMsgSendIbcAgreement(sender, srcPort, srcChannel, timeoutTimestamp, string(argsName), string(argsNumber), string(argsStatus), string(argsTotalagreementvalue))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
