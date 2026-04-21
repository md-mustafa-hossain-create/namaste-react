export const LOGO_URL = new URL("../assets/favicon.svg", import.meta.url).href;

export const RESTAURANT_LIST =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5643&lng=88.3693&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export const MENU_API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=`;

export const ITEM_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const POSTER_BG_URL =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

// Bill Constants
export const DELIVERY_FEE = 30;
export const PLATFORM_FEE = 5;
