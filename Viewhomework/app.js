const app = Vue.createApp({
    data: function () {
      return {
       sections:[],
       pickedcrn: "",
       pickedid: "",
       pickedidlower: "",
       pickedtitle : "",
       pickedinstructor : "",
       pickedinstructorlower: "",
       pickedday: "",
       pickedtitlelower : "",
       pickeddepartment : "",
       pickeddiscipline : "",
       pickedformat : "",
      };
    },
    methods: {
      lower: function(){
        this.pickedtitlelower = this.pickedtitle.toLowerCase().trim();
      },
      lower: function(){
        this.pickedidlower = this.pickedid.toLowerCase().trim();
      },
      lower: function(){
        this.pickedinstructorlower = this.pickedinstructor.toLowerCase().trim();
      },
      
    },

    computed: {
      bypicked: function () {

        return this.sections.filter(name => 
        name.crn.includes(this.pickedcrn) && 
        name.id.toLowerCase().includes(this.pickedidlower)&&  
        name.title.toLowerCase().includes(this.pickedtitlelower)&& 
        name.instructor.toLowerCase().includes(this.pickedinstructorlower)&&
        name.meetings[0].day.includes (this.pickedday) &&
        name.dept.includes(this.pickeddepartment) &&
        name.mode.includes(this.pickedformat) &&
        name.discipline.includes(this.pickeddiscipline)
        );
        
        
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