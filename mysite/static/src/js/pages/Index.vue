<template>
<p>Hello Django vue inertial</p>
<p> {{ array }}</p>
</template>

<script>
export default {
  name: "Index",
    props: {
        array: Array,
        errors: Object
    }

}
</script>

<style scoped>
</style>
