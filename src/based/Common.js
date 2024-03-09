import cookie from "react-cookies";
import { PLATFORM, REGEX } from "../based/Constants";
import Request from "./Request";

var Common = {
  actionType: {
    Insert: 1,
    Update: 2,
    Delete: 3,
  },

  getStringWithoutExtension(stringUrl) {
    return stringUrl.replace(/\.[^/.]+$/, "");
  },
  truncateString(str, length) {
    if (str !== undefined && length < str.length)
      return str.substring(0, length) + "...";
    return str;
  },

  isValidEmail(email) {
    return REGEX.EMAIL.test(email.toLowerCase());
  },

  isValidCode(code) {
    return REGEX.CODE.test(code.toLowerCase());
  },

  isNumber(number) {
    return REGEX.NUMBER.test(number);
  },

  isUserName(username) {
    return REGEX.USERNAME.test(username);
  },
  iValidHashtag(str) {
    const regexExp = /^#[^ !@#$%^&*(),.?":{}|<>]*$/gi;
    return regexExp.test(str);
  },
  isValidPhone(phone) {
    return REGEX.PHONE.test(phone);
  },

  isValidUrl(url) {
    return REGEX.URL.test(url);
  },

  generateGuid() {
    return (
      Common.s4() +
      Common.s4() +
      "-" +
      Common.s4() +
      "-" +
      Common.s4() +
      "-" +
      Common.s4() +
      "-" +
      Common.s4() +
      Common.s4() +
      Common.s4()
    );
  },

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  randomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  formatDate(date, type) {
    if (date == undefined || date == null || date == "Invalid Date") return "";
    var day = this.formatNumber(date.getDate(), 2);
    var month = this.formatNumber(date.getMonth() + 1, 2);
    var year = this.formatNumber(date.getFullYear(), 4);
    var hours = this.formatNumber(date.getHours(), 2);
    var minutes = this.formatNumber(date.getMinutes(), 2);
    var seconds = this.formatNumber(date.getSeconds(), 2);
    var result = day + "/" + month + "/" + year;
    switch (type) {
      case "fulldate":
        result += " " + hours + ":" + minutes + ":" + seconds;
        break;
      case "datetime":
        result += " " + hours + ":" + minutes;
        break;
      case "timedate":
        result = hours + ":" + minutes + " " + result;
        break;
      case "jsondate":
        result = date.toISOString();
        break;
    }
    return result;
  },
  formatNumber(number, length) {
    var result = "";
    for (var i = 0; i < length; i++) {
      result += "0";
    }
    result += number;
    return result.slice(-length);
  },
  formatCurrency(currency) {
    return currency
      ? currency.toLocaleString("vi", { style: "currency", currency: "VND" })
      : 0;
  },
  generateAvatarByText(name, email) {
    let avatar = null;
    if (name && name.trim().length > 0) {
      var arr = name.trim().split(" ");
      if (arr && arr.length > 0) {
        if (arr.length == 1) {
          avatar = arr[0].substring(0, 1);
        } else {
          var temp1 = arr[arr.Length - 2].substring(0, 1);
          var temp2 = arr[arr.Length - 1].substring(0, 1);
          avatar = temp1 + temp2;
        }
      }
    } else if (email && email.trim().length > 0) {
      avatar = email.substring(0, 1);
    }
    return avatar;
  },
  UrlFriendlyCategory: [
    {
      value: 1,
      label: "Danh  mục sản phẩm",
    },
    {
      value: 2,
      label: "Sản phẩm",
    },
    {
      value: 3,
      label: "Campaign",
    },
  ],
  GetToken: () => {
    let token = cookie.load("token");
    return token;
  },
  GetRUUID: () => {
    let ruuid = cookie.load("ruuid");
    return ruuid;
  },
  GetUserName: () => {
    var token = Common.GetToken();
    var userName = "";
    if (token) {
      const jwtDecode = require("jwt-decode");
      let decode = jwtDecode(token);
      userName =
        decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    }
    return userName;
  },
  IsAdmin: () => {
    var token = Common.GetToken();
    var isAdmin = false;
    if (token) {
      const jwtDecode = require("jwt-decode");
      let decode = jwtDecode(token);
      isAdmin = decode.is_admin === "True";
    }
    return isAdmin;
  },
  IsCreator: () => {
    var token = Common.GetToken();
    var isCreator = false;
    if (token) {
      const jwtDecode = require("jwt-decode");
      let decode = jwtDecode(token);
      isCreator = decode.is_creator === "True";
    }
    return isCreator;
  },
  IsConfirmedEmail: () => {
    var token = Common.GetToken();
    if (token) {
      const jwtDecode = require("jwt-decode");
      let decode = jwtDecode(token);
      return decode.VerifyEmail === "True";
    }
    return false;
  },
  RemoveToken: () => {
    cookie.remove("token");
    sessionStorage.removeItem("tfuToken");
  },
  DetectPlatform: (flatform) => {
    let pathname = window.location.pathname;
    if (pathname && pathname.length > 0) {
      if (pathname.indexOf("lotus") >= 0 || flatform == "lotus")
        return PLATFORM.LOTUS;
      if (pathname.indexOf("facebook") >= 0 || flatform == "facebook")
        return PLATFORM.Facebook;
      if (pathname.indexOf("lazada") >= 0 || flatform == "lazada")
        return PLATFORM.Lazada;
      if (pathname.indexOf("shopee") >= 0 || flatform == "shopee")
        return PLATFORM.Shopee;
      if (pathname.indexOf("tiki") >= 0 || flatform == "tiki")
        return PLATFORM.Tiki;
      if (pathname.indexOf("sendo") >= 0 || flatform == "sendo")
        return PLATFORM.Sendo;
      if (pathname.indexOf("tiktok") >= 0 || flatform == "tiktok")
        return PLATFORM.Tiktok;
      if (pathname.indexOf("undefined") >= 0 || flatform == "undefined")
        return PLATFORM.Undefined;
    }
    return PLATFORM.LOTUS;
  },
  isDesktop() {
    return window.innerWidth > 760;
  },
  DetectPlatformName: (platform) => {
    switch (platform) {
      case PLATFORM.Facebook:
        return "facebook";
      case PLATFORM.Lazada:
        return "lazada";
      case PLATFORM.Shopee:
        return "shopee";
      case PLATFORM.Tiki:
        return "tiki";
      case PLATFORM.Sendo:
        return "sendo";
      case PLATFORM.Undefined:
        return "undefined";
      default:
        return "lotus";
    }
  },
  //những platform được sử dụng trong hệ thống
  PlatformsActive: [
    {
      value: PLATFORM.Lazada,
      label: "Lazada",
    },
    {
      value: PLATFORM.Shopee,
      label: "Shopee",
    },
  ],
  /**
   * Group an array by property
   * @param {any[]} array An array can be grouped
   * @param {string} key proprety name
   */
  GroupArray(array, key) {
    const map = new Map();
    array.forEach((item) => {
      let keyValue = item[key] ? item[key] : "Danh mục khác";
      const collection = map.get(keyValue);
      if (!collection) {
        map.set(keyValue, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  },
  formatAddress(address) {
    return this.formatAddress(
      address.street,
      address.wardName,
      address.districtName,
      address.provinceName
    );
  },
  formatAddress(street, ward, district, province) {
    let formatedAddress = [];
    if (street) formatedAddress.push(street);
    if (ward) formatedAddress.push(ward);
    if (district) formatedAddress.push(district);
    if (province) formatedAddress.push(province);
    return formatedAddress.join(", ");
  },
  matchPhones(phone) {
    return phone.match(REGEX.PHONES);
  },
  matchEmails(email) {
    return email.match(REGEX.EMAILS);
  },
  matchUrls(url) {
    return url.match(REGEX.URLS);
  },
  isMobile() {
    let deviceW = window.innerWidth;
    if (deviceW > 760) return false;
    else return true;
  },
  isHexColorValue(string) {
    return REGEX.HEX_COLOR.test(string);
  },

  base64toBlob(b64Data, contentType = "", sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  },
  SetLotusChargeAmount(loyaltyAmount, readRateCard) {
    if (loyaltyAmount > 0 && readRateCard && readRateCard.length > 0) {
      let total = 0;
      let tmp = 0;
      for (let index = 0; index < readRateCard.length; index++) {
        if (loyaltyAmount >= readRateCard[index].loyaltyAmount) {
          total +=
            (readRateCard[index].loyaltyAmount - tmp) *
            (1 - readRateCard[index].lotusChargePercent * 0.01);
          tmp = readRateCard[index].loyaltyAmount;
        } else {
          total +=
            (loyaltyAmount - tmp) *
            (1 - readRateCard[index].lotusChargePercent * 0.01);
          break;
        }
      }
      return loyaltyAmount - total;
    } else {
      return 0;
    }
  },
  GetFileName(url) {
    if (!url) return;
    let fileName = url.split(/(\\|\/)/g).pop();
    return fileName;
  },
  ProductAttributeDisplay(productName, attributes, colorDisplayName) {
    return `${productName}, ${attributes.reduce((prev, element, index) => {
      if (element.code !== "Color")
        prev += `${element.value || element.name}, `;
      return prev;
    }, "")} ${colorDisplayName}`;
  },
  removeVietnameseFromString(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.toLowerCase();
    str = str.replace(/#/g, "");
    return str;
  },
  stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  },
  convertToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  },
};
export default Common;
