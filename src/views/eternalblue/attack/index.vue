<template>
  <div class="dhcp-hijack">
    <!-- 网络拓扑图展示 -->
    <el-row :gutter="20" class="topology-row">
      <el-col :span="24">
        <el-card>
          <div slot="header">网络拓扑图</div>
          <img src="@/assets/NetworkTopology/eternalblue.png" alt="网络拓扑图" style="width: 100%;">
        </el-card>
      </el-col>
    </el-row>

    <!-- 实验操作和实验结果并排对齐 -->
    <div class="operation-and-result-row">
      <el-row>
        <!-- 实验操作 -->
        <el-col :span="12">
          <el-card>
            <div slot="header">攻击</div>
            <el-button type="primary" @click="simulateAttack">漏洞扫描</el-button>
            <el-button type="primary" @click="simulateAttack">密码破解</el-button>
            <el-button type="primary" @click="applyDefense">网络嗅探</el-button>
            <el-button type="primary" @click="applyDefense">远程命令执行</el-button>
          </el-card>
        </el-col>

        <!-- 实验结果 -->
        <el-col :span="12">
          <el-card>
            <div slot="header">检测</div>
            <el-button type="info" @click="simulateAttack">签名检测</el-button>
            <el-button type="info" @click="simulateAttack">内容匹配</el-button>
            <el-button type="info" @click="applyDefense">协议分析</el-button>
            <el-button type="info" @click="applyDefense">异常流量检测</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 配置详情弹窗 -->
    <el-dialog :visible.sync="configDialogVisible" title="配置详情" width="60%">
      <pre>{{ configDetails }}</pre>
    </el-dialog>
  </div>
</template>

<script>
import {Attack,Defense} from "@/config/dhcp";
export default {
  name: 'DHCPSimulation',
  data() {
    return {
      experimentResult: '',
      configDialogVisible: false,
      configDetails: '',
    };
  },
  methods: {
    simulateAttack() {
      this.experimentResult = Attack.experimentResult;
      this.configDetails = Attack.configDetails;
      this.configDialogVisible = true;
    },
    applyDefense() {
      this.experimentResult = Defense.experimentResult;
      this.configDetails = Defense.configDetails;
      this.configDialogVisible = true;
    },
  },
};
</script>

<style scoped>

.topology-row img {
  max-height: 450px;
  object-fit: contain;
}


</style>
