import axios from "axios";
import cookie from "react-cookies";


const apiUrl = "https://localhost:7093"
const instance = axios.create({ baseURL: apiUrl });
var token = cookie.load("token");
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";


var Request = {
    Get: (url) => {
        return new Promise((resolve, reject) => {
            instance.get(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });  
    },
    Post: function (url, data) {
        return new Promise((resolve, reject) => {
            instance
                .post(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });  
    },
    Put: (url, data) => {
        return instance.put(url, data);
    },
    Delete: (url) => {
        return instance.delete(url);
    },

    UploadImage: function (file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            
            axios.post(`${apiUrl}/api/Image/upload-customize-photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

export default Request;