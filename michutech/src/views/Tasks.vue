<template>

  <v-container grid-list-xl>

    <v-layout row wrap mt-4>
      <!-- Formulario -->
      <v-flex md6>

        <v-card class="mb-3 pa-3">
          <v-form>
            <v-text-field v-model="title" label="Title task" required></v-text-field>
            <v-textarea  v-model="description" label="Description" required></v-textarea>
            <v-btn class="success" v-on:click="add" v-on:keyup.enter="add" block required>Add</v-btn>

          </v-form>

        </v-card>
      </v-flex>

      <!-- lista de tareas -->

      <v-flex md6>
        <v-card class="mt-3" v-for="(item,index) of tasks_list" :key="index" light color="secondary"
            >

          <v-chip  color="blue" label text-color="white"> <v-icon left> mdi-label </v-icon>
            {{item.title}} #{{index+1}}
          </v-chip>
          <p class="ma-3">{{item.description}}</p>


          <v-container class="d-flex justify-end" >
          <!-- check -->
          <v-btn fab class="text-justify mx-3" v-on:click="edit" color="success" > <v-icon fan>done_outline</v-icon></v-btn> 

          <!-- Delete -->
          <v-btn fab color="error" v-on:click="delet">  <v-icon> delete_outline </v-icon> </v-btn>

          </v-container>

        </v-card>


      </v-flex>
    </v-layout>

    <!-- Snackbar -->
     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ menssange }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
   

  

  </v-container>

</template>

<script>
  export default {
    data() {
      return {
        tasks_list: [{
          id: 1,
          title: 'Title of Task',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi laborum eius molestias assumenda nam porro, sequlkanfna',
        }],

        title: '',
        description: '',
        snackbar:'false',
        menssange:'',
        status:''
       

      }

    },

    methods: {


      add() {
        if(this.title===''||this.description==''){
          this.snackbar=true,
          this.menssange= 'Complete all  the parameth, please'}

          else{
        this.tasks_list.push({
          title:this.title,
          description: this.description,
          status: false
         
        })
          
           this.title= '';
           this.description='';
            this.snackbar=true,
          this.menssange= 'Task Success'
           
                
        }
        
           
        


      },

      delet(index){
        this.tasks_list.splice(index,1);
        this.snackbar=true,
          this.menssange= 'Task deleted'
      },

     edit(index) {
            this.tasks_list[index].status = true;
        },
       
    
    }


  }
</script>