<script setup>
import toast from "./toast.vue"


</script>

<script>
export default {
    data() {
        return {
            ruleItems: [
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 2,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 3,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 4,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 5,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 6,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 7,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 8,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 9,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 10,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 11,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 12,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 13,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 14,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 15,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 16,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 17,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },
                {
                    id: 1,
                    fileName: "文件名",
                    coloumCount: 4,
                    time: "2024-07-10",
                },

            ],
            showToastFlag: false,
            chooseItems: {},
        }
    },
    methods: {
            changeChooseItems(id) {
                console.log(id);
                if(id in this.chooseItems){
                     delete this.chooseItems[id] 
                }else{
                  this.chooseItems[id]=this.ruleItems[id];
                }
                console.log(id);
                console.log(this.chooseItems);
            }
    }
}

</script>

<template>
    <div class="pa views">
        <h1>规则生成</h1>
        <div class="title">
            <span>序号</span><input type="text">
            <span>文件名</span><input type="text">
            <span>时间</span><input type="text">
            <button>查询</button>

        </div>
        <table>
            <tr>
                <th></th>
                <th>序号</th>
                <th>文件名</th>
                <th>行数</th>
                <th>时间</th>
            </tr>
        </table>
        <div class="scroll">
            <table>
                <tr v-for="({ id, fileName, coloumCount, time }) in ruleItems " :key="id">
                    <td><input type="checkbox" @click="changeChooseItems(id-1);"></td>
                    <td>{{ id }}</td>
                    <td>{{ fileName }}</td>
                    <td>{{ coloumCount }}</td>
                    <td>{{ time }}</td>
                </tr>
            </table>
        </div>

    </div>
    <div class="btnDiv">
        <button>导入</button>
        <button>导出</button>
        <button>编辑</button>
        <button>删除</button>
        <button @click="showToastFlag = 1;">规则生成</button>
    </div>
    <toast v-if="showToastFlag" @click="showToastFlag = 0;">{{ Object.keys(chooseItems).length }}</toast>
</template>

<style scoped>
.views {
    width: 90%;
    height: 90%;
    overflow: hidden;
}

h1 {
    color: rgb(77, 107, 97);
    margin-left: 100px;
    margin-top: 20px;
}

.title {
    margin-left: 100px;
    margin-bottom: 20px;
}

.title input {
    height: 20px;
    width: 200px;
    margin-right: 20px;
    margin-left: 5px;
    margin-top: 30px;
}

.title button {
    width: 70px;
    height: 30px;
    background-color: aliceblue;
    border: none;
}

.scroll {
    height: 80%;
    background-color: transparent;
    overflow-y: scroll;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: aliceblue;
}

.scroll::-webkit-scrollbar-track {
    background-color: aliceblue;
}

table {
    margin-left: 100px;
    text-align: center;
    width: 60vw;
}

tr {
    background-color: rgb(164, 255, 189);
    height: 50px;
}

th {
    width: 20%;
    box-shadow:
        0px 0px 20px 5px rgba(185, 221, 226, 0.363) inset;
}

td {
    width: 20%;
    background-color: #accecf;

}

.btnDiv {
    float: left;
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}

.btnDiv button {
    width: 100px;
    height: 30px;
    background-color: #accecf;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px;
}
</style>
