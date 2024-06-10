export const BASE_URL = 'https://api.flipshops.co.in/';
export const API_VERSION = 'v1/';
export const BRAND = 'fsa/';
export const MAP_API_KEY = '';
export const X_CLIENT_ID = 'vivsn5hHSVKrF22f1cSGEg==';
export const X_CLIENT_SECRET =
  '048d90a45a0ba4d81c83f8a5fd0ba39a9049c8f2d4096f18a026c8790761cc06';
// export const Auth_KEY=Utility.GetAuthToken("authkey")
// Directories...
export const SELLER_DIRECTORY = 'seller/';
export const HOME = 'home/';
export const MENU = 'menu/';
export const Discovery = 'discover/';
export const GIFTCARD = 'gv/';
export const STORELOCATOR = 'storeLocator/';
export const PRODUCTS = 'products/';
export const TOKEN = 'token/';
export const CUSTOMER = 'customer/';

//methods
export const SEND_OTP = 'send-otp/';
export const AUTH = 'auth/';
export const VERIFYOTP = 'verify-otp/';
export const AGENT = 'agent/';
export const TASK = 'task/';
export const NOTIFICATION = 'notification/';
export const UPDATETASK = 'update-task-status/';
export const DELIVERED_OTP = 'send-otp-for-delivered/';
export const DELIVERED_VERIFY = 'verify-order-delivered-otp/';
export const UPLOAD = 'upload/';

//urls
// export const CHECK_FORCE_UPDATE =
//   BASE_URL + SELLER_DIRECTORY + METHOD_CHECK_FORCE_UPDATE;
// export const SEND_OTP = BASE_URL + SELLER_DIRECTORY + METHOD_SEND_OTP;
// export const VALIDATE_OTP = BASE_URL + SELLER_DIRECTORY + METHOD_VALIDATE_OTP;
// export const PRODUCT_LIST = BASE_URL + API_VERSION + PRODUCTS + BRAND;

//get url
// export const GET_HOME = BASE_URL + API_VERSION + HOME + BRAND;
// export const GET_MENU = BASE_URL + API_VERSION + MENU + BRAND;
// export const GET_Discovery = BASE_URL + API_VERSION + Discovery + BRAND;
// export const GET_GIFTCARD = BASE_URL + API_VERSION + GIFTCARD + BRAND;
// export const GET_STORE_LIST = BASE_URL + API_VERSION + STORELOCATOR + BRAND;

//Post url
export const SEND_OTP_API = BASE_URL + BRAND + SEND_OTP;
export const USER_DETAILS = BASE_URL + BRAND + AGENT;
export const ORDER_DETAILS = BASE_URL + BRAND + TASK;
export const URLAGENT = BASE_URL + BRAND + AGENT;

// export const GENRATE_TOKEN = BASE_URL + API_VERSION + TOKEN + BRAND;
// export const CUSTOMER_REGISTER =
//   BASE_URL + API_VERSION + CUSTOMER + REGISTER + BRAND;
// export const CUSTOMER_LOGIN = BASE_URL + API_VERSION + CUSTOMER + LOGIN + BRAND;
// export const CUSTOMER_VERIFYOTP =
//   BASE_URL + API_VERSION + CUSTOMER + VERIFYOTP + BRAND;
export const VERIFY_OTP = BASE_URL + BRAND + VERIFYOTP;
export const UPDATETASKSTATUS = BASE_URL + BRAND + UPDATETASK;

export const DELIVERED_SEND_OTP = BASE_URL + BRAND + DELIVERED_OTP;
export const DELIIVERED_VERIFY_OTP = BASE_URL + BRAND + DELIVERED_VERIFY;

export const UPLOAD_IMAGE = BASE_URL + BRAND + UPLOAD;
