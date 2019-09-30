<template>
  <div>
    <div class="line">@formatDate 日期格式化：{{date}} -> {{ date | @formatDate('YYYY-MM-DD') }}</div>
    <div class="line">@formatMoney 货币格式化：{{money}} -> {{ money | @formatMoney }}</div>
    <div class="line">@escapeRegExp 转义 RegExp 字符串中特殊的字符：{{reg}} -> {{ reg | @escapeRegExp }}</div>
    <div class="line">@trim 去除首尾字符：{{trimVal}} -> {{ trimVal | @trim('-') }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      date: 1569810877228,
      money: '86578412.2',
      reg: '[cjsong.cn](https://cjsong.com/)',
      trimVal: '----------bb-----------',
    };
  },
  mounted() {
    console.log('工具函数');
    console.log('escapeRegExp:', this.$utils.escapeRegExp(this.reg));
    console.log('trim:', this.$utils.trim(this.trimVal, '-'));
    console.log('chunk:', this.$utils.chunk(['a', 'b', 'c', 'd'], 2));
    console.log('日期函数');
    console.log('moment:', this.$utils.moment().format('YYYY-MM-DD'));
    console.log('货币函数');
    console.log('accounting:', this.$utils.accounting.formatMoney(12345678.22, ''));
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 20px;
}
.line{
  padding: 10px 0;
}

</style>