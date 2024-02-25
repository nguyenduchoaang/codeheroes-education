import Request from "../Request";

const BaseServices = {
  /**
   * Common Get API
   * @param {String} url The api url
   * @returns [error, data] structure data
   */
  Get: async (url) => {
    try {
      const res = await Request.Get(url);
      if (res.success) return [null, res.data];
      return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
  GetHomeApi: async (url) => {
    try {
      const res = await Request.GetHomeApi(url);
      if (res.success) return [null, res.data];
      return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
  /**
   * Common Post API
   * @param {String} url The api url
   * @param {Object} params The post body object
   * @returns [error, data] structure data
   */
  Post: async (url, params) => {
    try {
      const res = await Request.Post(url, params);
      if (res.success) return [null, res.data];
      return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
  PostHomeApi: async (url, params) => {
    try {
      const res = await Request.PostHomeApi(url, params);
      if (res.success) return [null, res.data];
      return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
  Delete: async (url) => {
    try {
      const res = await Request.Delete(url);
      if (res.success) return [null, res.data];
      return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
  DownloadFile: async (url, fileName, includeServerFileName) => {
    try {
      let res = await Request.DownloadFile(url, includeServerFileName);
      if (includeServerFileName) {
        fileName = res[0];
        res = res[1];
      }
      if (res) {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName ? fileName : "file.pdf");
        document.body.appendChild(link);
        link.click();
        return [null, res];
      } else return [null, res];
    } catch (err) {
      return [err, null];
    }
  },
};

export default BaseServices;
