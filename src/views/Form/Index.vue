<template>
  <div class="content-wrapper form-wrapper">
    <Row :gutter="32">
      <Col span="12">
       <div class="comp-list">
         <div v-for="(item,index) in formItemList" :key="index">
           <Input v-model="item.label"/>
         </div>
       </div>
      </Col>
      <Col span="12">
        <div class="comp-list">
          <p class="title">通用组件</p>
          <Button
            v-for="(item,index) in componentList"
            :key="index"
            @click="addComp(item)"
            type="text">
            {{item.label}}
          </Button>
        </div>

      </Col>
    </Row>

  </div>
</template>
<script>
import './style.less';
import { componentList } from './component';

export default {
  data() {
    return {
      componentList,
      formItemList: [],
      formData: {},
    };
  },
  methods: {
    // 添加组件
    addComp(item) {
      this.formItemList.push(item);
    },
  },
};
</script>
