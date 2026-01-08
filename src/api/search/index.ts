import type { GeneralResponse } from '@/api/generalType'
import fileRequest from '@/utils/fileRequest'
import request from '@/utils/request'
import type { AxiosResponse } from 'axios'
import type { AnimeInfo, SearchForm } from './type'

enum API {
  TEST_URL = 'lll/user/userInfo',
  SEARCH_URL = 'dmhy/anime/deep_search',
  QUICK_SEARCH_URL = 'dmhy/anime/quick_search',
  DOWNLOAD_URL = 'dmhy/anime/download',
  BACKGROUND_DOWNLOAD_URL = 'dmhy/anime/download_torrent',
  SEARCH_REDIS_URL = 'dmhy/anime/search_redis',
}

export function test() {
  return request.get<null, GeneralResponse<string>>(API.TEST_URL)
}

export function quickSearch(searchForm: SearchForm) {
  return request.post<SearchForm, GeneralResponse<AnimeInfo[]>>(API.QUICK_SEARCH_URL, searchForm)
}

export function deep_search(searchForm: SearchForm) {
  return request.post<SearchForm, GeneralResponse<string>>(API.SEARCH_URL, searchForm)
}

export function search_redis(task_id: string) {
  return request.get<string, GeneralResponse<AnimeInfo[]>>(API.SEARCH_REDIS_URL, {
    params: { task_id },
  })
}

export function download(downloadList: AnimeInfo[]) {
  return request.post<AnimeInfo[], GeneralResponse<string[]>>(API.DOWNLOAD_URL, downloadList)
}

export function backgroundDownload(downloadList: AnimeInfo[]) {
  return fileRequest.post<AnimeInfo[], AxiosResponse<Blob>>(
    API.BACKGROUND_DOWNLOAD_URL,
    downloadList,
    {
      responseType: 'blob',
    },
  )
}
