<template>
    <div class="screen">
        <div class="row d-flex align-items-center h-100">
            <PCard class="offset-6 col-4">
                <template #title>
                    About
                </template>
                <template #content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada erat diam, eu consectetur sem semper nec. Ut et lorem augue. Pellentesque venenatis, sapien quis aliquet consectetur, quam tortor bibendum metus, at auctor massa velit eget dui. Aenean venenatis nibh eu lectus facilisis, bibendum vulputate lorem efficitur. Ut tincidunt, purus ut tempor dictum, odio mi scelerisque arcu, et lacinia erat risus eu ante. Nam volutpat maximus neque, sit amet ultricies elit vulputate nec. Proin in quam ac dolor auctor molestie. In hac habitasse platea dictumst. Suspendisse dolor felis, euismod id risus a, facilisis porttitor felis.
                </template>
            </PCard>
        </div>
    </div>
</template>

<script setup>
const { data, error } = await useFetch('/api/listings')

console.log(data.value, error.value)
</script>

<style scoped>
.screen {
    background: url('/img/home-background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    height: calc(100vh - 142px)
}
</style>