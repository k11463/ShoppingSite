<template>
    <div class="bg">
        <div class="left">
            123
        </div>
        <div class="mid">
            <div class="hotItem">
                <div class="title">熱門商品</div>
                <div class="items">
                    <ul>
                        <li v-for="i in 6">
                            <div class="itemTitle">
                                任天堂3DS
                            </div>
                            <div class="itemImg">

                            </div>
                            <div class="price">
                               <i class="fas fa-money-bill-wave-alt"></i>
                               <div class="priceCount">
                                   3000
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
            789
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    width: 100%;
    display: flex;    
    .left {
        width: 20%;
    }
    .mid {
        width: 60%;
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
                        border: 1px solid #696969;
                        padding: 15px 20px;
                        margin-right: 3.2%;
                        margin-left: 6.8%;
                        margin-top: 2.4%;
                        .itemTitle {
                            font-size: 20px;
                            width: 100%;
                            text-align: center;
                            margin-top: 4%;
                        }
                        .itemImg {
                            width: 200px;
                            height: 200px;
                            background-image: url('../assets/3ds.jpg');
                            background-size: 200px;
                            background-repeat: no-repeat;
                            background-position-y: 30%;
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
                }
            }
        }
    }
    .right {
        width: 20%;
    }
}
</style>
