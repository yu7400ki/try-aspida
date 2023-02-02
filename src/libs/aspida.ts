import aspida from "@aspida/axios"
import api from "@/swapi/$api"

export const client = api(aspida())
