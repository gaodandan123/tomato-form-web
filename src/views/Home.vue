<template>
  <div class="about">
    <h1>This is an Home page</h1>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>

      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
    <div v-for="(item,index) in items" :key="index">{{item.date | dateFormat}}</div>
  </div>
</template>
<script>
import api from '@/api/testApi';
import moment from 'moment';

const { testApi } = api;
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          {
            type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur',
          },
        ],
      },
      items: [
        {
          date: 'Thu May 09 2019 18:06:32 GMT+0800',
        },
        {
          date: 'Thu May 09 2019 18:06:57 GMT+0800',
        },
        {
          date: 'Thu May 09 2019 18:06:58 GMT+0800',
        },
        {
          date: 'Thu May 09 2019 18:06:59 GMT+0800',
        },
      ],
    };
  },
  filters: {
    dateFormat(val) {
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  created() {
    this.test();
  },
  methods: {
    async test() {
      const res = await testApi();
      if (res) {
        console.log(res);
      }
    },
  },
};
</script>
