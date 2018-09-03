import * as appConfig from "../config/appConfig.json";
import { httpPost, fetch_wrapper } from ".";
import format, { stringFormat } from "../utils/stringUtils";

// Host identifier for api url and request headers
const HOST_RENEWBUY = "renewbuy";
const HOST_DOSSIER = "dossier";
const HOST_PAYMASTER = "paymaster";
const HOST_AMS = "ams";
const HOST_RENEWBUY_V1="renewbuyV1";

/**
 * Return configuration of specified host
 * @param {String} hostName specifies the remote host
 */
function getHostConfig(hostName = "") {
  return appConfig.host[hostName];
}

/**
 * Return base url for request based on host
 * @param {String} hostName specifies the remote host
 */
function getBaseUrl(hostName = "") {
  return getHostConfig(hostName).url;
}

/**
 * Return request header for request based on host
 * @param {String} hostName specifies the remote host
 */
function getRequestHeader(hostName = "") {
  return hostName != HOST_AMS ? {
    "Content-Type": "application/json",
    //"App-ID": getHostConfig(hostName).appId,
    //"API-SECRET-KEY": getHostConfig(hostName).apiSecretKey,
    "Authorization": "Token 1a2490cef8829b76811145070e33dca9175288bc"
  } : {
    "Content-Type": "application/json",
    "Api-Key": getHostConfig(hostName).appId,
    "SECRET-KEY": getHostConfig(hostName).apiSecretKey
  };
}

/**
 * Method used to get the request method for the given request
 * specifies in appConfig.json
 *
 * @param {String} hostName specifies the remote host
 * @param {String} request name
 * @returns return method required for request
 */
function getRequestMethod(hostName = "", request = "") {
  return getHostConfig(hostName).api[request].method;
}

/**
 *
 * @param {String} hostName specifies the remote host
 * @param {String} request name to create complete url
 * @returns Return complete url with suffix path
 */
function getRequestUrl(hostName = "", request = "", templateValue = {}) {
  if (getBaseUrl(hostName) == null) return null;
  
  var path = getHostConfig(hostName).api[request].path;
  return stringFormat(getBaseUrl(hostName) + path, templateValue);
}

/**
 * This method is responsible for all renewbuy {/api/v2} request with all required details.
 */
export function renewbuyApiRouter(requestName, params, templateValue) {
  return baseApiRouter(HOST_RENEWBUY, requestName, params, templateValue);
}

/**
 
/**
 * This method is responsible for all renewbuy {/api/v1} request with all required details.
 */
export function renewbuyV1ApiRouter(requestName, params, templateValue) {
  return baseApiRouter(HOST_RENEWBUY_V1, requestName, params, templateValue);
}

/**
 * 
 * This method is responsible for all ams request with all required details.
 */
export function amsApiRouter(requestName, params, templateValue) {
  return baseApiRouter(HOST_AMS, requestName, params, templateValue);
}

/**
 * 
 * This method is responsible for all ams request with all required details.
 */
export function dossierApiRouter(requestName, params, templateValue) {
  return baseApiRouter(HOST_DOSSIER, requestName, params, templateValue);
}

/**
 * This method is responsible for all request execute in the project
 * with all required details e.g request headers, base url, path suffix,
 * query parameter & request parameter
 */
function baseApiRouter(hostName = "", request = "", params = {}, templateValue = {}) {

  return fetch_wrapper(
    getRequestMethod(hostName, request),
    getRequestUrl(hostName, request, templateValue),
    getRequestHeader(hostName),
    params
  ).then(data => {
    return data;
  });
}