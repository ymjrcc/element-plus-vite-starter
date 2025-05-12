<script lang="ts" setup>
import { Avatar } from '@element-plus/icons-vue'

function handleLogout() {

}
</script>

<template>
  <div class="header h-15 flex items-center justify-between border-b-(1px gray-300 solid) px-5 shadow-md">
    <div class="h-full flex items-center gap-2">
      <div class="w-10 h-10 bg-gray-200"></div>
      <span class="ml-1 text-xl font-bold">
        XXXX管理系统
      </span>
    </div>
    <div class="flex items-center">
      <el-dropdown>
        <div class="flex cursor-pointer items-center gap-2">
          <el-icon class="text-xl">
            <Avatar />
          </el-icon>
          <span class="text-gray-700">username</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss">

</style>
