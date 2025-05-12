<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider namespace="ep" :locale="zhCn">
    <BaseHeader />
    <div class="main-container">
      <BaseSide />
      <div class="w-full overflow-auto">
        <el-scrollbar>
          <div class="p-4">
            <RouterView />
          </div>
        </el-scrollbar>
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  color: var(--ep-text-color-primary);
}

.main-container {
  display: flex;
  height: calc(100vh - var(--ep-menu-item-height) - 5px);
}
</style>
