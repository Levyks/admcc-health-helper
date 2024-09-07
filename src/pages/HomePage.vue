<template>
  <q-page class="flex column" :style-fn="styleFn">
    <q-tab-panels v-model="tab" animated swipeable class="col-grow">
      <q-tab-panel
        v-for="tab in tabs"
        :key="tab.route.path"
        :name="tab.route.path"
      >
        <router-view />
      </q-tab-panel>
    </q-tab-panels>

    <q-tabs
      v-model="tab"
      class="bg-primary text-white shadow-2 full-width"
      dense
    >
      <q-tab
        v-for="tab in tabs"
        :key="tab.route.path"
        :name="tab.route.path"
        :icon="tab.icon"
        :label="tab.label"
      />
    </q-tabs>
  </q-page>
</template>

<script setup lang="ts">
import { routesNames } from 'src/router/routes';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

router.push('/current-session');

const tabs = [
  {
    label: 'Atendimento',
    icon: 'sym_o_health_and_safety',
    route: router.resolve({ name: routesNames.CURRENT_SESSION }),
  },
  {
    label: 'Medicamentos',
    icon: 'sym_o_pill',
    route: router.resolve({ name: routesNames.MEDICINES }),
  },
  {
    label: 'Exames',
    icon: 'sym_o_monitor_heart',
    route: {
      path: '/exames',
    },
  },
];

const tab = computed({
  get: () => router.currentRoute.value.path,
  set: (path: string) => router.push(path),
});

function styleFn(offset: number, totalHeight: number) {
  return {
    height: totalHeight - offset + 'px',
  };
}
</script>

<style lang="scss" scoped>
:deep(.q-tab__label) {
  font-size: 0.75rem;
}
</style>
