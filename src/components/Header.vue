<template>
    <div class="bg">
        <div class="left">
            <div class="logo">
                <div class="logoImg"></div>
                我就是LOGO
            </div>
        </div>
        <div class="mid">
            <div class="searchItem">
                <input type="text" size="30" id="searchItem" placeholder="商品名稱">
                <div class="icon">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    width: 100%;
    background-color: #ffefe9;
    padding: 10px 0;
    display: flex;
    .left {
        width: 15%;
        .logo {
            width: 160px;
            height: 60px;
            margin-left: calc((100% - 160px) / 2 );
            border-bottom: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            .logoImg {
                width: 50px;
                height: 50px;
                background-image: url('../assets/Logo.png');
                margin-right: 16px;
                background-repeat: no-repeat;
                background-size: 50px;
            }
        }
    }
    .mid {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        .searchItem {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            input {
                width: 400px;
                height: 36px;
                border-radius: 8px 0 0 8px;
                font-size: 20px;
                font-weight: bold;
                padding-left: 15px;
                padding-top: 1px;
                color: #696969;
                outline: none;
                border: 1px solid #696969;
            }
            input::-webkit-input-placeholder {
                color: #ddd;
            }
            label {
                font-size: 22px;
                font-weight: bold;
                margin-right: 5%;
            }
            .icon {
                width: 36px;
                height: 36px;
                border: 1px solid #696969;
                border-radius: 0 8px 8px 0;
                background-color: #fab6ad;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1px;
                cursor: pointer;
                i {
                    font-size: 20px;
                    color: #96645f;
                }
            }
        }
    }
    .right {
        width: 25%;
    }
}
</style>

