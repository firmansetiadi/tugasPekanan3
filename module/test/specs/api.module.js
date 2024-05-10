import request from "supertest";
import { expect } from "chai";
import { createUnit, getDetailUnit, updateUnit, deleteUnit } from "../function/unit.spec.js";

describe("Tugas Api Automation", () => {
    it("Create Unit", async function () {
        this.timeout(2000) 
        let response = await createUnit()
        expect((await response).status).to.equal(201)
        expect((await response).body.status).to.equal("success")  
    })

    it("Get Detail Unit", async function () {
        this.timeout(2000)

        let response = await getDetailUnit()
        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.equal("success")  
    })

    it("Update Untit", async function () {
        this.timeout(2000)
 
        let response = await updateUnit()
        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.equal("success") 
    })

    it("Delete Unit", async function () {
        this.timeout(2000)

        let response = await deleteUnit()
        expect((await response).status).to.equal(200) 
        expect((await response).body.status).to.equal("success")  
    }) 
})




