<template>
    <div class="container">
        <div id="map"></div>
    </div>
</template>
<script>
    export default {
        created() {
             if (process.client) {
              
            }
        },
        mounted() {
            this.drawMap();
        },
        methods: {
            drawMap() {
                var container = document.getElementById('map');
                var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
                };

                var map = new kakao.maps.Map(container, options);
                map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            }
        }
    }
</script>
<style>
#map {
    width: 400px;
    height: 300px;
}</style>