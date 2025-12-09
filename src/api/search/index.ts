import type { GeneralResponse } from '@/api/generalType'
import fileRequest from '@/utils/fileRequest'
import request from '@/utils/request'
import type { AxiosResponse } from 'axios'
import type { AnimeInfo, SearchForm } from './type'

enum API {
  HELLO_WORLD_URL = 'anime/hello',
  SEARCH_URL = 'anime/deep_search',
  QUICK_SEARCH_URL = 'anime/quick_search',
  DOWNLOAD_URL = 'anime/download',
  BACKGROUND_DOWNLOAD_URL = 'anime/download_torrent',
}

export function helloWorld() {
  return request.post<null, GeneralResponse<string>>(API.HELLO_WORLD_URL)
}

export function quickSearch(searchForm: SearchForm) {
  return request.post<SearchForm, GeneralResponse<AnimeInfo>>(API.QUICK_SEARCH_URL, searchForm)
}

export function search(searchForm: SearchForm) {
  return request.post<SearchForm, GeneralResponse<AnimeInfo>>(API.SEARCH_URL, searchForm)
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
