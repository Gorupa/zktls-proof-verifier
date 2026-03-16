async function verifyProof(){

const fileInput = document.getElementById("proofFile")

if(!fileInput.files.length){
alert("Please upload a proof.json file")
return
}

const file = fileInput.files[0]
const text = await file.text()

let proof

try{
proof = JSON.parse(text)
}
catch{
document.getElementById("output").textContent =
"Invalid JSON file"
return
}

const result = verifier(proof)

document.getElementById("output").textContent =
JSON.stringify(result,null,2)

}
