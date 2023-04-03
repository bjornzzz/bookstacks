import { http } from './backendService'

export const getVolumeByName = (name) => {
    return http.get(`/volumes?q=${name}`)
}

export const getVolumeById = (id) => {
    return http.get(`/volumes/${id}`)
}
