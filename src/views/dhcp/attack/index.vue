<template>
  <el-container>
    <!-- 网络拓扑图 -->
    <el-card class="topology-card">
      <div slot="header" class="clearfix">
        <span>网络拓扑图</span>
      </div>
      <img src="网络拓扑图链接" alt="网络拓扑图" style="width: 100%;">
    </el-card>

    <!-- 实验操作 -->
    <el-row :gutter="20" class="operation-section">
      <el-col :span="12">
        <el-card class="operation-card">
          <el-button type="danger" @click="performAttack">模拟DHCP攻击</el-button>
          <el-button type="success" @click="applyDefense">应用防御</el-button>
        </el-card>
      </el-col>
    </el-row>

    <!-- 实验结果 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card v-if="experimentResult" class="result-card">
          <div slot="header" class="clearfix">
            <span>实验结果</span>
          </div>
          <p>{{ experimentResult }}</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 网络配置弹窗 -->
    <el-dialog :visible.sync="showConfigDialog" title="网络配置详情" width="50%">
      <pre>{{ currentConfig }}</pre>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      showConfigDialog: false,
      currentConfig: '',
      experimentResult: '',
    };
  },
  methods: {
    performAttack() {
      this.currentConfig = `# DHCP攻击时的网络配置
设备: Switch
配置: IP DHCP Snooping未启用`;
      this.experimentResult = '试验机的IP地址被恶意更改为192.168.1.100';
      this.showConfigDialog = true;
    },
    applyDefense() {
      this.currentConfig = `# 应用防御后的网络配置
设备: Switch
配置: IP DHCP Snooping已启用，确保只有可信的DHCP服务器可以响应`;
      this.experimentResult = '试验机获得了正确的IP地址，网络通信正常';
      this.showConfigDialog = true;
    }
  }
};
</script>

<style scoped>
.topology-card, .operation-card, .result-card {
  margin-bottom: 20px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.operation-section .el-col {
  text-align: center;
}

pre {
  background-color: #f5f5f5;
  padding: 15px;
  overflow: auto;
}
</style>
