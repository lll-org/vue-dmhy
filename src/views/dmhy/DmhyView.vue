<template>
  <!-- 搜索模块 -->
  <div class="main-container">
    <el-form :model="searchForm">
      <el-form-item>
        <div class="search-container">
          <el-input
            v-model="searchForm.title"
            placeholder="今天看点什么"
            clearable
            style="width: 800px"
            @keyup.enter="searchHandle"
          ></el-input>
          <el-button
            type="primary"
            size="default"
            @click="quickSearchHandle"
            :disabled="isSearching"
          >
            快速搜索
          </el-button>
          <el-button type="primary" size="default" @click="searchHandle" :disabled="isSearching">
            搜索
          </el-button>
        </div>
      </el-form-item>
      <el-form-item size="normal">
        <div class="more-container">
          <div class="category-box">
            <p>在下列分類中搜索：</p>
            <el-select class="select-box" v-model="searchForm.type_id">
              <el-option value="0" label="全部"></el-option>
              <el-option
                value="2"
                label="動畫"
                style="color: red; --darkreader-inline-color: #ff1a1a"
              ></el-option>
              <el-option
                value="31"
                label="季度全集"
                style="color: red; --darkreader-inline-color: #ff1a1a"
              ></el-option>
              <el-option
                value="3"
                label="漫畫"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="41"
                label="港台原版"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="42"
                label="日文原版"
                style="color: green; --darkreader-inline-color: #72ff72"
              ></el-option>
              <el-option
                value="4"
                label="音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="43"
                label="動漫音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="44"
                label="同人音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="15"
                label="流行音樂"
                style="color: purple; --darkreader-inline-color: #ff72ff"
              ></el-option>
              <el-option
                value="6"
                label="日劇"
                style="color: blue; --darkreader-inline-color: #337dff"
              ></el-option>
              <el-option
                value="7"
                label="ＲＡＷ"
                style="color: orange; --darkreader-inline-color: #ffae1a"
              ></el-option>
              <el-option
                value="9"
                label="遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="17"
                label="電腦遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="18"
                label="電視遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="19"
                label="掌機遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="20"
                label="網絡遊戲"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="21"
                label="遊戲周邊"
                style="color: rgb(14, 185, 231); --darkreader-inline-color: #2dc9f2"
              ></el-option>
              <el-option
                value="12"
                label="特攝"
                style="color: brown; --darkreader-inline-color: #d76363"
              ></el-option>
              <el-option
                value="1"
                label="其他"
                style="color: black; --darkreader-inline-color: #e8e6e3"
              ></el-option>
            </el-select>
          </div>
          <div class="category-box">
            在下列聯盟中搜索：
            <el-select class="select-box" v-model="searchForm.subtitle_group_id">
              <el-option value="0" label="全部"></el-option>
              <el-option value="117" label="動漫花園"></el-option>
              <el-option value="823" label="拨雪寻春"></el-option>
              <el-option value="801" label="NC-Raws"></el-option>
              <el-option value="669" label="喵萌奶茶屋"></el-option>
              <el-option value="803" label="Lilith-Raws"></el-option>
              <el-option value="648" label="魔星字幕团"></el-option>
              <el-option value="619" label="桜都字幕组"></el-option>
              <el-option value="767" label="天月動漫&amp;發佈組"></el-option>
              <el-option value="185" label="极影字幕社"></el-option>
              <el-option value="657" label="LoliHouse"></el-option>
              <el-option value="151" label="悠哈C9字幕社"></el-option>
              <el-option value="749" label="幻月字幕组"></el-option>
              <el-option value="390" label="天使动漫论坛"></el-option>
              <el-option value="303" label="动漫国字幕组"></el-option>
              <el-option value="241" label="幻樱字幕组"></el-option>
              <el-option value="47" label="爱恋字幕社"></el-option>
              <el-option value="805" label="DBD制作组"></el-option>
              <el-option value="604" label="c.c动漫"></el-option>
              <el-option value="550" label="萝莉社活动室"></el-option>
              <el-option value="283" label="千夏字幕组"></el-option>
              <el-option value="772" label="IET字幕組"></el-option>
              <el-option value="288" label="诸神kamigami字幕组"></el-option>
              <el-option value="804" label="霜庭云花Sub"></el-option>
              <el-option value="755" label="GMTeam"></el-option>
              <el-option value="454" label="风车字幕组"></el-option>
              <el-option value="37" label="雪飄工作室(FLsnow)"></el-option>
              <el-option value="764" label="MCE汉化组"></el-option>
              <el-option value="488" label="丸子家族"></el-option>
              <el-option value="731" label="星空字幕组"></el-option>
              <el-option value="574" label="梦蓝字幕组"></el-option>
              <el-option value="504" label="LoveEcho!"></el-option>
              <el-option value="650" label="SweetSub"></el-option>
              <el-option value="630" label="枫叶字幕组"></el-option>
              <el-option value="479" label="Little Subbers!"></el-option>
              <el-option value="321" label="轻之国度"></el-option>
              <el-option value="649" label="云光字幕组"></el-option>
              <el-option value="520" label="豌豆字幕组"></el-option>
              <el-option value="626" label="驯兽师联盟"></el-option>
              <el-option value="666" label="中肯字幕組"></el-option>
              <el-option value="781" label="SW字幕组"></el-option>
              <el-option value="576" label="银色子弹字幕组"></el-option>
              <el-option value="434" label="风之圣殿"></el-option>
              <el-option value="665" label="YWCN字幕组"></el-option>
              <el-option value="228" label="KRL字幕组"></el-option>
              <el-option value="49" label="华盟字幕社"></el-option>
              <el-option value="627" label="波洛咖啡厅"></el-option>
              <el-option value="88" label="动音漫影"></el-option>
              <el-option value="581" label="VCB-Studio"></el-option>
              <el-option value="407" label="DHR動研字幕組"></el-option>
              <el-option value="719" label="80v08"></el-option>
              <el-option value="732" label="肥猫压制"></el-option>
              <el-option value="680" label="Little字幕组"></el-option>
              <el-option value="613" label="AI-Raws"></el-option>
              <el-option value="806" label="离谱Sub"></el-option>
              <el-option value="812" label="虹咲学园烤肉同好会"></el-option>
              <el-option value="636" label="ARIA吧汉化组"></el-option>
              <el-option value="75" label="柯南事务所"></el-option>
              <el-option value="821" label="百冬練習組"></el-option>
              <el-option value="641" label="冷番补完字幕组"></el-option>
              <el-option value="765" label="爱咕字幕组"></el-option>
              <el-option value="822" label="極彩字幕组"></el-option>
              <el-option value="217" label="AQUA工作室"></el-option>
              <el-option value="592" label="未央阁联盟"></el-option>
              <el-option value="703" label="届恋字幕组"></el-option>
              <el-option value="808" label="夜莺家族"></el-option>
              <el-option value="734" label="TD-RAWS"></el-option>
              <el-option value="447" label="夢幻戀櫻"></el-option>
              <el-option value="790" label="WBX-SUB"></el-option>
              <el-option value="807" label="Liella!の烧烤摊"></el-option>
              <el-option value="814" label="Amor字幕组"></el-option>
              <el-option value="813" label="MingYSub"></el-option>
              <el-option value="835" label="小白GM"></el-option>
              <el-option value="832" label="Sakura"></el-option>
              <el-option value="845" label="PMFAN字幕组"></el-option>
              <el-option value="817" label="EMe"></el-option>
              <el-option value="818" label="Alchemist"></el-option>
              <el-option value="819" label="黑岩射手吧字幕组"></el-option>
              <el-option value="816" label="ANi"></el-option>
              <el-option value="844" label="DBFC字幕组"></el-option>
              <el-option value="836" label="MSB制作組"></el-option>
            </el-select>
          </div>
          <div class="category-box">
            按下列順序排列：
            <el-select class="select-box" v-model="searchForm.sort_value">
              <el-option value="date-desc" label="發佈時間從後往前"></el-option>
              <el-option value="date-asc" label="發佈時間從前往後"></el-option>
              <el-option value="rel" label="相關度"></el-option>
            </el-select>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>

  <!-- 展示模块 -->
  <div class="show-container">
    <div v-show="!isSearching">
      <el-button
        type="primary"
        size="default"
        @click="localDownloadHandle"
        :disabled="downloadStatus.isLocalDownloading"
        >{{
          downloadStatus.isLocalDownloading ? '本地努力下载中...' : '本地下载所有选中项'
        }}</el-button
      >
      <el-button
        type="primary"
        size="default"
        @click="backgroundDownloadHandle"
        :disabled="downloadStatus.isBackgroundDownloading"
        >{{
          downloadStatus.isBackgroundDownloading ? '后台努力下载中...' : '后台下载所有选中项'
        }}</el-button
      >
      <el-table
        :data="animeInfoList"
        stripe
        style="width: 100%"
        row-key="id"
        transparent
        @selection-change="selectionChangeHandle"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="字幕组" align="center" :width="100">
          <template #default="scope">
            {{ scope.row.subtitle_group_name }}
          </template>
        </el-table-column>
        <el-table-column label="动漫" align="left" :width="800">
          <template #default="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column label="相关链接" align="center" :width="300">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              :href="scope.row.paipak_url"
              target="_blank"
              tag="a"
            >
              PikPak
            </el-button>
            <el-button
              :disabled="true"
              type="primary"
              size="small"
              :href="scope.row.magnet_url"
              target="_blank"
              >磁力链接</el-button
            >
            <el-button type="primary" size="small" :href="scope.row.torrent_url" target="_blank"
              >种子下载</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="大小" align="center" :width="100">
          <template #default="scope">
            {{ scope.row.size }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="isSearching" class="search-loading">
      <el-icon class="is-loading" :size="100"><Loading /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { backgroundDownload, quickSearch, search } from '@/api/search/index'
import type { AnimeInfo, SearchForm } from '@/api/search/type'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

// 下载状态，控制本地下载与后台下载的显示相关
const downloadStatus = ref({
  isLocalDownloading: false,
  isBackgroundDownloading: false,
})

// 搜索状态，控制快速搜索与深度搜索的显示相关
const searchStatus = ref({
  isDeepSearching: false,
  isQuickSearching: false,
})
// 搜索表单，用于收集搜索内容
const searchForm = ref<SearchForm>({
  title: '今天看点什么',
  type_id: '0',
  subtitle_group_id: '0',
  sort_value: '0',
})

// 一个动漫信息，用于测试
const oneAnimeInfo = ref<AnimeInfo>({
  id: 1,
  type_id: '2',
  type_name: '动画',
  subtitle_group_id: '117',
  subtitle_group_name: 'LoliHouse',
  title:
    '魔法少女小圆 起始的物语 / 永远的物语 TV 剪辑版 / Puella Magi Madoka - 03 [WebRip 1080p HEVC-10bit AAC][日语内封字幕]',
  paipak_url:
    'https://keepshare.org/i9l0fcvt/magnet%3A%3Fxt%3Durn%3Abtih%3A446203526301144dcf64a89d73af7cfc7c55d4e6',
  magnet_url:
    '6969%2Fannounce&tr=http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.edkj.club%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=http%3A%2F%2Ft.overflow.biz%3A6969%2Fannounce&tr=http%3A%2F%2Fch3oh.ru%3A6969%2Fannounce&tr=http%3A%2F%2Fbvarf.tracker.sh%3A2086%2Fannounce&tr=https%3A%2F%2Fyolo.liberbear.com%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.gcrreen.xyz%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.gbitt.info%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.cloudit.top%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce&tr=http%3A%2F%2F1337.abcvg.info%3A80%2Fannounce',
  size: '4.0GB',
  detail_url:
    'https://share.dmhy.org/topics/view/685671_GM-Team_Swallowed_Star_Movie_2024_HEVC_GB_4K.html',
  torrent_url: 'https://dl.dmhy.org/2024/12/23/446203526301144dcf64a89d73af7cfc7c55d4e6.torrent',
})
const animeInfoList = ref<AnimeInfo[]>([])
const multipleSelection = ref<AnimeInfo[]>([])

for (let i = 0; i < 10; i++) {
  const newAnimeInfo = { ...oneAnimeInfo.value }
  newAnimeInfo.id = i + 1
  animeInfoList.value.push(newAnimeInfo)
}

// 快速搜索，后端有返回值
async function quickSearchHandle() {
  searchStatus.value.isQuickSearching = true
  console.log(searchForm.value)

  const result = await quickSearch(searchForm.value)
  if (result.code === 200) {
    animeInfoList.value = result.data
  } else {
    ElMessage.error('搜索失败')
  }
  searchStatus.value.isQuickSearching = false
}

// todo: 深度搜索，后端无返回值
async function searchHandle() {
  searchStatus.value.isDeepSearching = true
  console.log(searchForm.value)
  await search(searchForm.value)
  searchStatus.value.isDeepSearching = false
}

// 多选框选中项改变时，更新选中项
async function selectionChangeHandle(val: AnimeInfo[]) {
  multipleSelection.value = val
}

// 本地下载所有选中项
async function localDownloadHandle() {
  downloadStatus.value.isLocalDownloading = true
  try {
    for (const element of multipleSelection.value) {
      await sleep(500)
      console.log(element.title)
      triggerDownload(element.torrent_url, element.title + '.torrent')
    }
  } finally {
    downloadStatus.value.isLocalDownloading = false
  }
}

// 睡眠函数，用于模拟下载时间
function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

// 后台下载所有选中项
async function backgroundDownloadHandle() {
  downloadStatus.value.isBackgroundDownloading = true

  const response = await backgroundDownload(multipleSelection.value)
  // 1. 解析文件名
  let filename = 'download.zip'
  const disposition = response.headers['content-disposition']
  if (disposition) {
    const match = disposition.match(/filename="?(.+)"?/)
    if (match && match[1]) {
      filename = decodeURIComponent(match[1])
    }
  }

  const blob = new Blob([response.data], { type: 'application/zip' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)

  downloadStatus.value.isBackgroundDownloading = false
}

// 单个文件下载方法
function triggerDownload(url: string, fileName: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style lang="scss">
.main-container {
  display: flex;
  // width: 100%;
  // height: 100px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;

  // background-color: pink;

  .search-container {
    display: flex;
    align-items: center;
  }

  .more-container {
    width: 100%;
    display: flex;
    gap: 10px;
    // justify-content: space-between;
    // align-items: center;

    .category-box {
      display: flex;
      align-items: center;
      // background-color: blue;

      .select-box {
        width: 100px;
      }
    }
  }
}

.show-container {
  width: 1350px;
  // height: 500px;
  margin: 20px auto;
  // background-color: greenyellow;

  .search-loading {
    display: flex;
    justify-content: center;
    // background-color: pink;
    // margin: auto, 0px;
  }
}
</style>
