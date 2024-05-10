<template>
  <div class="ddos-attack">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>DDoS Attack Simulation</span>
          </div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Target IP">
              <el-input v-model="form.targetIP"></el-input>
            </el-form-item>
            <el-form-item label="Attack Type">
              <el-select v-model="form.attackType" placeholder="Select attack type">
                <el-option label="TCP SYN Flood" value="tcp_syn_flood"></el-option>
                <el-option label="UDP Flood" value="udp_flood"></el-option>
                <el-option label="ARP" value="arp_flood"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Duration (s)">
              <el-input-number v-model="form.duration" :min="10" :max="120"></el-input-number>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="startAttack">Start Attack</el-button>
              <el-button @click="resetForm">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <img src="@/assets/NetworkTopology/ensp.png" alt="网络拓扑图" style="width: 100%;">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Attack Results</span>
          </div>
          <el-input
            type="textarea"
            v-model="attackResult"
            :rows="6"
            placeholder="Attack results will be displayed here..."
            readonly>
          </el-input>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DDoSAttack',
  data() {
    return {
      form: {
        targetIP: '',
        attackType: '',
        duration: 30,
      },
      attackResult: '',
    };
  },
  methods: {
    startAttack() {
      // Implement the logic to start the attack
      console.log('Starting attack with:', this.form);
      // For demonstration purposes, we'll just simulate an attack result
      this.attackResult = `Attack on ${this.form.targetIP} using ${this.form.attackType} for ${this.form.duration} seconds was successful.`;
    },
    resetForm() {
      this.$refs.form.resetFields();
      this.attackResult = '';
    },
  },
};
</script>

<style scoped>
.ddos-attack {
  max-width: 1200px;
  margin: 50px auto;
}
.box-card {
  margin-bottom: 20px;
}
</style>
