<template>
  <div v-if="states.length > 0">
    <h3>There are a total of {{ states.length }} states and the District of Columbia</h3>
    <h3>You have visited {{ totalVisited }} {{ units }}</h3>

    <h2 id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Columbia!</h2>
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props: {
    states: Array,
  },
  computed: {
    totalVisited() {
      let visitedCount = 0
      this.states.forEach( state => {
        if (state.visited) {
          visitedCount++
        }
      })
      return visitedCount
    },
    units() {
      if (this.totalVisited ===1) {
        return 'state'
      } else {
        return 'states'
      }
    },
    areAllVisited() {
      return this.totalVisited === this.states.length
    }
  }
}
</script>

<style scoped>

#all-visited-message {
  color: goldenrod;
}

</style>