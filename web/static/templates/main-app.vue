<template>
  <div class="row orders">
    <div class="col-lg-12">
      <div>Orders Actions</div>
      <ul>
        <li @click="orderAction1">Order action</li>
      </ul>
    </div>
  </div>
 
  <div class="row profile">
    <div class="col-lg-12">
      <h4>Profile Action</h4>
      <ul>
        <li>
          <a href="#" v-on:click.prevent="profileAction1">Profile 1</a>
        </li>
        <li>
          <a href="#" v-on:click.prevent="profileAction2">Profile 2</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ordersChannel: null,
      profileChannel: null
    }
  },
  methods: {
    executePush(channel, action, input, callback) {
      channel.push(action, input).receive("ok", (payload) => {
        console.log("executePush# OK " + payload);
        callback(payload)
      }).receive("error", (error_data) => {
        console.log("executePush# ERROR: " + error_data + " action: " + action);
      }).receive("timeout", (data) => {
        console.log("executePush# TIMEOUT action: " + action);
      });
    },
    orderAction1() {
      console.log("orderAction1#")
      this.executePush(self.ordersChannel, "orderAction1", {
        data: "SOME_DATA"
      }, ({data}) => { console.log("orderAction1# data: " + data) });
    },
    profileAction1() {
      console.log("profileAction1#")
      this.executePush(self.profileChannel, "profileAction1", {
        data: "SOME_DATA"
      }, ({payload}) => { console.log("profileAction1# payload: " + payload) });
    },
    profileAction2() {
      console.log("profileAction2#")
      this.executePush(self.profileChannel, "profileAction2", {
        data: "SOME_DATA"
      }, ({payload, other_payload}) => { console.log("profileAction2# payload: " + payload + " other_payload: " + other_payload) });
    }
  }
}
</script>
