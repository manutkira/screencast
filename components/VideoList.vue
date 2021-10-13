<template>
  <v-card
    width="340px"
    hover
    class="ma-2 mt-5"
    >
    <nuxt-link :to="`/watch/${video.id}`">
    <v-img :src="video.thumbnail"/>
    <v-card-title class="deco">{{video.name}}</v-card-title>
    </nuxt-link>
    <v-card-text>
        <!-- <div class="green--text" v-if="isPlayed(video.id)">
            <font-awesome-icon icon="check" /> Played
        </div> -->
    </v-card-text>

    <v-card-text class="mar">
        <span v-for="tag_id in video.tagIds" :key="tag_id.id">
            <v-btn color="green lighten-2" class="mr-1 mb-3 " small
            >
            <!-- :to="{name: 'tag', params: {id: tag_id}}" -->
                <!-- {{getTag(tag_id).name}} -->
                {{tag_id.name}}
            </v-btn>
        </span>
    </v-card-text> 
    </v-card>
</template>

<script>
export default {
    props: ['video']
}
</script>

<style>
a{
    text-decoration: none;
}
.deco{
    color: black;
}
</style>