<template>
  <div>
    <h1>ENCI Earn</h1>
    <p>
      Enci Earn displays the various methods to utilize your ENCI assets to
      (potentially) earn additional income. <br />You can either lock your ENCI
      in liquidity pools, or use your ENCI to secure the Enci network.
    </p>
    <br />
    <p>
      For more information about liquidity pools,
      <a :href="urlMeduim">click here</a>. For more information about staking,
      <a :href="urlDoc">click here</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: `PageSwap`,
  data: () => ({
    urlMeduim:
      'https://medium.com/@BitCannaGlobal/osmosis-dex-liquidity-pools-meet-bitcanna-ea63142644ab',
    urlDoc: 'https://docs.bitcanna.io/concepts-and-terminology/staking',
  }),
}
</script>

<style>
.paragraph {
  margin-bottom: 15px;
  letter-spacing: 0.32px;
}
</style>
