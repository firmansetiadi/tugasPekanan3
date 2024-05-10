import request from "supertest";
import { baseUrl } from "../../data/configTugas.js";


const unitID = "13bbdc29-cd06-4b06-af2f-4162d1692450"

export async function createUnit(){
    const payload = {
        "name": "gram",
        "description": "weight measurement"
     }
     
let response = await request (baseUrl)
            .post("/units")
            .send(payload)
            .set("Content-Type","application/json")
            .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTM0MTc3MX0.8Rx3EQFhyq1zoa_TBS-uOpgoOyRuXzHYNVuI7eKOHMI")
    console.log (await response)
    return await response

}

export async function getDetailUnit(){

let response = await request (baseUrl)
    .get("/units") 
    .set("Content-Type","application/json")
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTM0MTc3MX0.8Rx3EQFhyq1zoa_TBS-uOpgoOyRuXzHYNVuI7eKOHMI")
    return await response
}

export async function updateUnit(){
    const payload = {
        "name": "update-meter",
        "description": "no-meter"
     }     
        

let response = await request (baseUrl)
    .put(`/units/${unitID}`)
    .send(payload) 
    .set("Content-Type","application/json") 
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTM0MTc3MX0.8Rx3EQFhyq1zoa_TBS-uOpgoOyRuXzHYNVuI7eKOHMI")
    return await response
}

export async function deleteUnit(){
let response = await request (baseUrl)
    .delete(`/units/${unitID}`) 
    .set("Content-Type","application/json") 
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTM0MTc3MX0.8Rx3EQFhyq1zoa_TBS-uOpgoOyRuXzHYNVuI7eKOHMI")
    return await response
}



