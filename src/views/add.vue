<template>

<NavBarVue />
<Todo />
<!-- <div class="ad">
  <form action='' class="form" @submit.prevent="onSubmit">
  <h1>Add Your Reminder</h1>
    <input type="text" id="title" v-model="title"/>
    <input type="datetime-local" id="date" v-model="date"/>
    <button class="btn" type="submit">Add to Do</button>
  </form>
</div> -->
  
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import Todo from '../components/ToDo.vue'
export default {
  data() {
    return{
      title: '',
      date: '',
    }
  },
  components: {
    NavBarVue,
    Todo
  }

}
</script>

<style>

</style>