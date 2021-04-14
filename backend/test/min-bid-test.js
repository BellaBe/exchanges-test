//This is just a simple test to check if the min value is returned from an array of arrays
//For a production ready software, a proper testing library is needed, edge cases tests are required
import {getMinBid} from "../exchange.js"

const assert = (expected, received) => {
    if(expected === received){
        console.log("Test passed")
    }else{
        console.log(`Something went wrond, expected values: ${expected}, received values: ${received}`)
    }
}

const arrayOfValues = [["110"], ["5"], ["10"], ["20"]]

assert(JSON.stringify(["5"]), JSON.stringify(getMinBid(arrayOfValues)));
