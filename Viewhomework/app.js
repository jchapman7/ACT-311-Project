const app = Vue.createApp({
    data: function () {
      return {
       sections:[],
       picked : "",
       pickedlower : "",
      };
    },
    methods: {
      lower: function(){
        this.pickedlower = this.picked.toLowerCase().trim();
      },
    },

    computed: {
      byName: function bytitle() {
        return this.sections.filter(name => name.discipline.toLowerCase().includes(this.pickedlower));

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
    },
  });
  app.mount("#appArea");