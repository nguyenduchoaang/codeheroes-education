import axios from "axios";

const SERVER =  "https://localhost:7093/api"

export const endpoints = {
    create_update_muscle: "/api/Muscle/create-update-muscle",
    upload_customize_photo: "/api/Image/upload-customize-photo",
    get_all_muscle: "/api/Muscle/get-all-muscle",
    remove_muscle_dto_by_id: (id) => `/api/Muscle/remove-muscle-dto-by-id/${id}`,
    get_all_sport: "/api/Sport/get-all-sport",
    create_update_sport: "/api/Sport/create-update-sport",
    remove_sport_dto_by_id: (id) => `/api/Sport/remove-sport-dto-by-id/${id}`,
    
}

export default axios.create({
    baseURL: SERVER
})               