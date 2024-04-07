<template>
  <div class="dhcp-hijack">
    <!-- 网络拓扑图展示 -->
    <el-row :gutter="20" class="topology-row">
      <el-col :span="24">
        <el-card>
          <div slot="header">网络拓扑图</div>
          <img src="@/assets/NetworkTopology/stp.png" alt="网络拓扑图" style="width: 100%;">
        </el-card>
      </el-col>
    </el-row>

    <!-- 实验操作和实验结果并排对齐 -->
    <div class="operation-and-result-row">
      <el-row>
        <!-- 实验操作 -->
        <el-col :span="12">
          <el-card>
            <div slot="header">实验操作</div>
            <el-button type="danger" @click="simulateAttack">模拟生成树攻击</el-button>
            <el-button type="success" @click="applyDefense">应用防御措施</el-button>
          </el-card>
        </el-col>

        <!-- 实验结果 -->
        <el-col :span="12">
          <el-card>
            <div slot="header" class="result">实验结果</div>
            <el-input
              type="textarea"
              :rows="3"
              v-model="experimentResult"
              placeholder="实验结果将显示在这里..."
              readonly>
            </el-input>
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

.operation-and-result-row .el-row {
  display: flex;
  justify-content: space-between;
}
.operation-and-result-row .el-col:first-child {
  flex: 0 0 30%; /* 将第一个col设置为占据37%的宽度 */
}

.operation-and-result-row .el-col:last-child {
  flex-grow: 1; /* 剩余空间由第二个col填满 */
}

/* 确保卡片在大屏幕上并排显示，各占一半宽度 */
.operation-and-result-row .el-col {
  flex: 1;
}

</style>
