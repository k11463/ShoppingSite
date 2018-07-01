<template>
    <div class="bg">
        <div class="left">
            <div class="listBox" :class="{ 'isActive': listBoxActive }">
                <div class="arrow" @click="listBoxActive = !listBoxActive">
                    <i class="fas fa-angle-double-right" v-if="listBoxActive == false"></i>
                    <i class="fas fa-angle-double-left" v-if="listBoxActive == true"></i>
                </div>
                <div class="lists">
                    <ul v-for="(listTitle, id) in listTitle" :key="id" :class="{ 'isActive': id == titleCount }">
                        <div class="title" @click="titleCount = id">
                            {{listTitle}}
                        </div>
                        <li v-for="listItem in listItem[id]" :key="listItem">
                            <div class="itemName">
                                {{listItem}}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="hotItem">
                <div class="title">熱門商品</div>
                <div class="items">
                    <ul>
                        <li v-for="hotItem in hotItems">
                            <div class="itemTitle">
                                {{ hotItem.name }}
                            </div>
                            <div class="itemImg" :style="{ backgroundImage: `url(${hotItem.url})` }"></div>
                            <div class="price">
                                <i class="fas fa-money-bill-wave-alt"></i>
                                <div class="priceCount">
                                    {{hotItem.price}}
                                </div>
                                <div class="yuan">
                                    元
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="box">
                <div class="article">
                    <div class="top">
                        覺得網頁不錯嘛?
                    </div>
                    <div class="bot">
                        歡迎聯繫我們
                    </div>
                </div>
                <div class="callUs">
                    <i class="fab fa-facebook"></i>
                    Facebook : www.facebook.com
                </div>
                <div class="ads">
                    <div class="title">
                        廣告
                    </div>
                    <ul>
                        <li v-for="(img, id) in adImgs" :style="{ backgroundImage: `url(${img})` }" :class="{ 'imgActive': id == adImgCount }"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.adImgCount++;
    },
    data() {
        var listTitle = ['書籍', '美容、健保', '家電', '玩具、公仔', '電玩、遊戲機', '服裝', '運動'];
        var listItem = [
            ['日本文學', '漫畫', '文學小說', '輕小說', '教科書', '童書', '醫療書籍'],
            ['化妝品', '身體保養', '手部保養', '足部保養', '香水', '保健用品'],
            ['鍋子', '電冰箱', '冷氣機', '電燈', '電風扇', '桌子', '椅子', '櫥櫃'],
            ['日本公仔', '西洋公仔', '娃娃', '擬人公仔', '玩具周邊'],
            ['3DS', 'NDS', 'SWITCH', 'PSP', 'PSV', 'PS4', 'PS5', 'XBOX360'],
            ['睡衣', 'COSPLAY', '居家服', '工作服', '運動衣'],
            ['籃球', '啞鈴', '棒球', '壘球', '橄欖球', '足球', '跑步機']
        ];
        var adImgs = [
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhAREBIVEBUWFRYXFhgWFRgVGRcVFRUWGBUXGhYeHSggGBolGxUVJTEiJSktLi4uFx8zOD8sNygtLisBCgoKDg0OGxAQGyslICItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAS0ApwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDAgj/xABJEAABAwIDAwcGCwQJBQAAAAABAAIDBBEFEiEGMUEHEyJRYXGRMoGhscHRFDM0NUJScnOCkrIkYrPhFiMlQ1N0g6LDFURU4/H/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQMEBQIGB//EADQRAQACAQMCAwcDAwMFAAAAAAABAgMEETESIQUyURMiM0FhcZEUgaEGQlIVI7EWU2LB0f/aAAwDAQACEQMRAD8Aqa7zsCAgICAgICAgICAgICAgICAgICCEEoCAgICAgICAgICAgICAgICAgICAghAQEEoCAgICAgICAgICAgICAgICAghAQSgICAgICAgICAgICAgICAgICAghAQSgICAgICAgICAgICAgICAgICAggoAQSgICAgICAgICAgICAgICAgICAghAQSgICAgICAgICAgICAgICAgICAggoARIiEoIQEEoCAgICAgICAgICAgICCEAoARIiEoIQEEoCAgICAgICAgICAgICAggoARIiBAQEBBKAgICAgICAgICAgICCEAoARKUQICAgICCEFsq9iJIaE10krfIjc1jQTpI5gF3HsdwCzV1MTk6IhRGeJv0wqi0rxAQEBAQEBAQEEIBQAiRSgQEBNgUSd135ONlqev559RnIjc0BrXZQcwJ1I14cCFk1Wa2PaIZtRktTaIVbHoGx1NSxgytbLI1o6g15AC045maxM+i+kzMRLq21HzEPuKX9UK5uH4/7yxYvjflxxdVvFAKe4hQCAglSCAgKAQQUBBedmafBI6Zk9a8ySkuBjOZ1iDwjZvFrG7tNVjyzmm3TXhmyTlm21eFiwylwHE80MMIjeBcWa6J9hxadzrdWqptOfF3mVVpy4+8qTV7ISsxBtA1185Ba8j+6IJLiOsAO06x2rVGoicfW0Rmj2fUutfRYHhIZFPEJpHN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',
            'https://www.annaborgia.com/wp-content/uploads/2016/11/Annaborgia-Stella-Dress-300x540.jpg',
            'http://www.olymate.com.tw/wp-content/uploads/2014/11/003-I4M0001F1%E5%A4%A7%E6%B5%B4%E5%B7%BE%E8%BB%8A%E5%AD%901-300x540.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0jvdoKEz5Jbq7v-Ofp62DrsHiQAffYqZivv3qqHX5rXxe0I16w'
        ];
        var hotItems = [
            { name: '任天堂3DS', url: 'https://i.imgur.com/e3yvL7e.png', price: 3000 },
            { name: 'PS5', url: 'https://i.imgur.com/eiUexzs.png', price: 12000 },
            { name: 'PSVita', url: 'https://i.imgur.com/wUGDTPz.png', price: 3500 },
            { name: '奇美萬能環保冰箱', url: 'https://i.imgur.com/hXCKB4N.png', price: 16000 },
            { name: '任天堂Switch', url: 'https://i.imgur.com/eBMvzMX.png', price: 12000 },
            { name: '生雞蛋拌飯機', url: 'https://i.imgur.com/MHmsqWH.png', price: 6800 },
        ];
        var hotItemsImg = [
            
        ];
        return {
            listTitle: listTitle,
            listItem: listItem,
            adImgs: adImgs,
            hotItems: hotItems,
            adImgCount: -1,
            titleCount: 0,
            listBoxActive: false,
        }
    },
    watch: {
        adImgCount() {
            let timer = window.setInterval(() => {
                if (this.adImgCount > 2) {
                    this.adImgCount = 0;
                }
                else {
                    this.adImgCount++;
                }
                window.clearInterval(timer);
            }, 1500);
        }
    }
}
</script>


<style lang="scss" scoped>
*::-webkit-scrollbar{
    display: none;
}
.bg {
    width: 100%;
    max-height: 800px;
    overflow: auto;
    display: flex;
    padding-top: 4.4%;
    * {
        user-select: none;
    }
    .left {
        width: 20%;
        .listBox {
            width: 12%;
            height: 100%;
            max-height: 788px;
            transform: translateX(-92%); //如果父元素使用了fixed 可以使用transform translate(0)來當作relative定位
            position: fixed;
            z-index: 2;
            transition-duration: 0.8s;
            .arrow {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                position: absolute;
                top: calc((100% - 30px) / 2);
                left: 93%;
                border: 1px solid #ddd;
                background-color: #fff;
                cursor: pointer;
                z-index: 3;
            }
            .lists {
                opacity: 0;
                transition-duration: 0.8s;
                ul {
                    height: 40px;
                    .title {
                        height: 40px;
                        border: 1px solid #ddd;
                        font-size: 24px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        border-right: 0;
                        color: rgb(190, 104, 70);
                        font-weight: bold;
                        transition-duration: 0.8s;
                    }
                    .title:first-child {
                        border-top: 0;
                    }
                    li {
                        border-bottom: 1px solid #ddd;
                        height: 32px;
                        font-size: 20px;
                        display: flex;
                        align-items: center;
                        opacity: 0;
                        transform: translateX(100%);
                        transition-duration: 0.8s;
                        color: rgb(190, 104, 70);
                    }
                    li:hover {
                        background-color: rgb(190, 104, 70);
                        color: #fff;
                    }
                }
                ul.isActive {
                    height: 100%;
                    .title {
                        background-color: rgb(190, 104, 70);
                        color: #fff;
                    }
                    li {
                        opacity: 1;
                        transform: translateX(0);
                        cursor: pointer;
                        .itemName {
                            margin-left: 8%;
                        }
                    }
                }
            }
        }
        .listBox.isActive {
            transform: translateX(0);
            border: 1px solid #ddd;
            .lists {
                opacity: 1;
            }
        }
    }
    .mid {
        width: 60%;
        height: 100vh;
        padding-top: 2%;
        .hotItem {
            padding: 20px;
            .title {
                width: 100%;
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 2.4%;
                margin-left: 8%;
            }
            .items {
                width: 100%;
                ul {
                    width: 100%;
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap; /* 超過長度自動換行 */
                    padding-bottom: 2.4%;
                    li {
                        width: 200px;
                        height: 270px;
                        border: 1px solid #dfdfdf;
                        padding: 15px 20px;
                        margin-right: 3.2%;
                        margin-left: 6.8%;
                        margin-top: 2.4%;
                        cursor: pointer;
                        background-color: #fff;
                        z-index: 1;
                        transition-duration: 0.8s;
                        .itemTitle {
                            font-size: 20px;
                            width: 100%;
                            text-align: center;
                            margin-top: 4%;
                        }
                        .itemImg {
                            width: 180px;
                            height: 140px;
                            background-size: 180px 140px;
                            background-repeat: no-repeat;
                            margin-left: 4%;
                            margin-top: 8%;
                            margin-bottom: 8%;
                        }
                        .price {
                            font-size: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            i {
                                color: #60b454;
                                margin-right: 4%;
                            }
                            .priceCount {
                                color: #f24;
                                margin-right: 4%;
                            }
                        }
                    }
                    li:hover {
                        transform: scale(1.2);
                        z-index: 2;
                        .price {
                            i {
                                animation: moneyIcomMove .5s infinite;
                            }
                            @keyframes moneyIcomMove {
                                0% {
                                    transform: translateX(0);
                                }
                                50% {
                                    transform: translateX(-5px);
                                }
                                0% {
                                    transform: translateX(0);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .right {
        width: 20%;
        height: 748px;
        .box {
            width: 300px;
            height: 80%;
            position: fixed;
            padding-bottom: 20px;
            .article {
                font-size: 24px;
                font-weight: bold;
                margin-top: 12%;
                .top {
                    margin-left: 8%;
                }
                .bot {
                    margin-left: 40%;
                }
            }
            .callUs {
                padding-left: 8%;
                display: flex;
                align-items: center;
                color: rgb(138, 138, 138);
                margin-top: 8%;
                i {
                    font-size: 28px;
                    color: black;
                    margin-right: 4%;
                }
            }
            .ads {
                height: 76%;
                margin-top: 8%;
                .title {
                    font-size: 20px;
                    text-align: center;
                    margin-top: 4%;
                }
                ul {
                    list-style: none;
                    width: 280px;
                    height: 492px;
                    margin-top: 4%;
                    li {
                        width: 300px;
                        height: 540px;
                        background-size: 280px 492px;
                        background-repeat: no-repeat;
                        position: absolute;
                        transform: translateX(20%);
                        opacity: 0;
                        transition-duration: .8s;
                    }
                    li.imgActive {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
        }
    }
}
</style>
