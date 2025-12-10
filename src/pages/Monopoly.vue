<template>
  <section class="mono">
    <header class="toolbar">
      <div class="stats">
        <span>当前位置：{{ currentIndex + 1 }}</span>
        <span>上次点数：{{ lastRoll ?? '-' }}</span>
      </div>
      <button class="roll-btn" :disabled="rolling" @click="roll">{{ rolling ? '前进中…' : '掷骰子' }}</button>
    </header>

    <div class="grid" role="grid" aria-label="Monopoly Board">
      <div
        v-for="(cell, idx) in cells"
        :key="cell.id"
        class="cell"
        :class="[
          { active: idx === currentIndex, highlight: highlights.has(idx), final: idx === finalIndex },
          borderTagIds.has(cell.id) && borderTagClass,
          bgTagIds.has(cell.id) && bgTagClass,
        ]"
        :data-id="cell.id"
        role="gridcell"
        :aria-selected="idx === currentIndex"
        @click="openCell(cell)"
      >
        <div class="cell-inner">
          <div class="title">{{ cell.title }}</div>
          <div class="desc">{{ cell.moreData }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

type Cell = { id: number; title: string; url?: string; moreData?: string }

// 6x6 = 36 格子，根据数组生成。如果外部未传入，这里提供示例数据。
const baseCells = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  title: `${i + 1}`,
  url: '#',
  moreData: i % 5 === 0 ? '奖励格' : '普通格',
})) satisfies Cell[]

const cells = ref<Cell[]>(baseCells)

// 当前所在索引（0-based）
const currentIndex = ref(0)
// 本次移动的最终索引
const finalIndex = ref<number | null>(null)
// 最近一次掷骰结果
const lastRoll = ref<number | null>(null)
// 正在前进动画中
const rolling = ref(false)
// 需要高亮的路径索引集合
const highlights = reactive<Set<number>>(new Set())
// 标签样式集合（通过 id 控制）
const borderTagIds = reactive<Set<number>>(new Set())
const bgTagIds = reactive<Set<number>>(new Set())
// 默认标签样式类名（可在外部或此处自定义）
const borderTagClass = 'border-tag'
const bgTagClass = 'bg-tag'

// 掷骰子（1-6），并触发逐格动画
const roll = async () => {
  if (rolling.value) return

  const steps = Math.floor(Math.random() * 6) + 1
  lastRoll.value = steps
  await moveBySteps(steps)
}

// 逐格移动动画：从 currentIndex 到 newIndex，沿途格子依次高亮
const moveBySteps = async (steps: number) => {
  rolling.value = true
  highlights.clear()
  borderTagIds.clear()
  bgTagIds.clear()

  let idx = currentIndex.value
  for (let s = 1; s <= steps; s++) {
    const next = (idx + 1) % cells.value.length
    // 仅步进亮起：先清空，再点亮当前步
    highlights.clear()
    highlights.add(next)
    // 为当前步的格子（按 id）设置标签样式
    const cellId = cells.value[next].id
    borderTagIds.clear()
    bgTagIds.clear()
    borderTagIds.add(cellId)
    bgTagIds.add(cellId)
    idx = next
    // 等待动画节奏
    await wait(220)
  }

  // 设置最终索引并更新当前位置
  finalIndex.value = idx
  currentIndex.value = idx
  // 最终格子闪烁强调
  await wait(200)
  rolling.value = false
  // 动画结束后清理步进高亮
  highlights.clear()
  // 可选择保留最终格子的标签样式
  borderTagIds.clear()
  bgTagIds.clear()
  if (finalIndex.value !== null) {
    const finalId = cells.value[finalIndex.value].id
    borderTagIds.add(finalId)
    bgTagIds.add(finalId)
  }
}
/**
 * 按入参点数，从当前位置到目标位置，依次为路径格子（基于 id）赋予外边框与背景色标签。
 * 可选择是否动画（默认 true）。
 */
const tagPathByDice = async (dice: number, options?: { animate?: boolean }) => {
  const animate = options?.animate ?? true
  borderTagIds.clear()
  bgTagIds.clear()

  let idx = currentIndex.value
  const len = cells.value.length
  if (animate) {
    rolling.value = true
    for (let s = 1; s <= dice; s++) {
      const next = (idx + 1) % len
      const cellId = cells.value[next].id
      // 仅步进标签：每步只为当前 id 打上标签
      borderTagIds.clear()
      bgTagIds.clear()
      borderTagIds.add(cellId)
      bgTagIds.add(cellId)
      idx = next
      await wait(220)
    }
    finalIndex.value = idx
    currentIndex.value = idx
    rolling.value = false
  } else {
    // 非动画：为路径上所有格子打上标签
    for (let s = 1; s <= dice; s++) {
      const next = (idx + 1) % len
      const cellId = cells.value[next].id
      borderTagIds.add(cellId)
      bgTagIds.add(cellId)
      idx = next
    }
    finalIndex.value = idx
  }
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

// 点击格子：如果存在 url，则跳转（用于安装 App 的场景可以放置 apk 的资源 URL）
const openCell = (cell: Cell) => {
  if (!cell.url || cell.url === '#') return
  window.open(cell.url, '_blank')
}
</script>

<style scoped>
.mono {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stats { display: flex; gap: 12px; color: #555; }
.roll-btn {
  appearance: none;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  background: #1f7aec;
  color: #fff;
  font-size: 14px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 88px;
  gap: 8px;
}
.cell {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}
.cell:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
.cell-inner {
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.title { font-weight: 600; color: #222; }
.desc { font-size: 12px; color: #777; }

/* 当前格子样式 */
.cell.active { border-color: #1f7aec; box-shadow: 0 0 0 2px rgba(31,122,236,0.15) inset; }

/* 移动路径高亮动画 */
.cell.highlight::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120px 120px at 50% 50%, rgba(31,122,236,0.18), transparent 60%);
  animation: pulse 200ms ease;
}
@keyframes pulse {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 最终格子强调 */
.cell.final { outline: 2px solid #ffb100; }

/* 标签样式（外边框与背景） */
.border-tag { outline: 2px solid #1f7aec; }
.bg-tag { background: #eaf3ff; }

@media (max-width: 768px) {
  .grid { grid-auto-rows: 64px; }
}
</style>
