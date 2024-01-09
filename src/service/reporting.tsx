import http from './http'
import {
    ReportingIndexPost,
    ReportingIndexGet
} from '../interface'

const endpoint = '/endpoint'

export const ReportingService = async (payload: ReportingIndexPost) => {
    var response = await http.Post(endpoint, undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ReportingIndexGet = await response.json()
        return data
    } else {
        return null
    }
}
