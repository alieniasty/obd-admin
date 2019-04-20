<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Vehicles</h1>
    <el-button type="primary" icon="el-icon-circle-plus" circle></el-button>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>DeviceId</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Actions</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vehicle in vehicles" :key="vehicle.id">
              <td>{{ vehicle.deviceId }}</td>
              <td>{{ vehicle.brand }}</td>
              <td>{{ vehicle.model }}</td>
              <td>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from "@/services/VehicleApiService";

export default {
  data() {
    return {
      vehicles: []
    };
  },
  async created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      this.vehicles = await api.getAll();
    }
  }
};
</script>

<style scoped>

.el-button.el-button--primary.is-circle {
  margin-left: 25px;
  margin-bottom: 30px;
  margin-top: 5px;
}

.h1 {
  float: left;
}

</style>
