<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Telemetries</h1>
    <input type="text" v-model="search" class="form-control">
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>DeviceId</th>
              <th>PidType</th>
              <th>PidValue</th>
              <th>Unit</th>
              <th>TimeStamp</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="telemetry in filterBySearch(search)" :key="telemetry.id">
              <td>{{ telemetry.id }}</td>
              <td>{{ telemetry.deviceId }}</td>
              <td>{{ telemetry.pidType }}</td>
              <td>{{ telemetry.pidValue }}</td>
              <td>{{ telemetry.unit }}</td>
              <td>{{ telemetry.timeStamp }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from "@/services/TelemetryApiService";

export default {
  data() {
    return {
      telemetries: [],
      search: ""
    };
  },
  async created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      this.telemetries = await api.getAll();
    },
    filterBySearch(search) {
      if (search == '') return this.telemetries
      return this.telemetries.filter(t => t.id.includes(search)
      || t.deviceId.includes(search)
      || t.pidType.includes(search)
      || t.pidValue.includes(search)
      || t.unit.includes(search))
    }
  }
};
</script>