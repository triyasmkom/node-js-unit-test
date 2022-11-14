// cek string
test("test toBe", ()=>{
    const name = "triyas";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello triyas");
})

// cek object
test("test toEqual", ()=>{
    let person = {id: "triyas"};

    Object.assign(person, {name: "Triyas"})

    expect(person).toEqual({id:"triyas", name:"Triyas"});
})