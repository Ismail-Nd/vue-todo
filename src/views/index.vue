
<template>
   <NavBar />

   <div clss="mainb" >
	<!-- <input type="text" v-model= "message"></input>
	<h1>{{ message}}</h1> -->
	<div v-for="(todo,i) in data" :key="i">
		<h1>{{ todo.title }}</h1>
		<p>{{ todo.data }}</p>
	</div>
	
   </div>

<!-- 
  <h1>{{ message }}</h1>
  <router-link to="/add">Go to the page</router-link>
   <h1>{{ count }}</h1>
  <button @click='decreament' >Remove</button> -->
  
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
	data() {
		return {
			// message: 'Hello World',
			count: 20,
			message: ' ',
			data:[]
			
		}
	},
	components: {
		NavBar
	},
	methods: {
		decreament() {
			this.count--
			if(this.count<=0){
				this.count = 0
			}
		}
	},
	mounted(){
		fetch('http://localhost:3000/todo')
		.then(res => res.json())
		.then(data => this.data = data)
		.catch(err => console.log(err))
	}

}
</script>

<style>

</style>