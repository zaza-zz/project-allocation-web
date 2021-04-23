<template>
  <div class="group-container">
    <el-card class="box-card">
      <el-button class="bulk-deletion" icon="el-icon-delete" type="primary"
        >Bulk Deletion</el-button
      >
        
      <el-input
        class="search"
        placeholder="Please Enter Keywords"
        suffix-icon="el-icon-search"
        v-model="input"
      >
      </el-input>
      <el-table
        class="group-table"
        :data="tableData"
        :default-sort="{ prop: 'id', order: 'descending' }"
        style="width: 97%"
        stripe
        size="mini"
        max-height="500"
      >
        <el-table-column fixed type="selection" width="55"> </el-table-column>
        <el-table-column fixed sortable prop="id" label="ID" width="70">
        </el-table-column>
        <el-table-column sortable prop="group_no" label="Group NO." width="120">
        </el-table-column>
        <el-table-column
          sortable
          prop="group_member"
          label="Group Memeber"
          width="250"
        >
        </el-table-column>
        <el-table-column sortable prop="num" label="Num of People" width="150">
        </el-table-column>
        <el-table-column
          sortable
          prop="pre"
          label="Preference List"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="operation"
          label="Operation"
          width="200"
          :formatter="formatter"
        >
          <el-button class="edit" type="primary">Edit</el-button>
          <el-button class="delete" type="danger">Delete</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          id: "1",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "2",
          group_no: "CS 11 / 3",
          group_member: "BBBB, CCCC, DDDD, EEEE",
          num: "  4 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "3",
          group_no: "CS 02 / 1",
          group_member: "AAAA",
          num: "  1 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "4",
          group_no: "CS 30 / 1",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "5",
          group_no: "CS 39 / 3",
          group_member: "AAAA, BBBB, CCCC ",
          num: "  3 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "6",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "7",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "8",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "9",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
        {
          id: "10",
          group_no: "CS 43 / 3",
          group_member: "AAAA, BBBB, CCCC, DDDD, EEEE",
          num: "  5 / 5",
          pre: "  1 / 2 / 3",
        },
      ],
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 1150px;
  height: 575px;
  margin-top: 15px;
  margin-left: 17px;
  margin-bottom: 15px;
  margin-right: 10px;
}

.bulk-deletion {
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  padding: 0px;
  line-height: 22px;
  margin-top: -5px;
  margin-left: -20px;
  margin-bottom: -5px;
  height: 31px;
  width: 136px;
}
.search {
  border-radius: 4px;
  height: 41px;
  width: 400px;
  margin-top: -5px;
  margin-bottom: -10px;
  margin-left: 515px;
}

.group-table {
  height: 470px;
  width: 1069px;
  font-size: 10px;
  font-family: "Arial";
  position: relative;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.delete {
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  padding: 0px;
  line-height: 22px;
  margin: 0px;
  margin-top: 5px;
  height: 31px;
  width: 73px;
}

.edit {
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  padding: 0px;
  line-height: 22px;
  margin: 0px;
  margin-top: 5px;
  height: 31px;
  width: 73px;
  margin-right: 5px;
}
.pagination {
  margin-top: 10px;
  margin-left: 650px;
}
</style>
