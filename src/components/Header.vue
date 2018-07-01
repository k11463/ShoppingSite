<template>
    <div class="bg">
        <div class="left">
            <div class="logo" @click="isLogin = !isLogin">
                <div class="logoImg"></div>
                智善購物網站
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
        <div class="right">
            <div class="welcome" v-if="isLogin">歡迎~ k11463</div>
            <router-link to="./aa" class="routerLink" v-for="(info, id) in infoController" :key="info">
                <i :class="infoIconsController[id]"></i>
                {{info}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: false,
            infos: [
                ['登入', '註冊', '客服中心'],
                ['登出', '購物車', '拍賣管理', '會員中心']
            ],
            infoIcons: [
                ['fas fa-sign-in-alt', 'fas fa-user-plus', 'fas fa-user-circle'],
                ['fas fa-sign-out-alt', 'fas fa-shopping-cart', 'fas fa-shopping-bag', 'fas fa-user']
            ]
        }
    },
    computed: {
        infoController() {
            if (this.isLogin) {
                return this.infos[1];
            }
            else {
                return this.infos[0];
            }
        },
        infoIconsController() {
            if (this.isLogin) {
                return this.infoIcons[1];
            }
            else {
                return this.infoIcons[0];
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.bg {
    width: 100%;
    background-color: rgb(190, 104, 70);
    padding: 10px 0;
    display: flex;
    position: fixed;
    z-index: 99999;
    .left {
        width: 15%;
        .logo {
            width: 240px;
            height: 60px;
            margin-left: calc((100% - 240px) / 2 );
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: rgb(90, 36, 14);
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
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        .searchItem {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            input {
                width: 600px;
                height: 36px;
                border-radius: 8px 0 0 8px;
                font-size: 20px;
                font-weight: bold;
                padding-left: 15px;
                padding-top: 1px;
                color: #696969;
                outline: none;
                border: none;
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
                border: 1px solid #fff;
                border-radius: 0 8px 8px 0;
                background-color: rgb(190, 104, 70);
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1px;
                cursor: pointer;
                i {
                    font-size: 20px;
                    color: #fff;
                }
            }
        }
    }
    .right {
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .welcome {
            margin-right: 4%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 160px;
            height: 40px;
            font-size: 20px;
            color: #fff;
        }
        .routerLink {
            width: 140px;
            height: 40px;
            margin-right: 4%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            transition-duration: 0.5s;
            font-size: 20px;
            color: rgb(90, 36, 14);
            i {
                margin-right: 12px;
            }
        }
        .routerLink:hover {
            border-bottom: 2px solid #fff;
            color: #fff;
            animation: infoAnima .8s;
        }
        @keyframes infoAnima {
            0% {
                transform: translateY(0);
            }
            33% {
                transform: translateY(-10px);
            }
            66% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }
}
</style>

