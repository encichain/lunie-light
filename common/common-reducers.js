module.exports.getProposalSummary = function getProposalSummary(type) {
  switch (type) {
    case `TEXT`:
      return `This is a text proposal. Text proposals can be proposed by anyone and are used as a signalling mechanism for this community. If this proposal is accepted, nothing will change without community coordination.`
    case `PARAMETER_CHANGE`:
      return `This is a parameter change proposal. Parameter change proposals can be proposed by anyone and include changes to the code of this network. If this proposal is approved the underlying code will change.`
    case `TREASURY`:
      return `This is a treasury proposal. Treasury proposals can be proposed by anyone and are a request for funds from the treasury / community pool.`
    case `UPGRADE`:
      return `This is an upgrade proposal. Upgrade proposals are proposed to upgrade the blockchain.`
    case `CANCEL_UPGRADE`:
      return `This is an upgrade cancel proposal. This proposal is proposed to cancel a scheduled blockchain upgrade`
    default:
      return `Unknown proposal type`
  }
}
