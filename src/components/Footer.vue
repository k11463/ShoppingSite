<template>
    <div class="bg">
        <div class="left">
            <div class="company">
                <i class="fas fa-building"></i>
                智善股份有限公司
            </div>
        </div>
        <div class="right">
            <div class="info">
                <i class="fas fa-mobile-alt"></i>
                連絡電話 ： 0978591109
            </div>
            <div class="info">
                <i class="fas fa-mobile-alt"></i>
                公司地址 ： 苗栗市南勢里聯大2號資訊工程學系4樓
            </div>
            <div class="info">
                <i class="fas fa-mobile-alt"></i>
                傳真 ： 0386456613
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    background-color: rgb(190, 104, 70);
    height: 120px;
    width: 100%;
    position: fixed;
    display: flex;
    .left {
        width: 30%;
        .company {
            font-size: 28px;
            font-weight: bold;
            margin-left: 12%;
            margin-top: 3.2%;
            i {
                margin-right: 2%;
            }
        }
    }
    .right {
        width: 70%;
        display: flex;
        .info {
            display: flex;
            font-size: 20px;
            white-space: nowrap; /* 強迫文字不換行 */
            margin-top: 1.6%;
            margin-right: 4%;
            margin-left: 4%;
            i {
                margin-right: 2%;
            }
        }
    }
}
</style>
