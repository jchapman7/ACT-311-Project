const app = Vue.createApp({
    data: function () {
      return {
       sections:[],
       pickedcrn: "",
       pickedtitle : "",
       pickedtitlelower : "",
       department : "",
      };
    },
    methods: {
      lower: function(){
        this.pickedtitlelower = this.pickedtitle.toLowerCase().trim();
      },
      
    },

    computed: {
      bypicked: function () {

        return this.sections.filter(name => 
        name.title.toLowerCase().includes(this.pickedtitlelower)&&  
        name.crn.includes(this.pickedcrn) && 
        name.dept.includes(this.department));
        
        
      },    
    },

    mounted() {
      fetch("./sections.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.sections = data;
          return data;
        })
        .catch((err) => {
          console.log(err);
        });

        // fetch("./departments.json")
        // .then((response) => {
        //   return response.json();
        // })

        // .then((data) => {
        //   console.log(data);
        //   this.sections = data;
        //   return data;
        // })
        // .catch((err) => {
        //   console.log(err);
        // });


        
    },
  });
  app.mount("#appArea");