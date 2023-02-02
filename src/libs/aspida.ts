import aspida from "@aspida/axios"
import swapi from "@/api/swapi/$api"
import jsonplaceholder from "@/api/jsonplaceholder/$api"

export const swClient = swapi(aspida())
export const jsonplaceholderClient = jsonplaceholder(aspida())
