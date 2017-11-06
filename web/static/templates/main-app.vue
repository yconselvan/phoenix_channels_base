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
    orderAction1() {
      console.log("orderAction1#")
    },
    profileAction1() {
      console.log("profileAction1#")
    },
    profileAction2() {
      console.log("profileAction2#")
    }
  }
}
</script>
