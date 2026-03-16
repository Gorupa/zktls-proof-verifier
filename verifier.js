function verifier(proof){

if(!proof){
return {
status:"invalid",
message:"No proof data"
}
}

return {

status:"valid",

server: proof.server || "unknown",

timestamp: proof.timestamp || "unknown",

dataHash: proof.dataHash || "not provided",

message:"Proof structure looks valid (demo verification)"

}

}
