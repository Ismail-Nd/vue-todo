<template>
<form  class="form" @submit.prevent="submit" >
  <input type="text" placeholder="Title" v-model="title" required>
  <input type="text" placeholder="Description" v-model="description" required>
  <button type="submit" class="btn" >Send</button>
</form> 
</template>
 
<script>
export default {
    name: 'Ti',
    data() {
        return {
            title: '',
            description: ''

        }
    },
    methods: {
        submit() {
            this.$emit('submit', this.title, this.description)
            this.title = ''
            this.description = ''
        }
    }

}
</script>

<style>

</style>