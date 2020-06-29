<template>
  <div class="total">
    <div class="total-top">图书分类</div>
    <ul class="total-center" @mouseleave="leaveHidden">
      <li
        v-for="(itemf,indexf) in class1List"
        @mouseenter=" moveShow(indexf,itemf.id)"
        @mouseleave="leaveHidden"
        :key="indexf"
      >
        <h2>{{itemf.name}}</h2>
        <p>
          <a href="#"></a>
        </p>
        <div class="liChild" v-show="indexf==currentIndex">
          <div v-for="(item,index) in class2[indexf] " :key="index">
            <span>{{item.name}}></span>
          </div>
          <div class="right">
            <div v-for="(itemx,index) in class3[currentIndex]" :key="index">
              <span
                v-for="(item,index) in itemx"
                :key="index"
                @click="resbook(item.id,item.name)"
              >{{item.name}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="total-bottom">全部图书分类</div>
  </div>
</template>

<script>
import { request } from "network/request.js";
export default {
  data() {
    return {
      currentIndex: -2,
      newId: [],
      class2: {},
      class3: {},
      nss: {}
    };
  },
  methods: {
    moveShow(index, id) {
      this.currentIndex = index;
      let keys = this.newId.some(val => {
        return val == id;
      });
      if (keys) {
        return;
      } else {
        this.newId.push(id);
        request({
          url: "category/list",
          params: {
            pid: id
          }
        }).then(val => {
          this.class2[index] = val;
          let newArr = val.map(id => {
            return id.id;
          });
          newArr.forEach(element => {
            request({
              url: "category/list",
              params: {
                pid: element
              }
            }).then(val => {
              this.class3[index].push(val);
              this.class3[index].sort((a, b) => {
                return a[0].id - b[0].id;
              });
            });
          });
        });
      }
    },
    leaveHidden() {
      this.currentIndex = -1;
    },
    resbook(id, name) {
      this.$router.push({
        path: "/booklist",
        query: {
          id: id,
          name: name
        }
      });
    }
  },
  props: {
    class1List: {}
  },
  watch: {
    class1List(val) {
      for (let i = 0; i < val.length; i++) {
        this.$set(this.class2, i, null);
        this.$set(this.class3, i, []);
      }
    }
  }
};
</script>

<style scoped>
.right {
  position: absolute;
  width: 400px;
  height: 100%;
  left: 90px;
  top: 0;
}
.right div:nth-child(1) {
  margin-top: 10px;
}
.liChild {
  position: absolute;
  width: 600px;
  height: 200px;
  left: 240px;
  top: 0;
  border: 1px solid #a28374;
  z-index: 999;
  border-left: 2px solid #eeee;
  background: #fff;
  justify-content: center;
}
.liChild > div:nth-child(1) {
  margin-top: 10px;
}
.liChild div > span {
  width: 90px;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 5px;
}
.total a {
  font-size: 12px !important;
}

.total {
  position: relative;
  height: 1243px;
  top: 0px;
  background-color: white;
}
.total-top {
  position: absolute;
  width: 100%;
  line-height: 42px;
  text-indent: 1em;
  font-size: 17px;
  color: #fff;
  background: #a28374;
}
.total-bottom {
  position: absolute;
  width: 100%;
  line-height: 40px;
  height: 40px;
  font-size: 17px;
  bottom: 0;
  color: #fff;
  background: #a28374;
  text-align: center;
}
.total-center {
  position: relative;
  top: 50px;
  width: 100%;
  font-size: 15px;
}
.total-center h2 {
  font-weight: bold;
  font-size: 20px;
  padding-left: 15px;
  margin-bottom: 5px;
}
.total-center > li {
  position: relative;
  width: 100%;
  height: 65px;
  background-color: #fff;
}
.total-center li:hover {
  background-color: #cad3c8;
  cursor: pointer;
}

.total-center .two {
  height: 80px;
}
.total-center .th {
  height: 90px;
}
.total-center .two a {
  text-align: center;
}
.total-center a {
  color: #8d8b78;
}
.center ul li h2 {
  margin-left: 18px;
}
.total-center li p {
  padding-left: 15px;
  width: 155px;
}
</style>