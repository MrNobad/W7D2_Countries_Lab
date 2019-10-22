import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      // filteredCountries: null,
    },

    mounted() {
      this.fetchCountry();
    },

    filteredCountries: function(name) {
      return this.countries.filter(country => this.country.name)
    },

    methods: {
      fetchCountry: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.countries = data)
      }
    }
  })
})
