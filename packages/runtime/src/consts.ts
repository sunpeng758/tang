export const TOKEN_DATA_STORAGE_KEY = 'token' // token数据存储key
export const TOKEN_REFRESH_DURATION = 120 // 每120秒刷新一次token

export const DEFAULT_CONATINER_EL = '#app' // 默认菜单名

export const DEFAULT_MENU_NAME = 'default' // 默认菜单名
export const DEFAULT_PAGE_NAME = 'welcome' // 默认页名
export const DEFAULT_PAGE_PATH = `/${DEFAULT_PAGE_NAME}` // 默认页名

export const ROOT_ROUTE_NAME = 'root' // 根路由名称
export const ROOT_MENU_PREFIX = 'root:' // 根路由名称

export const PAGE_SEARCH_DATA_KEY = '__searchData' // 页面查询数据key
export const PAGE_SEARCH_EVENT_KEY = '$page_search' // 页面查询事件

export const ERROR_ROUTE = Object.freeze({
  FORBIDDEN: '403',
  NOT_FOUND: '404',
  SERVER_ERROR: '500'
})

export const ERROR_ROUTE_NAMES = Object.values(ERROR_ROUTE)

export enum STORE_NAME {
  ROOT = 'root',
  APP = 'app',
  USER = 'user',
  PAGES = 'pages'
}

export const APP_NAME_PATTERN = /^[a-zA-Z][a-zA-Z0-9_]*$/ // 应用名称正则

export const MICRO_PAGE_CONTENT_DOM_ID = 'zpageMicroPageContent' // 微前端容器页面id

export enum AppLoaderType {
  AUTH = 'auth',
  PAGE = 'page'
}

/** 应用配置类型 */
export enum AppConfigType {
  APP = 1, // 应用配置
  API = 1 << 2, // API配置
  PAGE = 1 << 3, // 页面配置
  WIDGET = 1 << 4, // 微件配置
  CMPT = 1 << 5, // 组件配置
  PLUGIN = 1 << 6 // 插件配置
}

/** 应用上下文刷新类型 */
export const enum FlushAppContextType {
  APP = 1, // 刷新应用上下文
  USER = 1 << 1, // 刷新用户上下文
  PAGE = 1 << 2 // 刷新页面上下文
}

// 全局事件运行时
export const RUNTIME_GLOBAL_EVENTS = Object.freeze({
  CLOSE_APP_NAV: 'CLOSE_APP_NAV' // 关闭应用菜单
})
