import assert from 'assert';
import login from '../untils/login.mjs';

 it("Login API should return a vailid login toke",()=>{

    const loginToken= await login({userName:"iwonttellyou@unknown.com", password: "!1Pasw"})

    assert.equal(loginToken.length,36);

 })