<script setup>
import historyItem from './historyItem.vue';
</script>

<script>

export default {
    data() {
        return {
            showUrl: "#",
            showStrData:`
{'A': 4, 'B': 5, 'C': 3, 'D': 2}
T_C
{'A,B': [['A,1', 'B,1'], ['A,2', 'B,4'], ['A,3', 'B,3'], ['A,4', 'B,3']], 'A,C': [['A,1', 'C,1'], ['A,2', 'C,2'], ['A,3', 'C,1'], ['A,3', 'C,3']], 'A,D': [['A,3', 'D,1']], 'B,D': [['B,1', 'D,2'], ['B,3', 'D,1']], 'B,C': [['B,3', 'C,1'], ['B,4', 'C,2']], 'C,D': [['C,1', 'D,1'], ['C,3', 'D,1']]}
C2
['A,B', 'A,C', 'A,D', 'B,C', 'B,D', 'C,D']
T2
{'A,B': [['A,1', 'B,1'], ['A,2', 'B,4'], ['A,3', 'B,3'], ['A,4', 'B,3']], 'A,C': [['A,1', 'C,1'], ['A,2', 'C,2'], ['A,3', 'C,1'], ['A,3', 'C,3']], 'B,C': [['B,3', 'C,1'], ['B,4', 'C,2']], 'B,D': [['B,1', 'D,2'], ['B,3', 'D,1']], 'C,D': [['C,1', 'D,1'], ['C,3', 'D,1']]}
A,B [['A,1', 'B,1'], ['A,2', 'B,4'], ['A,3', 'B,3'], ['A,4', 'B,3']]
A,C [['A,1', 'C,1'], ['A,2', 'C,2'], ['A,3', 'C,1'], ['A,3', 'C,3']]
B,C [['B,3', 'C,1'], ['B,4', 'C,2']]
B,D [['B,1', 'D,2'], ['B,3', 'D,1']]
C,D [['C,1', 'D,1'], ['C,3', 'D,1']]
P2
[['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'D'], ['C', 'D']]
C3
[['A', 'B', 'C'], ['B', 'C', 'D']]
T_C
{'A,B,C': [['A,2', 'B,4', 'C,2'], ['A,3', 'B,3', 'C,1']], 'B,C,D': [['B,3', 'C,1', 'D,1']]}
T3
A,B,C [['A,2', 'B,4', 'C,2'], ['A,3', 'B,3', 'C,1']]
P3
[['A', 'B', 'C']]
C4
无候选模式
T_C
{}
T4
无符合表实例
P4
无频繁模式`,
            historyItems: [
                {
                    title: "标题1",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                },
                {
                    title: "标题2",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                },
                {
                    title: "标题3",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                },
                {
                    title: "标题4",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                },
                {
                    title: "标题5",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                },
                {
                    title: "标题6",
                    content: "内容",
                    url: "src/assets/cityNight.jpeg",
                }
            ],
        };
    },
    methods: {
        historyIntemsClick(url) {
            document.querySelector("#showImage").src = url;
            console.log(url);
            // this.showUrl=url
            // console.log(this.showUrl)
        },
    }
}
</script>

<template>
    <div class="pa views">
        <div class="sonLeft">
            <div class="showImage">
                <img src="../assets/temp.png" alt="" srcset="" id="showImage">
                <div class="showStr">
                    <textarea readonly name="" id="" style="resize: none;">
                        {{ showStrData }}
                    </textarea>
                </div>
                <button class="share">分享</button>
                <button class="downLoad">下载</button>
            </div>

        </div>
        <div class="sonRight">
            <div class="scrollDiv">
                <historyItem v-for="({ title, content, url }, index) in historyItems" :key="index"
                    @click="historyIntemsClick(url)">
                    <template #title> {{ title }}</template>
                    <template #content> {{ content }}</template>
                </historyItem>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.views {
    width: 80vw;
    height: 90vh;
    position: relative;
    overflow: hidden;
    background: none;
    background-color: rgb(255, 255, 255);
}

.sonLeft {
    display: inline-block;
    width: 65%;
    height: 100%;
    align-items: center;
    text-align: center;
    background-color: #ffffff69;
}

.showImage {
    padding: 10px;
}

.showImage>img {
    width: 70%;
    height: auto;

}
.showStr textarea{
    width: 70%;
    height: 300px;
    display: inline-block;
}


.sonLeft button {
    margin-top: 50px;
    width: 250px;
    height: 50px;
    margin-left: 50px;
    margin-right: 50px;
    font-size: xx-large;
    background-color: rgba(6, 128, 43, 0.479);
    color: aliceblue;
}

.sonRight {
    width: 30vw;
    height: 100%;
    background-color: transparent;
    float: right;
    position: absolute;
    top: 10px;
    left: 50vw;

}

.scrollDiv {
    width: 20vw;
    height: 90%;
    overflow-x: hidden;
    overflow-y: auto;
}

.scrollDiv::-webkit-scrollbar {
    background: #627677;
    width: 3px;
}

.sonRight::-webkit-scrollbar-thumb {
    background: #ffffff;
    width: 3px;
}
</style>
